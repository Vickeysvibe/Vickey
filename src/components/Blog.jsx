import React, { useEffect, useState } from "react";
import "../css/blog.css"; // Assuming stylesheet exists
import { Link } from "react-router-dom";
import blogData from "../assets/blogDatabase";
import { useLocation } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const Blog = () => {
  const { width } = useWindowDimensions();
  const { pathname } = useLocation();

  // Extract blog post slug (assuming the third segment after "/")
  const slug = pathname.split("/")[2] || "";

  // State to store the matching blog post data or null
  const [post, setPost] = useState(null);

  // Loading state for fetching data (optional)
  const [isLoading, setIsLoading] = useState(false);

  // Error state for handling unmatched slugs (optional)
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state (optional)
      setError(null); // Clear previous errors

      try {
        const matchingPost = blogData.find((item) => item.key === slug);
        setPost(matchingPost);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setError("Error loading blog post. Please try again later.");
      } finally {
        setIsLoading(false); // Clear loading state (optional)
      }
    };

    fetchData(); // Fetch data on component mount and slug change
  }, [slug]);

  if (isLoading) {
    return <div>Loading...</div>; // Display loading indicator (optional)
  }

  if (error) {
    return <div className="error">{error}</div>; // Display error message (optional)
  }

  if (!post) {
    return <div>No matching blog post found.</div>; // Handle unmatched slug
  }

  return (
    <div className="Blog">
      <div className="div1">
        <span>
          <Link to={width > 999 ? "/" : "/works"}>{"<---"}</Link>
        </span>
        <span>{post.date}</span>
        <span>{post.time}</span>
      </div>
      <h1>{post.title}</h1>
      <div className="div2">
        <span>{post.cat1}</span>
        <span>{post.cat2}</span>
      </div>
      {post.data.map((data) => (
        <>
          <h2>{data.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </>
      ))}
    </div>
  );
};
