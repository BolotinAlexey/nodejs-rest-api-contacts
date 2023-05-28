const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers");

router.get("/", ctrl.getContactsCtrl);

router.get("/:contactId", ctrl.getContactCtrl);

router.post("/", ctrl.addContactCtrl);

router.delete("/:contactId", ctrl.removeContactCtrl);

router.put("/:contactId", ctrl.updateContactCtrl);

module.exports = router;
