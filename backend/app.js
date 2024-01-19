import express from "express";
import cors from "cors";
import joyasRoutes from "./Routes/joyasRoutes.js";
import { logger } from "logger-express";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(logger());
app.use("/api", joyasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en el puerto http://localhost:${PORT}`);
});
