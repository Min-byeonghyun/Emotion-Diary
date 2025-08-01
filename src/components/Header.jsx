import React from "react";
import "./Header.css";
export default function Header({ title, leftChild, rightChild }) {
  return (
    <header className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{rightChild}</div>
    </header>
  );
}
