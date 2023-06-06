const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers");
const { isValidId } = require("../../middlewares");

router.get("/", ctrl.getContactsCtrl);

router.get("/:contactId", isValidId, ctrl.getContactCtrl);

router.post("/", ctrl.addContactCtrl);

router.delete("/:contactId", isValidId, ctrl.removeContactCtrl);

router.put("/:contactId", isValidId, ctrl.updateContactCtrl);

router.patch("/:contactId/favorite", isValidId, ctrl.updateStatusContactCtrl);

module.exports = router;
