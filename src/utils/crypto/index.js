import { randomUUID } from "node:crypto";
import { genKeyPairHex, sharedKey } from "./KeyPair.js";
import { encrypt, decrypt } from "./enc_dec.js";
import { generateKeyPEMFile } from "./generateKeyPEMFile.js";

const generateUUID = () => randomUUID();

export {
  generateKeyPEMFile,
  generateUUID,
  genKeyPairHex,
  sharedKey,
  encrypt,
  decrypt,
};

export default {
  generateKeyPEMFile,
  generateUUID,
  genKeyPairHex,
  sharedKey,
  encrypt,
  decrypt,
};
