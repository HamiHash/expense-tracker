import React from "react";
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // so everything we receive as a classname will be added to this string
  return <div className={classes}>{props.children}</div>;
}

export default Card;
