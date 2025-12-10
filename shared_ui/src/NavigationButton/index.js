import React from "react";
import "./styles.css";

export default function ({ color, children, href }) {
  return (
    <a className={`btn ${color}`} href={href}>
      {children}
    </a>
  );
}
