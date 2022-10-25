import React, { Component } from "react";
import {
  Nav,
  Navbar,
  FormControl,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import logo from "./logo192.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';




export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar  collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              /> React site
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/"> Home</Nav.Link>
                <Nav.Link href="/about"> About us</Nav.Link>
                <Nav.Link href="/contacts"> Contacts</Nav.Link>
                <Nav.Link href="/blog"> Blog</Nav.Link>
                <Nav.Link href="/posts"> Posts</Nav.Link>
              </Nav>
              <Form inline className="d-flex ">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  classMane="ms-sm-2"
                  aria-label="Search"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        
          
      </>
    );
  }
}
