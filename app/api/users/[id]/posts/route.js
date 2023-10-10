// Import the Prompt model from the models directory
import Prompt from "@models/prompt";

// Import the connectToDB utility function from the utils directory
import { connectToDB } from "@utils/database";

// Define an asynchronous GET function to handle GET requests
export const GET = async (request, { params }) => {
    try {
        // Connect to the database
        await connectToDB()

        // Find all prompts in the database where the creator matches the id provided in the request parameters
        // The populate method is used to replace the stored creator id with the full creator document
        const prompts = await Prompt.find({ creator: params.id }).populate("creator")

        // Return the found prompts as a JSON string with a status of 200
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        // If there's an error, return a failure message with a status of 500
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 