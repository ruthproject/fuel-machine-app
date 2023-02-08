var express = require("express");
var router = express.Router();

const fuel = {
	state: 100
};

router.get("/",function(req,res,next){
    res.json(fuel);
});

module.exports=router;