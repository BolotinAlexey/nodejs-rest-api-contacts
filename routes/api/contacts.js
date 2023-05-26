const express = require("express");
const router = express.Router();
const Joi = require("joi");

const api = require("../../models/contacts");
const HttpError = require("../../util");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

router.get("/", async (req, res, next) => {
  try {
    const data = await api.listContacts();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await api.getContactById(contactId);
    if (!result)
      throw new HttpError(404, `Contact with id="${contactId}" don't find`);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) throw new HttpError(400, error.message);
    const result = await api.addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await api.removeContact(contactId);
    if (!result)
      throw new HttpError(404, `Contact with id="${contactId}" don't find`);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) throw new HttpError(400, error.message);
    const { contactId } = req.params;
    const result = await api.updateContact(contactId, req.body);
    if (!result) throw new HttpError(404, "Not found");
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
