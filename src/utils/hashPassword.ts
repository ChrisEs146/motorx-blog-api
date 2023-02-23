import bcrypt from "bcrypt";

/**
 *
 * @param rounds Number of rounds
 * @param password Password
 * @returns Hashed password
 */
export function hashedPassword(rounds: number, password: string): string {
  if (!rounds || !password) {
    throw new Error("Must provide number of rounds and password");
  }
  const salt = bcrypt.genSaltSync(rounds);
  const finalPassword = bcrypt.hashSync(password, salt);
  return finalPassword;
}
