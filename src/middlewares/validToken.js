import { dateExp } from "../utils/dateExp.js";
import { verify } from "../utils/jwt.js";

export const validateToken = async (req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    try {
      const decoded = verify(token);

      const now = Date.now().valueOf() / 1000;
      if (decoded.exp < now) {
        res.status(401).json({ error: "Authentication failed: token expired" });
        return;
      }

      req.user = {
        id: decoded.id,
        exp: dateExp(decoded.exp),
      };

      next();
    } catch (error) {
      res.status(401).json({ error: "Authentication failed: invalid token" });
    }
  } else {
    res
      .status(401)
      .json({ error: "Authentication failed: token cookie missing" });
  }
};
