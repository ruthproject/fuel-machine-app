import axiox from "axios";

export const getOptions = () => {
    return axiox.get('http://localhost:9000/getFuelState');
};