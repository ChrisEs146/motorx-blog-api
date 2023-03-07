describe("Hash password", () => {
  it("Throws error if parameters are not provided", async () => {
    const testFunc = async () => await hashPassword(0, "");
    await expect(testFunc).rejects.toThrow();
  });
