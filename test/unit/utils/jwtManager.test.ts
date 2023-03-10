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

  it("Must sign and return a refresh token", () => {
    const claims = { id: "263gdtrXDcbRdutch" };
    const refreshToken = signToken(claims, { isRefresh: true });
    expect(refreshToken).toBeDefined();
  });

  it("Token must be of type string", () => {
    const claims = { id: "263gdtrX" };
    const accessToken = signToken(claims);
    expect(typeof accessToken).toBe("string");
  });

  it("Must return a valid token even if there are extra claims", () => {
    const claims = { id: "263gdtrX", iss: "test.example.com" };
    const accessToken = signToken(claims);
    expect(accessToken).toBeDefined();
  });

  it("Must return a valid token if duration is provided in options", () => {
    const claims = { id: "263gdtrX" };
    const accessToken = signToken(claims, { duration: "1s" });
    expect(accessToken).toBeDefined();
  });
});

describe("Verify and decode token", () => {
  it("Must throw error if token and secret are invalid", async () => {
    const token = "";
    const secret = "";
    const testFunc = async () => await verifyAndDecode(token, secret);
    await expect(testFunc).rejects.toThrow("Must provide a token and a secret");
  });

  it("Must throw error if secret is invalid", async () => {
    const token = signToken({ id: "365tdgry" });
    const secret = "";
    const testFunc = async () => await verifyAndDecode(token, secret);
    await expect(testFunc).rejects.toThrow();
  });

  it("Must throw an error if token is expired", async () => {
    const token = signToken({ id: "36dthrgy" }, { duration: "1s" });
    const testFunc = async () => {
      await setTimeout(2000);
      return await verifyAndDecode(token, processVar.ACCESS_TOKEN_KEY);
    };
    await expect(testFunc).rejects.toThrow();
  });

  it("Must return a defined decoded value", async () => {
    const token = signToken({ id: "isd12746gHy" });
    const decoded = await verifyAndDecode(token, processVar.ACCESS_TOKEN_KEY);
    expect(decoded.id).toBeDefined();
  });

  it("Decoded value must be string", async () => {
    const token = signToken({ id: "isd12746gHy" });
    const decoded = await verifyAndDecode(token, processVar.ACCESS_TOKEN_KEY);
    expect(typeof decoded.id).toBe("string");
  });
