import React from "react";
import styled from "styled-components";
import yoga from "../assets/yoga.svg";
import swimming from "../assets/swimming.svg";
import bike from "../assets/bike.svg";
import bodybuilding from "../assets/bodybuilding.svg";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  height: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const Icon = styled.img`
  background-color: white;
  border-radius: 5px;
  height: 35px;
  width: 35px;
  padding: 15px;
  margin: 10px;
  cursor: pointer;
`;

const Copyright = styled.p`
  color: white;
  width: fit-content;
  white-space: nowrap;
  margin-bottom: 50px;
  transform: rotate(-90deg);
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <IconContainer>
        <Icon src={yoga} alt="Bouton icône de yoga" />
        <Icon src={swimming} alt="Bouton icône de natation" />
        <Icon src={bike} alt="Bouton icône de vélo" />
        <Icon src={bodybuilding} alt="Bouton icône de musculation" />
      </IconContainer>
      <Copyright>Copyright, SportSee 2022</Copyright>
    </SidebarContainer>
  );
}

export default Sidebar;
