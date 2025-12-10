import React from "react";
import logo from "../../assets/images/logo.png";
import "./styles.css";

export default function () {
  return (
    <nav>
      <section>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </section>
      <section>
        <div className="nav-links">
          <a href="/products">Products</a>
          <a href="/cart">My cart</a>
        </div>
      </section>
    </nav>
  );
}
