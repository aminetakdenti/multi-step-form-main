import { NavLink } from "react-router-dom";

function LInk({ id, section, path }) {
  return (
    <NavLink
      to={path}
      className=" flex w-full items-center justify-center md:justify-start md:gap-4"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full  border-2 border-White font-bold text-White">
        {id}
      </span>
      <div>
        <p className="hidden text-sm text-Pastelblue md:block">STEP {id}</p>
        <h1 className="hidden text-white md:block">{section}</h1>
      </div>
    </NavLink>
  );
}

export default LInk;
