import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark " expand="lg">
      <Container>
        <Navbar.Brand href="#home">Redux-Toolkit</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="">
            <Link to="/">CRUD UYGULAMASI</Link>
            <Link to="/counter">SAYAÇ UYGULAMASI</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
