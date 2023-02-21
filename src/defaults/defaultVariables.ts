const processVar = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  ACCESS_TOKEN_KEY: process.env.ACCESS_JWT_SECRET,
  ACCESS_TOKEN_EXPIRY: process.env.ACCESS_JWT_EXPIRY,
  REFRESH_TOKEN_KEY: process.env.REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,
};

export default processVar;
