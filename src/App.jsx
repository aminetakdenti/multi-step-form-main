import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import Finish from "./Thank";

function App() {
  return (
    <>
      <img
        className="absolute z-0 w-full md:hidden"
        src="/bg-sidebar-mobile.svg"
      />
      <div className="relative flex min-h-screen items-center justify-center">
        <div className="mx-2 flex flex-col rounded-xl bg-White p-2 shadow-2xl md:mx-0 md:flex-row md:gap-3 md:p-5">
          <Nav />
          <div
            className={`m-4 flex  flex-col justify-between md:my-6 md:mx-14 md:min-w-[500px]`}
          >
            <Routes>
              <Route path="/" element={<PersonalInfo />} />
              <Route path="/selectPlan" element={<SelectPlan />} />
              <Route path="/addOns" element={<AddOns />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/thank" element={<Finish />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
