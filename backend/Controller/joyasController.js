import { getAllJoyas, getAllJoyasWithFormat } from "../Models/joyasModels.js";

const getAllJoyasController = async (req, res) => {
  try {
    const joyas = await getAllJoyas();
    res.status(200).json(joyas);
  } catch (error) {
    console.error("Error en el controlador", error);
    res.status(500).send("Error interno del servidor");
  }
};

const getJoyasWithFormat = async (req, res) => {
  try {
    const { order_by, limit, page } = req.query;
    const allJoyas = await getAllJoyasWithFormat(order_by, limit, page);
    res.status(200).json(allJoyas);
  } catch (error) {
    res.status(500).send("Error interno del servidor");
  }
};

export { getAllJoyasController, getJoyasWithFormat };
