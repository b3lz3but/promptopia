// Importing the Prompt model and the database connection utility
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

// GET handler to fetch a specific prompt by its ID
export const GET = async (request, { params }) => {
    try {
        // Connect to the database
        await connectToDB()

        // Find the prompt by ID and populate the creator field
        const prompt = await Prompt.findById(params.id).populate("creator")
        // If the prompt is not found, return a 404 response
        if (!prompt) return new Response("Prompt Not Found", { status: 404 });

        // If the prompt is found, return it with a 200 status
        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (error) {
        // If there's an error, return a 500 response
        return new Response("Internal Server Error", { status: 500 });
    }
}

// PATCH handler to update a specific prompt by its ID
export const PATCH = async (request, { params }) => {
    // Destructure the prompt and tag from the request body
    const { prompt, tag } = await request.json();

    try {
        // Connect to the database
        await connectToDB();

        // Find the existing prompt by ID
        const existingPrompt = await Prompt.findById(params.id);

        // If the prompt is not found, return a 404 response
        if (!existingPrompt) {
            return new Response("Prompt not found", { status: 404 });
        }

        // Update the prompt and tag fields of the existing prompt
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        // Save the updated prompt
        await existingPrompt.save();

        // Return a success response
        return new Response("Successfully updated the Prompts", { status: 200 });
    } catch (error) {
        // If there's an error, return a 500 response
        return new Response("Error Updating Prompt", { status: 500 });
    }
};

// DELETE handler to remove a specific prompt by its ID
export const DELETE = async (request, { params }) => {
    try {
        // Connect to the database
        await connectToDB();

        // Find the prompt by ID and remove it
        await Prompt.findByIdAndRemove(params.id);

        // Return a success response
        return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        // If there's an error, return a 500 response
        return new Response("Error deleting prompt", { status: 500 });
    }
};