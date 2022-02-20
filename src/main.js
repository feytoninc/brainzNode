import { Router } from "express";

const router = Router();

router.use("/*", (req, res) => {
  return res.json({ message: "Welcome to api" });
});

export default router;
