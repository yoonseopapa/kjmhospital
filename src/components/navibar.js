import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Navibar = () => {
 
  return (
    <div className="testz" >
    <Navbar collapseOnSelect expand="lg" bg="#f7c149" variant="light">
    <Navbar.Brand href="#home">KIM JUNG MIN CLINIC</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      <NavDropdown title="병원소개" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/map">오시는길</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">대표 원장</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="피부미용" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">여드름</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">기미&색소</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">모공&흉터</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">리프팅&탄력</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">레이저제모</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="피부질환" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">아토피</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">화상</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">대상포진</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">사마귀&티눈</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">무좀</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="안티에이징" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">보통스&더모톡신</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">필러</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">물광주사</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">실리프팅</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">영양주사</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#features">메디컬스킨케어</Nav.Link>
      </Nav>
      {/* <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav> */}
    </Navbar.Collapse>
  </Navbar>
  </div>
  );

};

export default Navibar;
