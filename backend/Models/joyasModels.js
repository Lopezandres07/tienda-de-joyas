import format from "pg-format";
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

const getAllJoyasWithFormat = async (
  order_by = "stock_ASC",
  limits = 0,
  page = 0
) => {
  const [attribute, direction] = order_by.split("_");
  const offset = page * limits;
  const allJoyas = format(
    "SELECT * FROM inventario ORDER BY %s %s OFFSET %s",
    attribute,
    direction,
    limits,
    offset
  );
  const response = await pool.query(allJoyas);
  return response.rows;
};

export { getAllJoyas, getAllJoyasWithFormat };
