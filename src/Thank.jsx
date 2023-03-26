import React from "react";

function Thank() {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-3">
      <div>
        <img src="/icon-thank-you.svg" alt="" />
      </div>
      <h1 className="text-3xl text-Marineblue">Thank you!</h1>
      <p className="text-md max-w-md text-center text-Coolgray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. if you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default Thank;
