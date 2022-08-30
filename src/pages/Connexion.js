import React from "react";
import logo from "../assets/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import photoUser12 from "../assets/photoUser12.jpg";
import photoUser18 from "../assets/photoUser18.jpg";
import addButton from "../assets/addButton.svg";

const ConnexionContainer = styled.div`
  background-color: #f2f1f8;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
`;

const ProfilesContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Profile = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 10px 10px 0 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

const ProfilePicture = styled.img`
  width: 200px;
  height: 200px;
`;

const StyledLink = styled(Link)`
  /* border: blue solid 1px; */
  text-decoration: none;
  margin: 10px 20px 10px 0px;
  color: black;
`;

function Connexion() {
  return (
    <ConnexionContainer>
      <div>
        <div>
          <img src={logo} alt="Logo du site" />
          <h1 style={{ fontSize: "50px", margin: "10px 0px" }}>
            Connexions récentes
          </h1>
          <h4
            style={{ fontSize: "30px", color: "#7b7a7e", margin: "10px 0px" }}
          >
            Cliquez sur votre profil ou sur Ajouter un compte.
          </h4>
        </div>
        <ProfilesContainer>
          <StyledLink
            to={"/JeremiePiard_12_30082022/user/" + 12}
            key={"user12"}
          >
            <Profile>
              <ProfilePicture src={photoUser12} alt="Photo de profil de Karl" />
              <p style={{ fontSize: "30px", margin: "15px 0" }}>Karl</p>
            </Profile>
          </StyledLink>
          <StyledLink
            to={"/JeremiePiard_12_30082022/user/" + 18}
            key={"user18"}
          >
            <Profile>
              <ProfilePicture
                src={photoUser18}
                alt="Photo de profil de Cecilia"
              />
              <p style={{ fontSize: "30px", margin: "15px 0" }}>Cecilia</p>
            </Profile>
          </StyledLink>
          <StyledLink to={"/JeremiePiard_12_12082022/new-user"} key={"newUser"}>
            <Profile style={{ width: " 200px" }}>
              <img
                src={addButton}
                alt="Bouton nouveau profil"
                style={{
                  width: "100px",
                  height: "100px",
                  padding: "50px",
                  backgroundColor: "#f4f6fa",
                }}
              />
              <p
                style={{
                  fontSize: "30px",
                  margin: "15px 0",
                  color: "#f25656",
                  textAlign: "center",
                }}
              >
                Ajouter un compte
              </p>
            </Profile>
          </StyledLink>
        </ProfilesContainer>
      </div>
    </ConnexionContainer>
  );
}

export default Connexion;
