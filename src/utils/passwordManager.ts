import bcrypt from "bcrypt";

/**
 * Hashes a given password using the given amount of rounds.
 * @param rounds Number of rounds
 * @param password Password
 * @returns Hashed password
 */
export async function hashPassword(rounds: number, password: string): Promise<string> {
  if (!rounds || !password) {
    throw new Error("Must provide number of rounds and password");
  }
  const salt = await bcrypt.genSalt(rounds);
  return await bcrypt.hash(password, salt);
}

/**
 * Validates if a given password matches the hashed password.
 * @param normalPwd Plain text password
 * @param hashedPwd Hashed password
 * @returns boolean
 */
export async function comparePassword(normalPwd: string, hashedPwd: string): Promise<boolean> {
  if (!normalPwd || !hashedPwd) {
    throw new Error("Must provide normal password and hashed password");
  }
  return await bcrypt.compare(normalPwd, hashedPwd);
}
