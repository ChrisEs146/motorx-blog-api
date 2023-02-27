import bcrypt from "bcrypt";

/**
 *
 * @param rounds Number of rounds
 * @param password Password
 * @returns Hashed password
 */
export async function hashPassword(rounds: number, password: string): Promise<string> {
  if (!rounds || !password) {
    throw new Error("Must provide number of rounds and password");
  }
  const salt = await bcrypt.genSalt(rounds);
  const finalPassword = await bcrypt.hash(password, salt);
  return finalPassword;
}

export async function comparePassword(normalPwd: string, hashedPwd: string): Promise<boolean> {
  if (!normalPwd || !hashedPwd) {
    throw new Error("Must provide normal password and hashed password");
  }
  return await bcrypt.compare(normalPwd, hashedPwd);
}
