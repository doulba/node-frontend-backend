const userService = require("../services/user");
const AppError = require("../helpers/appError");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
module.exports = class user {
  static async apiGetAllusers(req, res, next) {
    try {
      const users = await userService.getAllusers(); 
      if (!users) {
        res.status(404).json("There are no user found yet!");
      }
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiGetuserById(req, res, next) { 
    try {
      let id = req.params.id || {};
      const user = await userService.getuserbyId(id);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiCheckuser(req, res, next) { 
    try { 
      // let email = req.body.email || {};
      // let password = req.body.password || {};
      const user = await userService.userlogin(req.body);
      const validPassword = await bcrypt.compare(req.body.password, user[0].password);
      if (validPassword) {
        res.status(200).json(
    user[0],
        //  token: await userService.generateToken(user[0]._id),
        );
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
      //  res.json();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiCreateuser(req, res, next) {
    try {
      console.log(req.body);
      if (!req.body) return next(new AppError("No form data found", 404));
      const createduser =  await userService.createuser(req.body);
      res.json({
        user: createduser,
        token: await userService.generateToken(createduser._id)
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiUpdateuser(req, res, next) {
    try {
     

      const updateduser = await userService.updateuser(req.params.id,req.body.fullname,req.body.email,req.body.password);

      if (updateduser.modifiedCount === 0) {
        throw new Error("Unable to update user, error occord");
      }

      res.json(updateduser);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiDeleteuser(req, res, next) {
    try {
      const userId = req.params.id;
      const deleteResponse = await userService.deleteuser(userId);
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
 
};

