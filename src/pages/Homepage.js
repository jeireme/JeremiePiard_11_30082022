import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import calories from "../assets/calories-icon.svg";
import proteins from "../assets/protein-icon.svg";
import carbs from "../assets/carbs-icon.svg";
import fat from "../assets/fat-icon.svg";
// import { useParams } from "react-router-dom";

const WelcomeText = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 500;
`;

const HomepageContainer = styled.div`
  /* background-color: blue; */
  width: 100%;
  height: 88vh;
  display: grid;
  grid-template-columns: 115px 1fr;
`;

const GlobalContainer = styled.div`
  /* background-color: pink; */
  padding: 60px 100px; // ! régler le padding
`;

const HeaderContainer = styled.div`
  /* background-color: lightblue; */
  width: 100%;
  height: 200px;
  color: black;
`;

const DataContainer = styled.div`
  /* background-color: lightgreen; */
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
`;

const GraphicsContainer = styled.div`
  background-color: yellowgreen;
  width: 1200px;
  height: 100%;
`;

const NutrimentDataContainer = styled.div`
  /* border: red solid 1px; */
  width: 330px; // ! width du container des Nutriment Data
  height: 100%;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const NutrimentData = styled.div`
  background-color: #fbfbfb;
  display: flex;
  border-radius: 5px;
  width: 80%;
  height: 120px;
`;

const NutrimentDataInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NutrimentDataQuantity = styled.div`
  font-size: large;
  font-weight: bold;
  margin-bottom: 7px;
`;

const NutrimentDataName = styled.div`
  font-size: medium;
  color: grey;
`;

const IconContainer = styled.div`
  /* background-color: pink; */
  width: 130px;
  height: 100%;
  margin-right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  border-radius: 5px;
  height: 60px;
  width: 60px;
  margin: 10px;
`;

function Homepage() {
  // const { id } = useParams();

  return (
    <div>
      <Navbar />
      <HomepageContainer>
        <Sidebar />
        <GlobalContainer>
          <HeaderContainer>
            <WelcomeText>
              Bonjour <span style={{ color: "red" }}>Thomas</span>
            </WelcomeText>
            <p style={{ fontSize: "20px" }}>
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
          </HeaderContainer>
          <DataContainer>
            <GraphicsContainer>
              Graphiques en cours de développement...
            </GraphicsContainer>
            <NutrimentDataContainer>
              <NutrimentData>
                <IconContainer>
                  <Icon src={calories} alt="Icône des calories brûlées" />
                </IconContainer>
                <NutrimentDataInfos>
                  <NutrimentDataQuantity>1,930kCal</NutrimentDataQuantity>
                  <NutrimentDataName>Calories</NutrimentDataName>
                </NutrimentDataInfos>
              </NutrimentData>

              <NutrimentData>
                <IconContainer>
                  <Icon src={proteins} alt="Icône des protéines perdues" />
                </IconContainer>
                <NutrimentDataInfos>
                  <NutrimentDataQuantity>155g</NutrimentDataQuantity>
                  <NutrimentDataName>Protéines</NutrimentDataName>
                </NutrimentDataInfos>
              </NutrimentData>

              <NutrimentData>
                <IconContainer>
                  <Icon src={carbs} alt="Icône des glucides perdues" />
                </IconContainer>
                <NutrimentDataInfos>
                  <NutrimentDataQuantity>290g</NutrimentDataQuantity>
                  <NutrimentDataName>Glucides</NutrimentDataName>
                </NutrimentDataInfos>
              </NutrimentData>

              <NutrimentData>
                <IconContainer>
                  <Icon src={fat} alt="Icône de la graisse perdue" />
                </IconContainer>
                <NutrimentDataInfos>
                  <NutrimentDataQuantity>50g</NutrimentDataQuantity>
                  <NutrimentDataName>Lipides</NutrimentDataName>
                </NutrimentDataInfos>
              </NutrimentData>
            </NutrimentDataContainer>
          </DataContainer>
        </GlobalContainer>
      </HomepageContainer>
    </div>
  );
}

export default Homepage;
