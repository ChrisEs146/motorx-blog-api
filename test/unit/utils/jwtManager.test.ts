import processVar from "../../../src/defaults/defaultVariables.js";
import { signToken, verifyAndDecode } from "../../../src/utils/jwtManager.js";
import { setTimeout } from "timers/promises";

describe("sign token", () => {
  it("Must throw error if claims are invalid", () => {
    const claims = { id: "" };
    const testFunc = () => signToken(claims);
    expect(testFunc).toThrow();
  });
