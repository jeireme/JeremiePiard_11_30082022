import Axios from "axios";

export function getDataAPI(id) {
  let user = {};

  Axios.get("http://localhost:3000/user/" + id).then((response) => {
    user.id = response.data.data.id;
    user.firstName = response.data.data.userInfos.firstName;
    user.lastName = response.data.data.userInfos.lastName;
    user.age = response.data.data.userInfos.age;
    user.todayScpre = response.data.data.todayScore;
    user.calorieCount = response.data.data.keyData.calorieCount;
    user.proteinCount = response.data.data.keyData.proteinCount;
    user.carbohydrateCount = response.data.data.keyData.carbohydrateCount;
    user.lipidCount = response.data.data.keyData.lipidCount;
    //   console.log(user);
  });

  Axios.get("http://localhost:3000/user/" + id + "/activity").then(
    (response) => {
      user.activity = response.data.data.sessions;
      //   console.log(user.activity);
    }
  );

  Axios.get("http://localhost:3000/user/" + id + "/average-sessions").then(
    (response) => {
      user.sessionsLength = response.data.data.sessions;
      //   console.log(user.sessionsLength);
    }
  );

  Axios.get("http://localhost:3000/user/" + id + "/performance").then(
    (response) => {
      user.kind = response.data.data.kind;
      user.kindData = response.data.data.data;
      //   console.log(user.kindData);
    }
  );

    if (Object.keys(user).length > 1) return user;
    else console.log("API connexion failed");
}
