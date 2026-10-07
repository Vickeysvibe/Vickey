import React from "react";
import { Link } from "react-router-dom";
import "../css/blog.css";
import blogs from "../data/blogs";

export const BlogList = () => (
  <section className="BlogList">
    <h1 className="topic">Blog</h1>
    {blogs.map((post) => (
      <Link key={post.key} className="blog-card" to={`/blog/${post.key}`}>
        <div>
          <h5>
            {post.cat1} {post.cat2}
            <span>{post.time}</span>
          </h5>
          <h6>{post.date}</h6>
        </div>
        <div>
          <h1>{post.title}</h1>
          <p>{post.desc}</p>
        </div>
      </Link>
    ))}
  </section>
);
