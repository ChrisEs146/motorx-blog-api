/**
 * Custom error interface
 */
export interface CustomError extends Error {
  statusCode?: number;
  status?: number;
  message: string;
  error: string | null;
}
