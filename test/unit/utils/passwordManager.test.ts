describe("Hash password", () => {
  it("Throws error if parameters are not provided", async () => {
    const testFunc = async () => await hashPassword(0, "");
    await expect(testFunc).rejects.toThrow();
  });

  it("Hashed password to be defined", async () => {
    const pwd = await hashPassword(10, "testPassword");
    expect(pwd).toBeDefined();
  });

  it("Hashed password to be 60 chars long", async () => {
    const pwd = await hashPassword(10, "testPassword");
    expect(pwd.length).toBe(60);
  });

  it("Hashed password to be string", async () => {
    const pwd = await hashPassword(10, "testPassword");
    expect(typeof pwd).toBe("string");
  });
});

describe("Compare password", () => {
  it("Throws error if params are not provided", async () => {
    const testFunc = async () => await comparePassword("", "");
    await expect(testFunc).rejects.toThrow();
  });

  it("Must be defined", async () => {
    const testPwd = await hashPassword(10, "testPassword");
    const result = await comparePassword("testPwd", testPwd);
    expect(result).toBeDefined();
  });

  it("Must be boolean", async () => {
    const testPwd = await hashPassword(10, "testPassword");
    const result = await comparePassword("testPwd", testPwd);
    expect(typeof result).toBe("boolean");
  });

  it("Must be true", async () => {
    const testPwd = await hashPassword(10, "testPassword");
    const result = await comparePassword("testPassword", testPwd);
    expect(result).toBe(true);
  });
