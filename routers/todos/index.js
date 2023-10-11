const Controller = require("../../controllers/controller");
const router = require("express").Router();

router.post("", Controller.add);
router.get("", Controller.getdata);
router.get("/:id", Controller.getdatabyid);
router.put("/:id", Controller.edit);
router.patch("/:id", Controller.editdata);
router.delete("/:id", Controller.delete);

module.exports = router;
