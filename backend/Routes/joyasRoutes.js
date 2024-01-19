import express from "express";
import { getAllJoyasController } from "../Controller/joyasController.js";

const router = express.Router();

router.get("/joyas", getAllJoyasController);

export default router;
