import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import calories from "../assets/calories-icon.svg";
import proteins from "../assets/protein-icon.svg";
import carbs from "../assets/carbs-icon.svg";
import fat from "../assets/fat-icon.svg";
import BarChartGraphic from "../components/BarChartGraphic";
import LineChartGraphic from "../components/LineChartGraphic";
import RadarChartGraphic from "../components/RadarChartGraphic";
import RadialBarChartGraphic from "../components/RadialBarChartGraphic";
import { useParams } from "react-router-dom";
// import { getDataAPI } from "../data/GetDataAPI";
import { getMockedData } from "../data/GetMockedData";

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
  padding: 60px 95px; // ! régler le padding
`;

const HeaderContainer = styled.div`
  /* background-color: lightblue; */
  width: 100%;
  height: 200px;
  color: black;
`;

// * GLOBAR DATA CONTAINER
const DataContainer = styled.div`
  /* background-color: lightgreen; */
  width: 100%;
  height: 850px;
  display: flex;
  align-items: center;
`;

const NutrimentDataContainer = styled.div`
  /* border: red solid 1px; */
  width: 360px; // ! width des nutriments data
  height: 100%;
  margin: 30px 0 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const NutrimentData = styled.div`
  background-color: #fbfbfb;
  display: flex;
  border-radius: 5px;
  width: 90%;
  height: 170px;  // ! height des nutriments data
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
  width: 150px;
  height: 100%;
  margin-right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  border-radius: 5px;
  width: 80px;
  height: 80px;
  margin: 10px;
`;

const GraphicsContainer = styled.div`
  /* border: yellowgreen solid 1px; */
  /* background-color: yellowgreen; */
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BarChartContainer = styled.div`
  /* border: pink solid 1px; */
  background-color: #fbfbfb;
  border-radius: 5px;
  width: 100%;
  height: 55%;
`;

const GraphicsFlexContainer = styled.div`
  /* background-color: yellowgreen; */
  /* border: blue solid 1px; */
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40%;
`;

const LineChartContainer = styled.div`
  background-color: #ff0000;
  border-radius: 5px;
  width: 31%;
  height: 100%;
`;

const RadarChartContainer = styled.div`
  //background-color: #282d30; // ! couleur de la maquette
  background-color: #fbfbff;
  border-radius: 5px;
  width: 31%;
  height: 100%;
`;

const RadialBarChartContainer = styled.div`
  background-color: #fbfbfb;
  border-radius: 5px;
  width: 31%;
  height: 100%;
`;

function Homepage() {
  let [userData, setUserData] = useState({});
  let [isDataLoaded, setDataLoaded] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    let user = getMockedData(id);
    setUserData(user);
    setDataLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      <HomepageContainer>
        <Sidebar />
        <GlobalContainer>
          <HeaderContainer>
            {isDataLoaded && (
              <WelcomeText>
                Bonjour{" "}
                <span style={{ color: "red" }}>{userData.firstName}</span>
              </WelcomeText>
            )}
            <p style={{ fontSize: "20px" }}>
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
          </HeaderContainer>
          <DataContainer>
            <GraphicsContainer>
              <BarChartContainer>
                {isDataLoaded && (
                  <BarChartGraphic user={userData}></BarChartGraphic>
                )}
              </BarChartContainer>

              <GraphicsFlexContainer>
                <LineChartContainer>
                  {isDataLoaded && (
                    <LineChartGraphic user={userData}></LineChartGraphic>
                  )}
                </LineChartContainer>

                <RadarChartContainer>
                  {isDataLoaded && (
                    <RadarChartGraphic user={userData}></RadarChartGraphic>
                  )}
                </RadarChartContainer>

                <RadialBarChartContainer>
                  {isDataLoaded && (
                    <RadialBarChartGraphic
                      user={userData}
                    ></RadialBarChartGraphic>
                  )}
                </RadialBarChartContainer>
              </GraphicsFlexContainer>
            </GraphicsContainer>
            <NutrimentDataContainer>
              <NutrimentData>
                <IconContainer>
                  <Icon src={calories} alt="Icône des calories brûlées" />
                </IconContainer>
                <NutrimentDataInfos>
                  {isDataLoaded && (
                    <NutrimentDataQuantity>
                      {userData.calorieCount}kCal
                    </NutrimentDataQuantity>
                  )}
                  <NutrimentDataName>Calories</NutrimentDataName>
                </NutrimentDataInfos>
              </NutrimentData>

              <NutrimentData>
                <IconContainer>
                  <Icon src={proteins} alt="Icône des protéines perdues" />
                </IconContainer>
                <NutrimentDataInfos>
                  {isDataLoaded && (
                    <NutrimentDataQuantity>
                      {userData.proteinCount}g
                    </NutrimentDataQuantity>
                  )}
                  <NutrimentDataName>Protéines</NutrimentDataName>
                </NutrimentDataInfos>
              </NutrimentData>

              <NutrimentData>
                <IconContainer>
                  <Icon src={carbs} alt="Icône des glucides perdues" />
                </IconContainer>
                <NutrimentDataInfos>
                  {isDataLoaded && (
                    <NutrimentDataQuantity>
                      {userData.carbohydrateCount}g
                    </NutrimentDataQuantity>
                  )}
                  <NutrimentDataName>Glucides</NutrimentDataName>
                </NutrimentDataInfos>
              </NutrimentData>

              <NutrimentData>
                <IconContainer>
                  <Icon src={fat} alt="Icône de la graisse perdue" />
                </IconContainer>
                <NutrimentDataInfos>
                  {isDataLoaded && (
                    <NutrimentDataQuantity>
                      {userData.lipidCount}g
                    </NutrimentDataQuantity>
                  )}
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
