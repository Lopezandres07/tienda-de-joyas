import {
  getAllJoyas,
  getAllJoyasHateoas,
  getAllJoyasWithFormat,
} from "../Models/joyasModels.js";
import HATEOAS from "../helpers/hateoas.js";

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
    res.status(200).json({ joyas: allJoyas });
  } catch (error) {
    res.status(500).send("Error interno del servidor");
  }
};

const getJoyasWithHateoas = async (req, res) => {
  try {
    const allJoyas = await getAllJoyasHateoas();
    const allJoyasWithHateoas = await HATEOAS("joyas", allJoyas);
    res.status(200).json(allJoyasWithHateoas);
  } catch (error) {
    res.status(500).send("Error interno del servidor");
  }
};

export { getAllJoyasController, getJoyasWithFormat, getJoyasWithHateoas };
