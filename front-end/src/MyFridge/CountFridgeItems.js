// import { groups } from "../data/fridgeDataFake";
const fridgeData = require("../data/fridgeMockData.json");
export let num;
export const itemCount = () => {
  num = 0;
  // fridgeData[0] is 1 large object that contains 4 Keys (Fruits, Grains etc.) inside of it that we turn into an Array entries
  for (let i = 0; i < Object.entries(fridgeData[0]).length; i++) {
    // Each Array Entries has 2 values, the Object key (eg Fruit), and then the List of objects (eg. items in Fruits)
    for (let j = 0; j < Object.entries(fridgeData[0])[i][1].length; j++) {
      num = num + 1;
    }
  }
  return num;
};