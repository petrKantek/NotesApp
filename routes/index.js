import { Router } from "express";
import { getNotes } from "../controllers/note";

const router = Router();

router.get("/api/notes", getNotes);

// router.post("/api/add-note", noteController.addNote);

// router.delete("/api/delete-note/:id", noteController.deleteNote);

export default router;
