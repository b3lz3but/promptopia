// Import the NextAuth library
import NextAuth from 'next-auth';

// Import the Google provider from NextAuth
import GoogleProvider from 'next-auth/providers/google';

// Import the User model
import User from '@models/user';

// Import the database connection function
import { connectToDB } from '@utils/database';

// Define the NextAuth handler
const handler = NextAuth({
  // Define the authentication providers
  providers: [
    // Use Google as an authentication provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  // Define the callbacks
  callbacks: {
    // The session callback is called whenever a session is checked
    async session({ session }) {
      // Find the user in the database
      const sessionUser = await User.findOne({ email: session.user.email });

      // Add the user's id from the database to the session object
      session.user.id = sessionUser._id.toString();

      // Return the updated session
      return session;
    },
    // The signIn callback is called whenever a sign in attempt is made
    async signIn({ account, profile, user, credentials }) {
      try {
        // Connect to the database
        await connectToDB();

        // Check if the user already exists in the database
        const userExists = await User.findOne({ email: profile.email });

        // If the user doesn't exist, create a new user in the database
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        // If everything went well, return true to sign the user in
        return true;
      } catch (error) {
        // If there was an error, log it and return false to prevent the sign in
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  }
})

// Export the handler for both GET and POST requests
export { handler as GET, handler as POST }
