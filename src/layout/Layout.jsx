import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./Layout.scss";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
        <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
