import mongoose, { Schema } from "mongoose";

const PromptSchema = new Schema({
 creator: {
   type: Schema.Types.ObjectId,
   ref: "User",
 },
 prompt: {
   type: String,
   required: true,
   message: "Prompt is required",
 },
 tag: {
   type: String,
   required: true,
   message: "Tag is required",
 },
});
    
export default mongoose.models.Prompt || mongoose.model("Prompt", PromptSchema);
