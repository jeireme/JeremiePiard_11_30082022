import user12 from "../data/user12.json";
import user18 from "../data/user18.json";

export function getMockedData(id) {
  if (id === "12") return user12;
  else if (id === "18") return user18;
}
