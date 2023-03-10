import processVar from "../../../src/defaults/defaultVariables.js";
import { signToken, verifyAndDecode } from "../../../src/utils/jwtManager.js";
import { setTimeout } from "timers/promises";

describe("sign token", () => {
  it("Must throw error if claims are invalid", () => {
    const claims = { id: "" };
    const testFunc = () => signToken(claims);
    expect(testFunc).toThrow();
  });

  it("Must sign and return an access token", () => {
    const claims = { id: "263gdtrX" };
    const accessToken = signToken(claims);
    expect(accessToken).toBeDefined();
  });
