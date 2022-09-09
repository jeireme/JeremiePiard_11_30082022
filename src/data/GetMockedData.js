import { useState } from "react";
import user12 from "../data/user12.json";
import user18 from "../data/user18.json";

export function getMockedData(id, userData, setUserData, setDataLoaded) {
  if (id === "12") {
    setUserData(user12);
    setDataLoaded(true);
  } else if (id === "18") {
    setUserData(user18);
    setDataLoaded(true);
  }
}
