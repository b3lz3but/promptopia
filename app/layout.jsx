// Importing the global styles for the application
import "@styles/globals.css";

// Importing the getSession function from next-auth/react for session handling
import { getSession } from 'next-auth/react';

// Importing the Nav component which likely represents the navigation bar of the application
import Nav from '@components/Nav';

// Importing the Provider component which likely wraps the application with a context provider
import Provider from '@components/Provider';

// Metadata for the application, including the title and description
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

// The RootLayout component wraps around the entire application and sets up the basic HTML structure
// It also includes the Provider, Nav, and a main section for the children components
const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
        <Provider>
        <div className='main'>
          <div className='gradient'/>
        </div>

        <main className='app'>
          <Nav/>
          {children} {/* This is where the child components will be rendered */}
        </main>
        </Provider>
    </body>
  </html>
);

// Exporting the RootLayout component as the default export
export default RootLayout;