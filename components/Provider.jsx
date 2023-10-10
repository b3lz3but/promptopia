// Compare this snippet from app/page.jsx:                                                                                                                          
"use client"

// Importing the useSession hook from NextAuth
import { SessionProvider } from "next-auth/react"

// Importing the Session object
const Provider = ({ children, session}) => (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
)

export default Provider;
