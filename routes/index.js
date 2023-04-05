const express = require("express");
const noteController = require("../controllers/note");

const router = express.Router();

router.get("/api/notes", noteController.getNotes);

module.exports = router;
