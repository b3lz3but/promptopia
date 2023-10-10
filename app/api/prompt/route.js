// Import the Prompt model from the models directory
import Prompt from "@models/prompt";

// Import the connectToDB utility function from the utils directory
import { connectToDB } from "@utils/database";

// Define an asynchronous GET function to handle GET requests
export const GET = async (request) => {
    try {
        // Connect to the database
        await connectToDB()

        // Find all documents in the Prompt collection and populate the 'creator' field
        // The populate method is used to automatically replace the specified path in the document, 
        // as designated in the schema, with document(s) from other collection(s)
        const prompts = await Prompt.find({}).populate('creator')

        // Return a new Response object with the stringified prompts and a 200 status code
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        // If there's an error, return a new Response object with an error message and a 500 status code
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
};