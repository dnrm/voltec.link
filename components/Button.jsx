import React from "react";

const Button = ({ children, filled }) => {
  return (
    <div
      className={`border-2 border-primary ${
        filled ? "bg-primary" : "bg-[#84c3dc]"
      } inline-block py-3 px-16 rounded-lg text-white tracking-tight text-xl`}
    >
      {children}
    </div>
  );
};

export default Button;
