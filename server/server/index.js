// var express = require("express");
// var cors = require("cors");
// var app = express();

// app.use(cors());
// const options = {
// 	initialState: "Washing",
// 	states: {
// 		Washing: {
// 			nextState: "Rinsing",
// 			waitUntilNextState: 5000,
// 			callback: "",
// 		},

// 		Rinsing: {
// 			nextState: "Wringing",
// 			waitUntilNextState: 3000,
// 			callback: "",
// 		},

// 		Wringing: {
// 			nextState: "End",
// 			waitUntilNextState: 5000,
// 			callback: "",
// 		},
// 		End: {
// 			nextState: null,
// 			waitUntilNextState: 1000,
// 			callback: "",
// 		},
// 	},
// };

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
// 	console.log(`Server listening on ${PORT}`);
// });
// app.get("/getOptions", (req, res) => {
// 	res.json(options);
// });

var express = require("express");
var router = express.Router();

const fuelState = {
	state:100
};

router.get("/",function(req,res,next){
    res.json(fuelState);
});

module.exports=router;