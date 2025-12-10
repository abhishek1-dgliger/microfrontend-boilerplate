import React from "react";
import "./styles.css";

export default function ({ color, text }) {
  return <button className={`btn ${color}`}>{text}</button>;
}
