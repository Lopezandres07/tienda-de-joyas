import { getAllJoyas } from "../Models/joyasModels.js";

const getAllJoyasController = async (req, res) => {
  try {
    const joyas = await getAllJoyas();
    res.status(200).json(joyas);
  } catch (error) {
    console.error("Error en el controlador", error);
    res.status(500).send("Error interno del servidor");
  }
};

export { getAllJoyasController };
