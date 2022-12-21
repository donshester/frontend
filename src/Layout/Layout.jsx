import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

import styles from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <Navbar bg="light" expand="md" sticky="top">
        <Container fluid>
          <Navbar.Brand to="/" as={NavLink}>
            Admin panel
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/" as={NavLink}>
                Dashboard
              </Nav.Link>
              <Nav.Link to="/departments" as={NavLink}>
                Departments
              </Nav.Link>
              <Nav.Link to="/employees" as={NavLink}>
                Employees
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
}
