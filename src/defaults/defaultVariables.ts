const processVar = {
  PORT: Number(process.env.PORT),
  NODE_ENV: String(process.env.NODE_ENV),
  ACCESS_TOKEN_KEY: String(process.env.ACCESS_JWT_SECRET),
  ACCESS_TOKEN_EXPIRY: String(process.env.ACCESS_JWT_EXPIRY),
  REFRESH_TOKEN_KEY: String(process.env.REFRESH_TOKEN_SECRET),
  REFRESH_TOKEN_EXPIRY: String(process.env.REFRESH_TOKEN_EXPIRY),
};

export default processVar;
