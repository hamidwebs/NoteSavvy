import mongoose, { Schema } from "mongoose";

const NoteSchema = new Schema(
    {
        title: String,
        description: String,
        tag: String
    },
    {
        timestamps: true
    }
)
const Note = mongoose.models.Notes || mongoose.model('Notes', NoteSchema);
export default Note;