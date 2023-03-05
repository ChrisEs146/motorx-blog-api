export const errorMsgs = {
  NotFound: (resource: string): string => `${resource} was not found.`,
  Conflict: (resource: string): string => `${resource} already exists.`,
  BadRequest: (resource: string): string => `${resource} is not valid`,
  NotMatch: "Passwords don't match",
  UserCreationError: "Something went wrong creating the user",
  UserLoggingError: "Something went wrong logging in the user",
  invalidCreds: "Email or password are incorrect",
};

export const successMsgs = {
  AccountOk: "Account created successfully.",
  NameUpdateOk: "Name updated successfully.",
  PassUpdateOk: "Password changed successfully",
  PostOk: "Post created successfully.",
};
