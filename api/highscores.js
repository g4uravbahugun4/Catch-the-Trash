const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");
const authMiddleware = require("../middleware/authMiddleware");



router.get("/", authMiddleware, async (req, res) => {
   
   
    try {
      const users = await UserModel.find().sort({ point: -1 }).limit(10);
     
      if (!users) {
       
        return res.status(404).send("User not found");
      }
  
      return res.status(200).json({ users });
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });


  router.post("/", authMiddleware, async (req, res) => {
   
    const { userId } = req;
    const scores = req.body
   
    try {
 
      let user;
      user = await UserModel.findById( userId);
  
          
      if(user.point<scores.score){
     
        user.point=scores.score
      }
      user.save();
  
    
  
     
    
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });

module.exports = router;
