const express = require("express");
const router = express.Router();
const register_controller = require("../controller/register.controller");

router.get("/test", register_controller.test);

router.post("/create", register_controller.create);
router.get("/all", register_controller.all);

// router.get("/:id", register_controller.details);

// router.delete("/deleteMovie/:id", register_controller.delete);

// router.put("/update/:id", register_controller.update);

module.exports = router;
