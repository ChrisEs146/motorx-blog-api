describe("Hash password", () => {
  it("Throws error if parameters are not provided", async () => {
    const testFunc = async () => await hashPassword(0, "");
    await expect(testFunc).rejects.toThrow();
  });

  it("Hashed password to be defined", async () => {
    const pwd = await hashPassword(10, "testPassword");
    expect(pwd).toBeDefined();
  });
