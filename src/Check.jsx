import React, { useContext, useState } from "react";
import UserContext from "./UserContext";

function Check({ title, text, price, priceType }) {
  const { state, dispatch } = useContext(UserContext);

  const [active, setActive] = useState(false);

  function handleClick() {
    if (active) {
      setActive(false);
      dispatch({ type: "REMOVE", payloud: [title, price] });
    } else {
      dispatch({ type: "ADD", payloud: [title, price] });
      setActive(true);
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 px-5  ${
        active ? `border-Purplishblue bg-violet-50` : null
      }`}
    >
      <input
        className="h-4 w-4"
        type="checkbox"
        checked={active}
        onClick={handleClick}
      />
      <div className="">
        <h4 className={`text-sm font-bold text-Marineblue md:text-base`}>
          {title}
        </h4>
        <p className={`text-xs text-Coolgray md:text-base`}>{text}</p>
      </div>
      <p className="text-sm text-Purplishblue">
        +${price}/{priceType}
      </p>
    </div>
  );
}

export default Check;
