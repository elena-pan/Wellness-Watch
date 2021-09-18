const router = require('express').Router();
const passport = require("passport");
const datapoint = require('../../models/Datapoint');
//const User = require("../../models/User");

router.get("",
    //passport.authenticate("jwt", { session: false }), 
    async (req, res) => {
        const user = { 
            username: user.username 
        };
        result = {
            "timedata": [],
            "maslows": {
                "actualization": 0,
                "esteeem": 0,
                "belongingness": 0,
                "safety": 0,
                "physiological": 0,
            }

        }
        datapoint.find({ username: req.user.username},
            function (err, docs) {
                console.log("gathered datapoints; processing")
                counter = 0
                docs.array.forEach(element => {
                    datedata = {
                        "date": element.date,
                        "notes": element.notes,
                        "sleeptime": element.sleeptime,
                        "sleepquality": element.sleepquality
                    }
                    result.timedata.push(datedata);
                    result.maslows.actualization += element.actualization;
                    result.maslows.esteeem += element.esteem;
                    result.maslows.belongingness += element.belongingness;
                    result.maslows.safety += element.safety;
                    result.maslows.physiological += element.physiological;
                });
        });
        console.log("datapoints processed");
        try {
            result.maslows.actualization /= result.timedata.length();
            result.maslows.esteem /= result.timedata.length();
            result.maslows.belongingness /= result.timedata.length();
            result.maslows.safety /= result.timedata.length();
            result.maslows.physiological /= result.timedata.length();
        } catch (error) {
            result = {
                "timedata": [],
                "maslows": {
                    "actualization": 0,
                    "esteeem": 0,
                    "belongingness": 0,
                    "safety": 0,
                    "physiological": 0
                }
            }
        }
        console.log("done!");
        res.json(result);
});

module.exports = router;