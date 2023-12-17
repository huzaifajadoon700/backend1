// signinController.js
import { signupmodel } from "../models/signup.js";

export const addsign = (req, res) => {
  // console.log(req.body);
  const mdl1 = new signupmodel({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phonenumber,
    password: req.body.password,
    
  });
  console.log(mdl1);
  mdl1.save();
};
