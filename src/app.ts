import express from "express";
import { healthRoutes } from "./routes/health.routes";

const app = express();

app.use(express.json());

// Routes
app.use(healthRoutes);

export { app };
