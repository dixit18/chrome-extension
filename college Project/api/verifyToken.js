const jwt = require("jsonwebtoken");

async function verify(req, res, next) {
//   const authHeader = req.headers.token;
//   if (authHeader) {
//     const token = authHeader.split(" ")[1];
// console.log("token",token)
//     jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
//       if (err) res.status(403).json("Token is not valid!");
//       req.user = user;
//       console.log("req user",req.user)
//       next();
//     });
//   } else {
//     return res.status(401).json("You are not authenticated!");
//   }
let token;
if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(
      new Error('You are not logged in! Please log in to get access.', 401)
    );
  }
  console.log(token)
// 2) Verification token
  const decoded = await jwt.verify(token, process.env.SECRET_KEY, async(err, user) => {
    if(err) return next(new Error("Please login again.", 401))
    else {

      // const currentUser = await User.findById(decoded.id);
      // if (!currentUser) {
      //   return next(
      //     new Error(
      //       'The user belonging to this token does no longer exist.',
      //       401
      //     )
      //   );
      // }
       // GRANT ACCESS TO PROTECTED ROUTE
  req.user = user;
  next();
    }
  });

}

module.exports = verify;