import sql from "mssql";

const dbSettings = {
  port: 9001,
  user: "sa",
  password: process.env.PASSWORD,
  server: process.env.SERVER,
  database: process.env.DB,
  driver: "sqlsrv",
  options: {
    trustServerCertificate: true,
    rejectUnauthorized: true,
  },
};
export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.log(error);
  }
}

