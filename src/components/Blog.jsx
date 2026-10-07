import React from "react";
import { Link, useParams } from "react-router-dom";
import "../css/blog.css";
import blogs from "../data/blogs";
import useMediaQuery, { MOBILE_QUERY } from "../hooks/useMediaQuery";

export const Blog = () => {
  const { slug } = useParams();
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const post = blogs.find((item) => item.key === slug);

  // The blog list lives on "/" on desktop and on "/works" on mobile.
  const backLink = <Link to={isMobile ? "/works" : "/"}>{"<---"}</Link>;

  if (!post) {
    return (
      <div className="Blog">
        <div className="blog-meta">{backLink}</div>
        <p>No matching blog post found.</p>
      </div>
    );
  }

  return (
    <article className="Blog">
      <div className="blog-meta">
        {backLink}
        <span>{post.date}</span>
        <span>{post.time}</span>
      </div>
      <h1>{post.title}</h1>
      <div className="blog-tags">
        <span>{post.cat1}</span>
        <span>{post.cat2}</span>
      </div>
      {post.data.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: section.content }} />
        </section>
      ))}
    </article>
  );
};
