const express = require("express");
const router = express.Router();
const emp_controller = require("../controller/emp.controller");

router.get("/test", emp_controller.test);

router.post("/create", emp_controller.create);
router.get("/all", emp_controller.all);

router.get("/:id", emp_controller.details);

router.delete("/deleteEmp/:id", emp_controller.delete);

router.put("/update/:id", emp_controller.update);

module.exports = router;
