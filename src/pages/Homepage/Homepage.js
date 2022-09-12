import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import calories from "../../assets/calories-icon.svg";
import proteins from "../../assets/protein-icon.svg";
import carbs from "../../assets/carbs-icon.svg";
import fat from "../../assets/fat-icon.svg";
import BarChartGraphic from "../../components/BarChartGraphic";
import LineChartGraphic from "../../components/LineChartGraphic";
import RadarChartGraphic from "../../components/RadarChartGraphic";
import RadialBarChartGraphic from "../../components/RadialBarChartGraphic";
import { useParams } from "react-router-dom";
import { getDataAPI } from "../../data/GetDataAPI";
import "./Homepage.css";

/**
 * @file Homepage.js is the main file of the project where all the elements are displayed 
 * @author Jérémie PIARD
 * @see <a href="https://jeireme.github.io/JeremiePiard_12_30082022/" target="_blank"> Website </a>
 */

/**
 * Homepage of the app SportSee
 */
function Homepage() {
  let [userData, setUserData] = useState({});
  let [isDataLoaded, setDataLoaded] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    getDataAPI(id, userData, setUserData, setDataLoaded);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      <div className="homepageContainer">
        <Sidebar />
        <div className="globalContainer">
          <div className="headerContainer">
            {isDataLoaded && (
              <p className="welcomeText">
                Bonjour{" "}
                <span style={{ color: "red" }}>{userData.firstName}</span>
              </p>
            )}
            <p style={{ fontSize: "20px" }}>
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
          </div>
          <div className="dataContainer">
            <div className="graphicsContainer">
              <div className="barChartContainer">
                {isDataLoaded && (
                  <BarChartGraphic user={userData}></BarChartGraphic>
                )}
              </div>

              <div className="graphicsFlexContainer">
                <div className="lineChartContainer">
                  {isDataLoaded && (
                    <LineChartGraphic user={userData}></LineChartGraphic>
                  )}
                </div>

                <div className="radarChartContainer">
                  {isDataLoaded && (
                    <RadarChartGraphic user={userData}></RadarChartGraphic>
                  )}
                </div>

                <div className="radialBarChartContainer">
                  {isDataLoaded && (
                    <RadialBarChartGraphic
                      user={userData}
                    ></RadialBarChartGraphic>
                  )}
                </div>
              </div>
            </div>
            <div className="nutrimentDataContainer">
              <div className="nutrimentData">
                <div className="iconContainer">
                  <img
                    className="icon"
                    src={calories}
                    alt="Icône des calories brûlées"
                  />
                </div>
                <div className="nutrimentDataInfos">
                  {isDataLoaded && (
                    <div className="nutrimentDataQuantity">
                      {userData.calorieCount}kCal
                    </div>
                  )}
                  <div className="nutrimentDataName">Calories</div>
                </div>
              </div>

              <div className="nutrimentData">
                <div className="iconContainer">
                  <img
                    className="icon"
                    src={proteins}
                    alt="Icône des protéines perdues"
                  />
                </div>
                <div className="nutrimentDataInfos">
                  {isDataLoaded && (
                    <div className="nutrimentDataQuantity">
                      {userData.proteinCount}g
                    </div>
                  )}
                  <div className="nutrimentDataName">Protéines</div>
                </div>
              </div>

              <div className="nutrimentData">
                <div className="iconContainer">
                  <img
                    className="icon"
                    src={carbs}
                    alt="Icône des glucides perdues"
                  />
                </div>
                <div className="nutrimentDataInfos">
                  {isDataLoaded && (
                    <div className="nutrimentDataQuantity">
                      {userData.carbohydrateCount}g
                    </div>
                  )}
                  <div className="nutrimentDataName">Glucides</div>
                </div>
              </div>

              <div className="nutrimentData">
                <div className="iconContainer">
                  <img
                    className="icon"
                    src={fat}
                    alt="Icône de la graisse perdue"
                  />
                </div>
                <div className="nutrimentDataInfos">
                  {isDataLoaded && (
                    <div className="nutrimentDataQuantity">
                      {userData.lipidCount}g
                    </div>
                  )}
                  <div className="nutrimentDataName">Lipides</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
