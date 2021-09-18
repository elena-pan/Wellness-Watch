const router = require('express').Router();
const passport = require("passport");
const Datapoint = require('../../models/zDatapoint');
const datapoint = require('../../models/zDatapoint');
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
                if (counter != 0) {
                    result.actualization /= result.timedata.length();
                    result.esteem /= result.timedata.length();
                    result.belongingness /= result.timedata.length();
                    result.safety /= result.timedata.length();
                    result.physiological /= result.timedata.length();
                }
            })
            .catch(err => console.log(err))
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

router.post("/upload",
    //passport.authenticate("jwt", { session: false }), 
    async (req, res) => {
        const user = { 
            id: 13, 
            username: "test123"
        };
        console.log("hello");
        Datapoint.findOne({ "userid": user.id, "date": req.date}).then(document => {    
            if (document) {
                return res.status(400).json({ error: "Data for this date exists" });
            } else {
                const newData = new Datapoint({
                    userid: 123,
                    date: Date.now(),
                    notes: "hello",
                    sleeptime: 8,
                    sleepquality: 5,
                    actualization: 2,
                    esteem: 3,
                    belongingness: 4,
                    safety: 5,
                    physiological: 6
                });
                newData.save()
                      .then(document => {
                          res.status(200).json({ success: true })
                      })
                      .catch(err => console.log(err)); 
            }
        });
        console.log("success??");
});

module.exports = router;