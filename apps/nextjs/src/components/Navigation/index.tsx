"use client";
import { useState } from "react";
import navbar from "./navbar";
import sidebar from "./sidebar";

const Navigation = () => {
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <sidebar isOpen={isOpen} toggle={toggle} />
      <navbar toggle={toggle} />
    </>
  );
};

export default Navigation;