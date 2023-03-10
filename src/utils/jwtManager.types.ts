import { JwtPayload } from "jsonwebtoken";

export interface IClaims extends JwtPayload {
  id: string;
}

export type TokenOptions = {
  isRefresh?: boolean;
  duration?: string | number;
};
