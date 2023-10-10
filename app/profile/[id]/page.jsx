"use client";

// Importing necessary hooks from React and Next.js
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// Importing the Profile component
import Profile from "@components/Profile";

// UserProfile component definition
const UserProfile = ({ params }) => {
  // Using the useSearchParams hook from Next.js to get the search parameters from the URL
  const searchParams = useSearchParams();
  // Getting the 'name' parameter from the URL
  const userName = searchParams.get("name");

  // Initializing userPosts state to an empty array
  const [userPosts, setUserPosts] = useState([]);

  // useEffect hook to fetch user posts when the component mounts or when params.id changes
  useEffect(() => {
    // Defining an async function to fetch posts
    const fetchPosts = async () => {
      // Fetching posts from the API
      const response = await fetch(`/api/users/${params?.id}/posts`);
      // Parsing the response to JSON
      const data = await response.json();

      // Setting the userPosts state to the fetched data
      setUserPosts(data);
    };

    // If params.id is defined, fetch posts
    if (params?.id) fetchPosts();
  }, [params.id]); // Dependency array for useEffect, re-run the effect when params.id changes

  // Rendering the Profile component with the fetched data
  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

// Exporting the UserProfile component as default
export default UserProfile;
