import { Router } from "express";

const router = Router();

router.use("/*", (req, res) => {
  return res.render("index");
});

export { router };
