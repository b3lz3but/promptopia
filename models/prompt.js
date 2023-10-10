import mongoose, { Schema, model, models } from "mongoose";
// Importing the User model
const PromptSchema  =  new Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required'],
    }
});

// Exporting the Prompt model
const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;