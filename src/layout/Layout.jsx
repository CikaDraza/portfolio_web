import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
        <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
