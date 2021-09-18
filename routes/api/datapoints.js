const router = require('express').Router();
const passport = require("passport");
const datapoint = require('../../models/Datapoint');
//const User = require("../../models/User");

router.get("",
    //passport.authenticate("jwt", { session: false }), 
    async (req, res) => {
        const user = { 
            id: "test123", 
            username: user.username 
        };
        console.log("hello");
        result = {
            "timedata": [],
            "actualization": 0,
            "esteeem": 0,
            "belongingness": 0,
            "safety": 0,
            "physiological": 0,

        }
        console.log("here");
        datapoint.find({ userid: req.user.userid},
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
                    result.actualization += element.actualization;
                    result.esteeem += element.esteem;
                    result.belongingness += element.belongingness;
                    result.safety += element.safety;
                    result.physiological += element.physiological;
                });
        });
        console.log("datapoints processed");
        try {
            result.actualization /= result.timedata.length();
            result.esteem /= result.timedata.length();
            result.belongingness /= result.timedata.length();
            result.safety /= result.timedata.length();
            result.physiological /= result.timedata.length();
        } catch (error) {
            result = {
                "timedata": [],
                "actualization": 0,
                "esteeem": 0,
                "belongingness": 0,
                "safety": 0,
                "physiological": 0,
            }
        }
        console.log("done!");
        res.json(result);
/*
        {
            timedata: [
                {
                    userid: 1,
                    date: new Date("2021-09-11"),
                    notes: "kjsdlf;fs;sdfjoisfoijfojifoijf",
                    sleeptime: 12,
                    sleepquality: 5
                },
                {
                    userid: 1,
                    date: new Date("2021-09-12"),
                    notes: "wheeeeeeeeeeeeeeeeeeeeeee eeeee ee e e e e",
                    sleeptime: 9,
                    sleepquality: 4
                },
            ],
            maslows: {
                actualization: 2,
                esteem: 3,
                belongingness: 9,
                safety: 10,
                physiological: 6
            }
        }*/
});

module.exports = router;