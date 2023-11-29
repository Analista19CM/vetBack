import { getConnection } from "../database/connection.js";

export class CostumerModel {
  static async getAll() {
    const pool = await getConnection();
    const result = pool.request().query("SELECT * FROM permiso.CatModulos").then(res => res.recordset);
    console.log(result);
    return result
  }
}
