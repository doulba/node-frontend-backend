const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const auth = require('../middlewares/auth')
 

// user routes
router.get("/api/user", auth, userCtrl.apiGetAllusers);
router.post("/api/user/login", userCtrl.apiCheckuser);
router.post("/api/user/register", userCtrl.apiCreateuser);
//router.get("/api/user/:id", userCtrl.apiGetuserById);
router.put("/api/user/:id", auth, userCtrl.apiUpdateuser);
router.delete("/api/user/:id", auth, userCtrl.apiDeleteuser);
router.post('api/user/token', userCtrl.refreshToken)


module.exports = router;
