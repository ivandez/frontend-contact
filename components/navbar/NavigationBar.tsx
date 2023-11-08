"use client";
import { Navbar } from "flowbite-react";

const NavigationBar = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/dashboard">&#x2190; Go to dashbaord</Navbar.Brand>
      <Navbar.Toggle />
    </Navbar>
  );
};

export default NavigationBar;
