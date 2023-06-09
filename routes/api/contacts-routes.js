const express = require("express");
const contactsRouter = express.Router();
const ctrl = require("../../controllers/contacts");
const { isValidId, authenticate } = require("../../middlewares");

contactsRouter.get("/", authenticate, ctrl.getContactsCtrl);

contactsRouter.get("/:contactId", authenticate, isValidId, ctrl.getContactCtrl);

contactsRouter.post("/", authenticate, ctrl.addContactCtrl);

contactsRouter.delete(
  "/:contactId",
  authenticate,
  isValidId,
  ctrl.removeContactCtrl
);

contactsRouter.put(
  "/:contactId",
  authenticate,
  isValidId,
  ctrl.updateContactCtrl
);

contactsRouter.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  ctrl.updateStatusContactCtrl
);

module.exports = contactsRouter;
