const { User } = require("../models/user");

let auth = (req, res, next) => {
  let token = req.cookies.auth;

  // if Token Exists
  if (token) {
    User.findByToken(token, function(err, user) {
      if (err) {
        return res.json({
          isAuth: false,
          message: "invalid Token"
        });
      }
      if (!user)
        return res.json({
          isAuth: false,
          message: ""
        });
      req.token = token;
      req.user = user;
      next();
    });
  } else {
    return res.json({
      isAuth: false,
      message: ""
    });
  }
};

module.exports = { auth };
