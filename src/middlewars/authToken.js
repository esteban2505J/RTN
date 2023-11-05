import jwt from "jsonwebtoken";
import { KEY } from "../config.js";

export const authToken = (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);
  if (!token)
    return res.status(401).json({ message: "no token, authorization denied" });

  jwt.verify(token, KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "invalidate token" });

    req.user = user;
    next();
  });
};
