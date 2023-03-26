import React, { useContext } from "react";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";
import { getTotal } from "./reducer";

function Summary() {
  const { state } = useContext(UserContext);
  const { selectPlan, addOns } = state;

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <h1 className="text-4xl text-Marineblue">Finishing up</h1>
        <p className={`mt-2 mb-6 text-Coolgray`}>
          Double-check everything looks OK before confirming.
        </p>
        <div className="rounded-lg bg-Magnolia py-6 px-6">
          <div className=" flex items-center justify-between border-b border-b-Lightgray pb-3 font-bold text-Marineblue">
            <div className="space-y-1">
              <h3>
                {selectPlan.type} ({selectPlan.priceType})
              </h3>
              <p className="text-md font-light text-Coolgray">Chnage</p>
            </div>
            <h3>
              ${selectPlan.price}$/
              {selectPlan.priceType === "yearly" ? "yr" : "mo"}
            </h3>
          </div>
          {addOns.length > 0 && (
            <div className="mt-4 space-y-4">
              {addOns.map((ele) => (
                <div className="flex items-center justify-between">
                  <p className="text-md font-light text-Coolgray">{ele[0]}</p>
                  <p className="text-md font-light text-Coolgray">
                    +${ele[1]}/{selectPlan.priceType === "yearly" ? "yr" : "mo"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between p-6">
          <p className="text-md font-light text-Coolgray">
            Total (per {selectPlan.priceType === "monthly" ? "month" : "year"})
          </p>
          <h3 className="font-bold text-Purplishblue">
            ${getTotal(addOns, selectPlan.price)}/yr
          </h3>
        </div>
      </div>
      <div className={`flex items-center justify-between md:flex-row`}>
        <Link to={"/addOns"} className="text-Coolgray">
          Go back
        </Link>
        <Link
          to={"/thank"}
          className="rounded-lg bg-Purplishblue py-2 px-5 font-medium text-white"
        >
          Confirm
        </Link>
      </div>
    </div>
  );
}

export default Summary;
