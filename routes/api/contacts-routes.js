const express = require("express");
const contactsRouter = express.Router();
const ctrl = require("../../controllers/contacts");
const { isValidId } = require("../../middlewares");

contactsRouter.get("/", ctrl.getContactsCtrl);

contactsRouter.get("/:contactId", isValidId, ctrl.getContactCtrl);

contactsRouter.post("/", ctrl.addContactCtrl);

contactsRouter.delete("/:contactId", isValidId, ctrl.removeContactCtrl);

contactsRouter.put("/:contactId", isValidId, ctrl.updateContactCtrl);

contactsRouter.patch(
  "/:contactId/favorite",
  isValidId,
  ctrl.updateStatusContactCtrl
);

module.exports = contactsRouter;
