import { readFileSync } from "node:fs";
import jwt from "jsonwebtoken";
import { generateKey } from "./generateKey.js";
import { hoursToMilliseconds } from "./hoursToMilliseconds.js";
import config from "../config.js";

generateKey();
// Math.floor(Date.now() / 1000) + 60 * 60
const privateKey = readFileSync("private.key");
const publicKey = readFileSync("public.key");

export const sign = (userId) => {
  const tokenPayload = {
    id: userId,
    exp: hoursToMilliseconds(config.app.tokenExpiresIn), // 1 hour
  };

  return jwt.sign(tokenPayload, privateKey.toString(), { algorithm: "RS256" });
};

export const verify = (token) => {
  const options = {
    algorithms: ["RS256"],
  };

  return jwt.verify(token, publicKey.toString(), options);
};
