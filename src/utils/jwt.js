import { readFileSync } from "node:fs";
import jwt from "jsonwebtoken";
import { generateKey } from "./generateKey.js";

generateKey();

const privateKey = readFileSync("private.key");
const publicKey = readFileSync("public.key");

export const sign = (userId) => {
  const tokenPayload = {
    id: userId,
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour
  };

  return jwt.sign(tokenPayload, privateKey.toString(), { algorithm: "RS256" });
};

export const verify = (token) => {
  const options = {
    algorithms: ["RS256"],
  };

  return jwt.verify(token, publicKey.toString(), options);
};
