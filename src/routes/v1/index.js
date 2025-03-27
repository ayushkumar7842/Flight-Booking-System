import express from "express";
import { controller } from "../../controllers/index.js";

const router = express.Router();

const { InfoController } = controller;

router.get("/info", InfoController);

export default router;
