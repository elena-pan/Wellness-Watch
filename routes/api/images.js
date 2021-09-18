const router = require('express').Router();
const passport = require("passport");

// @route GET api/images/test1
// @desc Can be authenticated, decide what to do depending on if is auth
// @access Public

router.get("/test1", (req, res, next) => {
    passport.authenticate('jwt', function(err, user, info) {
        if (err) { return next(err); }
        if (user) {
            const user = { 
                id: user.id, 
                username: user.username 
            };
            res.json(user);
        }
        else {
            res.json("Not authenticated")
        }
    })(req, res, next);
});

// @route GET api/images/test2
// @desc Do not need authentication to access
// @access Public

router.get("/test2",
    async (req, res) => {
        res.json("Hello!");
});

// @route GET api/images/test3
// @desc Authenticated users only
// @access Private

router.get("/test3",
    passport.authenticate("jwt", { session: false }), 
    async (req, res) => {
        const user = { 
            id: user.id, 
            username: user.username 
        };
        res.json(user);
});

module.exports = router;