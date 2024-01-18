import pool from "../dataBase/joyasDB.js";

const getAllJoyas = async () => {
  try {
    const result = await pool.query("SELECT * FROM inventario");
    return result.rows;
  } catch (error) {
    console.error("Error en la consulta", error);
    throw error;
  }
};

export { getAllJoyas };
