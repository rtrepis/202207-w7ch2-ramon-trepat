/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "!src/index.tsx",
    "!src/reportWebVitals.ts",
    "!src/react-app-env.d.ts",
    "!src/index.ts",
    "!src/loadApp.ts",
    "!src/loadEnvironment.ts",
    "!src/database/connectDB.ts",
    "!src/server/startServer.ts",
  ],
};
