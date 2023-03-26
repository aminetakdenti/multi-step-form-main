import { Link } from "react-router-dom";
import { useReducer, useContext, useRef, useState } from "react";
import UserContext from "./UserContext";

function PersonalInfo() {
  const { state, dispatch } = useContext(UserContext);
  const [active, setActive] = useState(false);

  const { yourInfo } = state;
  const [infoState, infoDispatch] = useReducer(reducer, yourInfo);
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  function reducer(state, action) {
    const { type, value, target } = action;
    switch (type) {
      case "CHANGE_NAME":
        if (value === "" || value.length < 6) {
          target.classList.add("error");
          nameRef.current.classList.remove("hidden");
        } else {
          target.classList.remove("error");
          nameRef.current.classList.add("hidden");
        }
        return {
          ...state,
          name: value,
        };
      case "CHANGE_EMAIL":
        if (value === "" || value.length < 6) {
          target.classList.add("error");
          emailRef.current.classList.remove("hidden");
        } else {
          target.classList.remove("error");
          emailRef.current.classList.add("hidden");
        }
        return {
          ...state,
          email: value,
        };
      case "CHANGE_PHONE_NUMBER":
        if (value === "" || value.length < 6) {
          target.classList.add("error");
          phoneRef.current.classList.remove("hidden");
        } else {
          target.classList.remove("error");
          phoneRef.current.classList.add("hidden");
        }
        return {
          ...state,
          phone: value,
        };
    }
  }

  function validation(e) {
    setTimeout(() => {
      console.log(e.target);
      e.target.href = "/text";
      console.log(e.target);
    }, 1000);
  }

  return (
    <div className="flex h-full flex-col justify-between space-y-5 md:space-y-0">
      <div>
        <h1 className="text-4xl text-Marineblue">Personal info</h1>
        <p className={`mt-2 mb-6 text-Coolgray`}>
          please prive your name, email adress, and phone number.
        </p>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <span ref={nameRef} className="hidden text-xs text-Strawberryred">
              This field is required
            </span>
          </div>
          <input
            type="text"
            name="name"
            className="test"
            id="name"
            value={infoState.name}
            onChange={(e) =>
              infoDispatch({
                type: "CHANGE_NAME",
                value: e.target.value,
                target: e.target,
              })
            }
            placeholder="e.g. Stephen King"
          />
          <div>
            <label htmlFor="email">Email Address</label>
            <span ref={emailRef} className="hidden text-xs text-Strawberryred">
              This field is required
            </span>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            value={infoState.email}
            onChange={(e) =>
              infoDispatch({
                type: "CHANGE_EMAIL",
                value: e.target.value,
                target: e.target,
              })
            }
            placeholder="e.g. stephenking@lorem.com"
          />
          <div>
            <label htmlFor="phone">Phone Number</label>
            <span ref={phoneRef} className="hidden text-xs text-Strawberryred">
              This field is required
            </span>
          </div>
          <input
            type="text"
            name="phone"
            id="phone"
            value={infoState.phone}
            onChange={(e) =>
              infoDispatch({
                type: "CHANGE_PHONE_NUMBER",
                value: e.target.value,
                target: e.target,
              })
            }
            placeholder="e.g. +1 234 567 890"
          />
        </form>
      </div>
      <div
        className={`flex flex-col items-center justify-between md:flex-row-reverse`}
      >
        <Link
          to={"/selectPlan"}
          onSubmit={validation}
          className="rounded-lg bg-Marineblue py-2 px-5 font-medium text-white"
          // style={{
          //   backgroundColor: "gray",
          //   cursor: "not-allowed",
          //   pointerEvents: "none",
          // }}
          disabled={false}
        >
          Next step
        </Link>
      </div>
    </div>
  );
}

export default PersonalInfo;
