import React from "react";
import Container from "../Container";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./styles.css";

export default function ({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
