import type { Config } from "drizzle-kit";

const config: Config = {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: { url: "file:./db.sqlite" },
  // driver is omitted
};

export default config;