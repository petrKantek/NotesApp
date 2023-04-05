const CustomError = require("../models/CustomError");
const db = require("../database/dbConfig");

exports.getNotes = async (req, res, next) => {
  try {
    const notes = await db.any('select * from main.notes');
    res.status(200).json({ notes });
  } catch (error) {
    next(new CustomError(error.message, 500));
  }
}

// export async function addNote(req, res, next) {
//   try {
//     const body = req.body;
//     const note = new Note({
//       name: body.name,
//       description: body.description,
//       status: body.status,
//     });
//     const newNote = await note.save();
//     const allNotes = await find();
//     res
//       .status(201)
//       .json({ message: "Note added", note: newNote, notes: allNotes });
//   } catch (error) {
//     next(new CustomError(error.message, 500));
//   }
// }

// export async function deleteNote(req, res, next) {
//   try {
//     const deletedNote = await findByIdAndRemove(req.params.id);
//     if (deletedNote == null) {
//       return res.status(404).json({
//         message: "Note not found",
//       });
//     }
//     const allNotes = await find();
//     res.status(200).json({
//       message: "Note deleted",
//       note: deletedNote,
//       notes: allNotes,
//     });
//   } catch (error) {
//     next(new CustomError(error.message, 500));
//   }
// }
