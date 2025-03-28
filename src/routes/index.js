import express from "express";

// import the v1 routes
import v1Routes from "./v1/index.js";
// import the v2 routes
import v2Routes from "./v2/index.js";

const router = express.Router();

router.use("/v1", v1Routes);

router.use("/v2", v2Routes);

export default router;
