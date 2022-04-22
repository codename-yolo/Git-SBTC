import React, { useState } from "react";
import Modal from "../../common/components/Modal";
import logo from "../../logo.png";
import "./App.css";

export default function App() {
  return (
    <>
      <Modal></Modal>
      <img src={logo} className="App-logo" alt="logo" />
    </>
  );
}
