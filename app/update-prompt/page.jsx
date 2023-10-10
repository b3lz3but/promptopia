"use client";

// Importing necessary hooks and components
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";

// Component for updating a prompt
const UpdatePrompt = () => {
  // Using the useRouter hook to access the router instance
  const router = useRouter();

  // Using the useSearchParams hook to access the query parameters
  const searchParams = useSearchParams();

  // Retrieving the promptId from the query parameters
  const promptId = searchParams.get("id");

  // Setting initial state for the post and the submitting status
  const [post, setPost] = useState({ prompt: "", tag: "" });
  const [submitting, setIsSubmitting] = useState(false);

  // Using the useEffect hook to fetch prompt details when the component mounts or when promptId changes
  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();

      // Updating the post state with the fetched data
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    // If promptId exists, fetch the prompt details
    if (promptId) getPromptDetails();
  }, [promptId]);

  // Function to handle the update of the prompt
  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // If promptId is missing, alert the user
    if (!promptId) return alert("Missing PromptId!");

    try {
      // Sending a PATCH request to update the prompt
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      // If the request is successful, redirect the user to the home page
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Rendering the Form component with the necessary props
  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdatePrompt;