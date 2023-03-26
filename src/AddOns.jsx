import Check from "./Check";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";

function AddOns() {
  const { state } = useContext(UserContext);
  const { priceType } = state.selectPlan;

  return (
    <div className="flex h-full flex-col justify-between space-y-3 md:space-y-0">
      <div>
        <h1 className="text-4xl text-Marineblue">Pick add-ons</h1>
        <p className={`mt-2 mb-4  text-Coolgray md:mb-6`}>
          Add-ons help enhance your gaming expreience.
        </p>
        <div className="space-y-3 md:space-y-5">
          <Check
            title="Online service"
            text="Access to multiplayer games"
            price={10}
            priceType={priceType === "monthly" ? "mo" : "yr"}
          />
          <Check
            title="Larger storage"
            text="Extra 1TB of cloud save"
            price={20}
            priceType={priceType === "monthly" ? "mo" : "yr"}
          />
          <Check
            title="Customizable profile"
            text="Cusom theme on your profile"
            price={20}
            priceType={priceType === "monthly" ? "mo" : "yr"}
          />
        </div>
      </div>
      <div className={`flex items-center justify-between md:flex-row`}>
        <Link to={"/selectPlan"} className="text-Coolgray">
          Go back
        </Link>
        <Link
          to={"/summary"}
          className="rounded-lg bg-Marineblue py-2 px-5 font-medium text-white"
        >
          Next step
        </Link>
      </div>
    </div>
  );
}

export default AddOns;
