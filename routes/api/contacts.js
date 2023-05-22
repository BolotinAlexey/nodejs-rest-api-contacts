const express = require("express");
const router = express.Router();

const api = require("../../models/contacts");

router.get("/", async (req, res, next) => {
  const data = await api.listContacts();
  res.json(data);
});

router.get("/:contactId", async (req, res, next) => {
  const obj = await api.getContactById();
  res.json(obj);
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
