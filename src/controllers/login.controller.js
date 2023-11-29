import { CostumerModel } from "../models/costumers.models.js";
import bcrypt from "bcrypt";
export const login = async (req, res) => {
  let password = req.body.password;
  let user = req.body.user;
  const hashedPassword = await bcrypt.hash(password, 10,function(err, hash) {
    const compare =  bcrypt.compare(password, hash ,function(err, result) {
        // Store hash in your password DB.
        console.log(result);
    });
});
 
  console.log(hashedPassword);
  try {
  } catch (error) {}
};
export const autorizathion = async (req, res, next) => {
  let token = req.body.password;
  if (token == 123) next();
};
