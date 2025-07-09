import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { User } from "./user.model";




const createUser = async (req: Request, res: Response) => {
  try {

    const { name, email } = req.body;
    const user = await User.create({
      name,
      email
    })
    res.status(httpStatus.CREATED).json({
      message: "User Created Successfully",
      user
    });
    
  } catch (err) {
    console.log(err);
    res.status(httpStatus.BAD_REQUEST).json({
      message: `Someting went wrong!! ${
        err instanceof Error ? err.message : ""
      }`,
    });
    
  }
}


export const UserControllers = {
   createUser
 }