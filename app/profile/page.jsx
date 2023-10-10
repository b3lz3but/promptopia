"use client";
// Importing the useSession hook from NextAuth
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

// Component for viewing a user's profile
const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);

  // useEffect hook to fetch user posts when the component mounts or when session.user.id changes
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      // Setting the userPosts state to the fetched data
      setMyPosts(data);
    };
    // If session.user.id exists, fetch the user's posts
    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  // Rendering the Profile component with the fetched data
  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  // Function to handle the delete of a post
  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );
      // If the user confirms, delete the post
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });
        // Filter out the deleted post from the list
        const filteredPosts = myPosts.filter((item) => item._id !== post._id);
        // Update the state with the filtered list
        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Rendering the Profile component with the fetched data
  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
