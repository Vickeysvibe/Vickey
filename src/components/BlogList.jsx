import React from "react";
import "../css/blog.css";
import { Link } from "react-router-dom";
import blogData from "../assets/blogDatabase";

export const BlogList = () => {
  const response = blogData;
  return (
    <div className="BlogList">
      <h1 className="topic">Blog</h1>
      {response.map((data) => (
        <Link className="div" to={"/blog/" + data.key}>
          <section>
            <h5>
              {data.cat1} {data.cat2}
              <span>{data.time}</span>
            </h5>

            <h6>{data.date}</h6>
          </section>
          <section>
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
          </section>
        </Link>
      ))}
    </div>
  );
};
