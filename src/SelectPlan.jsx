import React, { useContext, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import UserContext from "./UserContext";

function reducer(state, action) {
  switch (action.type) {
    case "card1":
      return {
        card1: true,
        card2: false,
        card3: false,
      };
    case "card2":
      return {
        card1: false,
        card2: true,
        card3: false,
      };
    case "card3":
      return {
        card1: false,
        card2: false,
        card3: true,
      };
  }
}

function SelectPlan() {
  const { dispatch } = useContext(UserContext);
  const [showPriceType, setShowPriceType] = useState(false);
  const [active, dispatchActive] = useReducer(reducer, {
    card1: true,
    card2: false,
    card3: false,
  });
  const [priceTip, setPriceType] = useState("monthly");

  function click() {
    const span = document.getElementById("span");
    if (priceTip == "monthly") {
      setPriceType("yearly");
      span.classList.add("translate-x-5");
      setShowPriceType(true);
    } else {
      setPriceType("monthly");
      span.classList.remove("translate-x-5");
      setShowPriceType(false);
    }
  }

  function handleClick(card) {
    dispatchActive({ type: card });
  }

  function sendDispatch() {
    let type = { type: "Acard", price: showPriceType ? 90 : 9 };
    if (active.card2)
      type = { type: "Advanced", price: showPriceType ? 120 : 12 };
    else if (active.card3)
      type = { type: "Pro", price: showPriceType ? 150 : 15 };
    dispatch({ type: "SELECT_PLAN", payloud: { ...type, priceTip } });
  }

  return (
    <div className="flex h-full flex-col justify-between space-y-3 md:space-y-0">
      <div>
        <h1 className="text-3xl text-Marineblue  md:text-4xl">
          Select your plan
        </h1>
        <p className={`mt-1 mb-2 text-Coolgray md:mt-2 md:mb-6`}>
          You have option of monthly or yearly biling.
        </p>
        <div className="flex flex-wrap gap-4 md:flex-nowrap">
          <Card
            rule="button"
            logo="/icon-arcade.svg"
            feateur="Acard"
            price={priceTip === "monthly" ? 9 : 90}
            showPriceType={showPriceType}
            active={active.card1}
            onClick={() => handleClick("card1")}
          />
          {/*  */}
          <Card
            logo="/icon-advanced.svg"
            feateur="Advanced"
            price={priceTip === "monthly" ? 12 : 120}
            showPriceType={showPriceType}
            active={active.card2}
            onClick={() => handleClick("card2")}
          />
          {/*  */}
          <Card
            logo="/icon-pro.svg"
            feateur="Pro"
            price={priceTip === "monthly" ? 15 : 150}
            showPriceType={showPriceType}
            active={active.card3}
            onClick={() => handleClick("card3")}
          />
        </div>
        <div className="mt-4 flex items-center justify-center space-x-6 rounded-lg bg-violet-50 p-2">
          <h4
            className={`font-medium ${
              priceTip === "monthly" ? `text-Marineblue` : "text-Coolgray"
            }
          `}
          >
            Monthly
          </h4>
          <div onClick={click} className={`w-11 rounded-xl bg-Marineblue p-1`}>
            <span
              id="span"
              onClick={click}
              className="block h-4 w-4 rounded-full bg-White transition-transform duration-200"
            ></span>
          </div>
          <h4
            className={`font-medium ${
              priceTip === "yearly" ? `text-Marineblue` : "text-Coolgray"
            } `}
          >
            Yearly
          </h4>
        </div>
      </div>
      <div className={`flex flex-row items-center justify-between`}>
        <Link to={"/"} className="text-Coolgray">
          Go back
        </Link>
        <Link
          to={"/addOns"}
          className="rounded-lg bg-Marineblue py-2 px-5 font-medium text-white"
          onClick={sendDispatch}
        >
          Next step
        </Link>
      </div>
    </div>
  );
}

export default SelectPlan;
