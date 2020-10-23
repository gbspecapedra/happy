import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export const Authentication = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new Error("JWT token is missing!");

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "8c0707b6c1604fb4256cda33b7749b68"
    ) as TokenPayload;

    request.user = { id: sub };

    return next();
  } catch {
    throw new Error("Invalid JWT token");
  }
};
