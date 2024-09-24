import userModel from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Token = (id) => {
  return jwt.sign({ id }, process.env.TOKEN);
}
// register user
const userRegister = async (req, res) => {
  
  const { username, email, password } = req.body;
  try {
    const email_check =await  userModel.findOne({ email });

    if (email_check) {
      return res.json({ status: "false", message: "Email is Already Existed" });

    }

    if (!validator.isEmail(email)) {
      return res.json({ status: "false", message: "Email id is not valid" });
    }

    if (password.length < 8) {
      return res.json({ status: "false", message: "password length should be greater than 8" });
    }
    //creating the salt using bcrypt.
    const salt = await bcrypt.genSalt(10);
    
    //creating the hashed password using the salt
    const hashed_password = await bcrypt.hash(password, salt);
    

    //creating the new user in the databasee
    const user = new userModel({
      username: username,
      email: email,
      password: hashed_password,
    });


    const user_token = await user.save();


    const token = Token(user_token._id);
    console.log("This is the token", token);

    res.json({ status: "true", token });

  }
  catch (error)
  {
    console.log("error occurend while creating the user");
    return res.json({status:"false",message:"error occurend while creating the user"})
  }
}



// login user.
const userLogin = async(req,res) => {
  const { email, password } = req.body;

  
  console.log("inside the user login", email);


  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ status: "false", message: "invalid credentials" });
    }

    const password_check = await bcrypt.compare(password, user.password);
    if (!password_check)
    {
      return res.json({ status: "false", message: "invalid password" });  
    }

    const token = Token(user._id);
    
    res.json({ status: "true", token });

  }
  catch (error)
  {
    console.log("error occured while authenticating the user",error);
    res.json({ status: "false", message:"error occured while authenticating the user"})
  }


}

export {
  userRegister,
  userLogin,
}