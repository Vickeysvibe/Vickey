import React from "react";
import { Link } from "react-router-dom";
import "../css/blog.css";
import blogs from "../data/blogs";
import { Reveal } from "./Reveal";

export const BlogList = () => (
  <section className="BlogList">
    <Reveal>
      <h1 className="topic">Blog</h1>
    </Reveal>
    {blogs.map((post) => (
      <Reveal key={post.key}>
        <Link className="blog-card" to={`/blog/${post.key}`}>
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
      </Reveal>
    ))}
  </section>
);
