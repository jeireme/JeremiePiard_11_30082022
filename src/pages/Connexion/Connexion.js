import React from "react";
import logo from "../../assets/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import photoUser12 from "../../assets/photoUser12.jpg";
import photoUser18 from "../../assets/photoUser18.jpg";
import addButton from "../../assets/addButton.svg";
import "./Connexion.css";

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 10px 20px 10px 0px;
  color: black;
`;

/**
 * This is the connexion page of the SportSee app, you can select an account or add a new one
 */
function Connexion() {
  return (
    <div className="connexionContainer">
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
        <div className="profilesContainer">
          <StyledLink
            to={"/JeremiePiard_12_30082022/user/" + 12}
            key={"user12"}
          >
            <div className="profile">
              <img
                className="profilePicture"
                src={photoUser12}
                alt="Profil de Karl"
              />
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "500",
                  margin: "15px 0",
                }}
              >
                Karl
              </p>
            </div>
          </StyledLink>
          <StyledLink
            to={"/JeremiePiard_12_30082022/user/" + 18}
            key={"user18"}
          >
            <div className="profile">
              <img
                className="profilePicture"
                src={photoUser18}
                alt="Profil de Cecilia"
              />
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "500",
                  margin: "15px 0",
                }}
              >
                Cecilia
              </p>
            </div>
          </StyledLink>
          <StyledLink to={"/JeremiePiard_12_12082022/new-user"} key={"newUser"}>
            <div className="profile" style={{ width: " 200px" }}>
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
            </div>
          </StyledLink>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
