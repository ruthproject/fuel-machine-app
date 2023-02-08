import { useEffect, useState } from 'react';
import { getOptions } from "./api/Api";
let nIntervId;
let nIntervId2;

export const useMachine = () => {
  let [amount, setAmount] = useState(0);
  const [isDriving, setIsdriving] = useState(false);
  const [isFilling, setIsFilling] = useState(false);

  useEffect(() => {
    getOptions().then((result) => {
      setAmount(result.data.state);
    });
  }, []);

  const drive = () => {
    use();
    frame();
  }

  const changeAmount = (action) => {
    const actionToDo = action ==='drive' ?  drive: fillUp;
     nIntervId = setInterval(actionToDo, 100);
  }

  const stopFillUp = () => {
    setIsFilling(false);
    clearInterval(nIntervId);
    nIntervId2 = null;
  }

  const stopDriving = () => {
    setIsdriving(false);
    clearInterval(nIntervId);
    nIntervId = null;
  }
  const use = () => {
    if (isDriving == false && amount >= 1 && isFilling == false) {
      setIsdriving(true);
      amount = amount - 1;
      setAmount(amount);
    }
    else {
      setIsdriving(false);
      stopDriving();

    }
  }

  const fillUp = () => {
    if (amount <= 99 && isDriving == false) {
      setIsFilling(true);
      amount = amount + 1;
      setAmount(amount);
    }
    else {
      setIsFilling(false);
      stopFillUp();
    }
  }

  let pos = 0;
  const frame = () => {
    if (isDriving == false && pos == 880) {
      clearInterval(nIntervId);
    } else {
      if (amount > 0) {
        pos = pos + 7;
        let elem = document.getElementById("myAnimation");
        elem.style.right = pos + 'px';
      }
   }
  }

  return { amount, changeAmount, stopFillUp, isDriving, stopDriving }
};

