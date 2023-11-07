// model user db

import User from "../models/UserModel.js";

// library to encrypt
import bcrypt from "bcryptjs";

// middlewar wst
import { createAccesToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { KEY } from "../config.js";

/*function for te procces of register*/
export const register = async (req, res) => {
  let { email, password, roll } = req.body;

  // return password encrypt
  const passwordHash = await bcrypt.hash(password, 10);

  try {
    const userFound = await User.findOne({ email });

    if (userFound) return res.status(400).json(["The email already exist."]);

    // create a new user
    const newUser = new User({
      email,
      password: passwordHash,
      roll,
    });

    // saved the user create
    const userSaved = await newUser.save();

    // creating a json web token
    const token = await createAccesToken({ id: userSaved._id });
    // response with cookie created
    res.cookie("token", token);
    console.log(token);
    res.json({
      id: userSaved._id,
      roll: userSaved.roll,
      email: userSaved.email,
      createAt: userSaved.createdAt,
      updateAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**function for the login procces */
export const login = async (req, res) => {
  let { email, password } = req.body;

  try {
    // found user
    const userFound = await User.findOne({ email });

    if (!userFound) return res.status(400).json({ message: "User no found" });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Inconrrect password" });

    // creating a json web token
    const token = await createAccesToken({ id: userFound._id });

    // response with cookie created
    res.cookie("token", token);

    res.json({
      id: userFound._id,
      roll: userFound.roll,
      email: userFound.email,
      createAt: userFound.createdAt,
      updateAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* function for the  logout procces */
export const logOut = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200);
};

/* function for the process of obtaining the user's profile*/
export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound) return res.status(400).json({ message: "user not found" });

  return res.json({
    id: userFound.id,
    email: userFound.email,
    createAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  // console.log("está llegando a verify token");

  // console.log(token);

  if (!token)
    return res
      .status(401)
      .json({ message: "Unauthorized" }, console.log("no hay token"));

  jwt.verify(token, KEY, async (err, user) => {
    if (err)
      return (
        res.status(401).json({ message: "Unauthorized" }),
        console.log("no es un token válido")
      );
    // ;
    // console.log(user);
    const userFound = await User.findById(user.id);
    if (!userFound)
      return (
        res.status(401).json({ message: "Unauthorized" }),
        console.log("no encuentra al usuario")
      );
    // console.log("no encuentra al usuario");

    return res.json({
      id: userFound._id,
      roll: userFound.roll,
      email: userFound.email,
    });
  });
};
