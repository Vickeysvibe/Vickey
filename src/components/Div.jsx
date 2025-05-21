import React from "react";
import eye from "../svgs/eye.svg";
export const Div = (props) => {
  console.log(props.props);
  return (
    <div>
      <span>
        <h3>{props.props.title}</h3>
        <h6>{props.props.tech}</h6>
      </span>
      <p>{props.props.desc}</p>
      {props.props.link && (
        <a href={props.props.link}>
          <img src={eye} alt="eye" />
          <span>link</span>
        </a>
      )}
    </div>
  );
};
