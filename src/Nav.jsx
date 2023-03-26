import LInk from "./LInk";

function Nav() {
  return (
    <div
      className="m-auto flex h-0 -translate-y-20 flex-row justify-center space-x-6
    bg-no-repeat  md:h-[568px] md:w-[274px] md:translate-y-0 md:flex-col md:justify-start md:space-x-0 md:space-y-5 md:bg-[url('/bg-sidebar-desktop.svg')] md:p-10"
    >
      <LInk id="1" section="YOUR INFO" path="/" />
      <LInk id="2" section="SELECT PLAN" path="/selectPlan" />
      <LInk id="3" section="ADD-ONS" path="/addOns" />
      <LInk id="4" section="SUMMARY" path="/summary" />
    </div>
  );
}

export default Nav;
