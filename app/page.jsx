// Import the Feed component from the components directory
import Feed from "@components/Feed";

// Define the Home component
const Home = () => (
  // Create a section with full width, centered content, and a column layout
  <section className='w-full flex-center flex-col'>
    <h1 className='orange_gradient head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='blue_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
    Promptopia is a sophisticated, open-source AI tool, ingeniously designed for the contemporary world. It empowers users to discover, curate, and share inventive prompts, fostering a vibrant crossroads of creativity and technology.
    </p>

    <Feed />
  </section>
);

// Export the Home component as the default export
export default Home;