import express from "express";
import {
  getAllJoyasController,
  getJoyasWithFormat,
} from "../Controller/joyasController.js";

const router = express.Router();

router.get("/joyas", getAllJoyasController);
router.get("/joyas_with_format", getJoyasWithFormat);

export default router;
