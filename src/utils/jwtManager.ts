import jwt from "jsonwebtoken";
import processVar from "../defaults/defaultVariables.js";
import { IClaims, TokenOptions } from "./jwtManager.types.js";

/**
 * Creates a new access token.
 *
 * In order to create a refresh token, the
 * **isRefresh** flag needs to be set to **true** in options.
 * A **duration** can also be set in options. To set an explicit duration
 * one could use a number or a string time-span("1s", "1h").
 * In case duration isn't provided, it defaults to 15m(15 minutes).
 * @param claims Object with an ID
 * @param options Object with isRefresh and duration props[OPTIONAL].
 * @returns Access | Refresh token
 */
export function signToken(claims: IClaims, options?: TokenOptions): string {
  if (!claims || claims.id.length === 0) {
    throw new Error("Id property in claims cannot be undefined");
  }

  if (!options?.isRefresh) {
    return jwt.sign({ ...claims }, Buffer.from(processVar.ACCESS_TOKEN_KEY, "base64"), {
      algorithm: "HS512",
      expiresIn: options?.duration ?? processVar.ACCESS_TOKEN_EXPIRY,
    });
  }

  return jwt.sign({ ...claims }, Buffer.from(processVar.REFRESH_TOKEN_KEY, "base64"), {
    algorithm: "HS512",
    expiresIn: options?.duration ?? processVar.REFRESH_TOKEN_EXPIRY,
  });
}
