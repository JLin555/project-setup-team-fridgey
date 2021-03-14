import React from "react";

export const dot = (days) => {
  if (days < 2) {
    return <span class="dot dotRed"></span>;
  } else if (days >= 2 && days < 6) {
    return <span class="dot dotYellow"></span>;
  } else {
    return <span class="dot dotGreen"></span>;
  }
};

export const chipDays = (days) => {
  if (days < 2) {
    return <p class="chip chipFilled chipRed"> {days + " Days"}</p>;
  } else if (days >= 2 && days < 6) {
    return <p class="chip chipFilled chipYellow"> {days + " Days"}</p>;
  } else {
    return <p class="chip chipFilled chipGreen"> {days + " Days"}</p>;
  }
};

export const chipAmount = (amount) => {
  if (amount === "Lots") {
    return <p class="chip chipLots"> {amount}</p>;
  } else if (amount === "Some") {
    return <p class="chip chipSome"> {amount}</p>;
  } else {
    return <p class="chip chipFew"> {amount}</p>;
  }
};
