import Feed from "@components/Feed";

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text orange_gradient text-center">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="blue_gradient text-center">AI-Powered Prompts</span>
            </h1>
            <p className="desc text-center">Promptopia is a sophisticated, open-source AI tool, ingeniously designed for the contemporary world. It empowers users to discover, curate, and share inventive prompts, fostering a vibrant crossroads of creativity and technology.</p>
   
            <Feed />
       </section>
    );
};

export default Home;

