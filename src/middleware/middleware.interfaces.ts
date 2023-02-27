/**
 * Custom error interface
 */
export interface ICustomError extends Error {
  statusCode?: number;
  message: string;
  error: string | null;
}
