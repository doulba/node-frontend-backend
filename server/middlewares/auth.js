const jwt = require('jsonwebtoken');
const config = require('../config.json')
 
module.exports = (req, res, next) => {
    console.log(req.headers)
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, config.secret);
       const fullname = decodedToken.fullname;
       req.auth = {
        fullname: fullname
       };
	next();
   } catch(error) {
       res.status(401).json({ error: "vous n'etes pas autorisé" });
   }
};