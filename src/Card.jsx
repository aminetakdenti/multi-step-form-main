import React from "react";

function Card({ logo, feateur, price, showPriceType, active, onClick }) {
  return (
    <div
      role="button"
      className={`flex w-full min-w-[135px] cursor-pointer items-center justify-start space-x-2 rounded-lg border-2 p-2 transition-colors duration-200 md:flex-col  md:items-start md:space-x-0 md:p-6 ${
        active ? `border-PurplishblueLight bg-violet-50` : null
      }`}
      onClick={onClick}
    >
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-col justify-start">
        <div className="mt-0 md:mt-12">
          <h4 className="text-sm font-medium text-Marineblue md:text-base">
            {feateur}
          </h4>
          <p className={`text-xs text-Coolgray `}>
            ${price}/{showPriceType ? "yr" : "mo"}
          </p>
        </div>
        <p
          className={`${
            showPriceType === true ? `block` : `hidden`
          } text-xs text-Marineblue md:text-sm`}
        >
          2 month free
        </p>
      </div>
    </div>
  );
}

export default Card;
