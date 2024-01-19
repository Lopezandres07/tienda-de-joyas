import express from "express";
import {
  getAllJoyasController,
  getJoyasWithFormat,
  getJoyasWithHateoas,
} from "../Controller/joyasController.js";

const router = express.Router();

router.get("/joyas", getAllJoyasController);
router.get("/joyas_with_format", getJoyasWithFormat);
router.get("/joyas_with_hateoas", getJoyasWithHateoas);

export default router;
