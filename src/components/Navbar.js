import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  font-size: 25px;
  height: 100px;
  padding: 0 120px 0 20px;
`;

const Logo = styled.img`
  height: 70px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo src={logo} alt="Logo du site" />
      <StyledLink to="#">Accueil</StyledLink>
      <StyledLink to="#">Profil</StyledLink>
      <StyledLink to="#">Réglage</StyledLink>
      <StyledLink to="#">Communauté</StyledLink>
    </NavbarContainer>
  );
}

export default Navbar;
