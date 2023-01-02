import React from "react";

const Button = ({ children, cta }) => {
  return (
    <div
      className={`border-2 border-primary ${
        cta ? "font-semibold bg-primary text-white" : 'text-primary'
      } py-3 px-16 rounded-lg text-xl inline-block`}
    >
      {children}
    </div>
  );
};

export default Button;
