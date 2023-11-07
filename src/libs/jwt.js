import { KEY } from "../config.js";
import jwt from "jsonwebtoken";

// this function created  a token
export function createAccesToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, KEY, { expiresIn: "1d" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
}
