import express from "express";

const router = express.Router();

router.get("/info", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "this is info 2 route",
  });
});

export default router;
