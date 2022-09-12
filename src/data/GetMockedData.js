import { useState } from "react";
import user12 from "../data/user12.json";
import user18 from "../data/user18.json";

/**
 * Function that retrieve user infos from the mocked data and save it in userData
 * @param {string} id User id
 * @param {object} userData State stocking the user data
 * @param {function} setUserData Function to change userData
 * @param {function} setDataLoaded State that became true when data is loaded
 * @return void
 */
export function getMockedData(id, userData, setUserData, setDataLoaded) {
  if (id === "12") {
    setUserData(user12);
    setDataLoaded(true);
  } else if (id === "18") {
    setUserData(user18);
    setDataLoaded(true);
  }
}
