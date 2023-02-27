/**
 * Base User interface
 */
export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date | null;
  img: string;
  recoveryToken: string | null;
}

/**
 * Created user type
 */
export type CreatedUser = Omit<IUser, "img" | "recoveryToken">;

/**
 * Logged in user type
 */
export type LoggedInUser = Pick<IUser, "id" | "firstName" | "lastName">;
