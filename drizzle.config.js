/** @type { import("drizzle-kit").Config } */
export default {
//   schema: "./schema.ts",
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://interview-ER_owner:a0iYWE8gFqIT@ep-spring-king-a1mrvu3i.ap-southeast-1.aws.neon.tech/interview-ER?sslmode=require',
  },
};
