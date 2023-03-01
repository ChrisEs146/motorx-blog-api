import { JestConfigWithTsJest } from "ts-jest";
const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  resolver: "ts-jest-resolver",
  extensionsToTreatAsEsm: [".ts"],
  moduleFileExtensions: ["ts", "js"],
  moduleDirectories: ["node_modules", "<rootDir>"],
};

export default jestConfig;
