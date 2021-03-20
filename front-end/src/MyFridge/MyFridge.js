import React, { useState } from "react";
import "./MyFridge.css";
import { groups } from "../data/fridgeDataFake";
import { dot, chipDays, chipAmount } from "./itemColoring";
import Modal from "./deleteModal";
import { itemCount, num } from "./CountFridgeItems";
import NavBar from "../NavBar";
import welcome_pic from "./MyFridge-Welcome-Pic.png";

const MyFridge = (props) => {
  const [show, setShow] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemId, setItemId] = useState(0);
  // Deleting an Item
  const onDelete = (itemInput, groups) => {
    let matchIndex = parseInt(itemId);
    for (let i = 0; i < groups.length; i++) {
      var removeIndex = groups[i].category
        .map(function (item) {
          return item.id;
        })
        .indexOf(matchIndex);
      if (removeIndex !== -1) {
        groups[i].category.splice(removeIndex, 1);
        setShow(false);
      }
    }
  };
  // Rendering an Item
  const renderItem = (data, j) => {
    // Handling Delete Click
    const deleteClick = (event) => {
      const title = event.currentTarget.getAttribute("title");
      const id = event.currentTarget.getAttribute("id");
      setItemName(title);
      setItemId(id);
      setShow(true);
    };
    return (
      <tbody key={j}>
        <tr>
          <td>
            <span>{dot(data.daysleft)}</span>
            <span className="title">{data.title}</span>
            <span>{chipAmount(data.amount, data.daysleft)}</span>
            <span>{chipDays(data.daysleft)}</span>
          </td>
          <td>
            <button title={data.title} id={data.id} onClick={deleteClick}>
              x
            </button>
          </td>
        </tr>
        <Modal
          onClose={() => setShow(false)}
          show={show}
          onDelete={() => onDelete(data, groups)}
          itemName={itemName}
        />
      </tbody>
    );
  };
  // Rendering All Fridge Items
  return (
    <div>
      <p className={num === 0 ? "MyFridge-Hide" : ""}>
        You have {itemCount()} items in your Fridge
      </p>
      <div className={`MyFridge ${num === 0 ? "MyFridge-Hide" : ""}`}>
        {groups.map((item, i) => (
          <div key={i}>
            <h2 className="header">{item.header}</h2>
            <table>{item.category.map(renderItem)}</table>
          </div>
        ))}
      </div>
      <div className={num === 0 ? "" : "MyFridge-Hide"}>
        <h2> Welcome to Fridgey!</h2>
        <img
          src={welcome_pic}
          alt="MyFridge-Welcome"
          width="300"
          height="270"
        />
        <p>You have {itemCount()} items in your Fridge</p>
        <p className="MyFridge-Welcome-Msg">
          To add items to your Fridge, head over to the Shopping List tab :)
        </p>
      </div>
    </div>
  );
};
// the home page with the items and the stuff at the bottom
const Home = () => (
  <div>
    <NavBar />
    <header className="App-header">
      <h1 className="fridgey">MyFridge</h1>
      <MyFridge />
    </header>
  </div>
);

// make this available to other modules as an import
export { MyFridge, Home };

// const [count, setCount] = useState(0);

// useEffect(() => {
//   console.log("the component has rendered or re-rendered!");
// }, [count]);

// setCount(x);
// console.log("Count is " + count);
