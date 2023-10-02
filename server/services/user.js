const user = require("../models/user");
const bcrypt = require("bcrypt"); 
const jwt = require('jsonwebtoken');

module.exports = class userService{
    static async getAllusers(){
        try {
            const allusers = await user.find();
            return allusers;
        } catch (error) {
            console.log(`Could not fetch users ${error}`)
        }
    } 

    static async createuser(data){
        try {
            const salt = await bcrypt.genSalt(10);
            let hashpassword = await bcrypt.hash(data.password, salt) ;
            const newuser = {
                fullname: data.fullname,  
                email: data.email,
                password: hashpassword
            }
           const response = await new user(newuser).save();
           return response;
        } catch (error) {
            console.log(error);
        } 
    }

    static async userlogin(data){
        try {  
            const checkuser =  await user.find({email: data.email});
            return checkuser;
        } catch (error) {
            console.log(`user not found. ${error}`)
        }
    }

    static async getuserbyId(userId){
        try {
            const singleuserResponse =  await user.findById({_id: userId});
            return singleuserResponse;
        } catch (error) {
            console.log(`user not found. ${error}`)
        }
    }

    static async updateuser(userId,fullname, email, password){
            try {
                const updateResponse =  await user.findByIdAndUpdate({_id: userId},
                    {fullname, email, password});
                    return updateResponse;
            } catch (error) {
                console.log(`Could not update user ${error}` );

        }
    }

    static async deleteuser(userId){
        try {
            const deletedResponse = await user.findByIdAndDelete(userId);
            return deletedResponse;
        } catch (error) {
            console.log(`Could  ot delete user ${error}`);
        }

    }
    // Generate JWT
    static async generateToken(id){
        return jwt.sign({ id }, process.env.SECRET, {
          expiresIn: '10d',
        })
      }
    
}