import React from "react";

const Button = ({ children, cta }) => {
  return (
    <div
      className={`border-2 border-primary ${
        cta ? "font-semibold bg-primary text-white cursor-pointer text-center" : 'text-center text-primary hover:bg-primary hover:text-white transition-all duration-75 cursor-pointer'
      } py-3 px-16 rounded-lg text-xl inline-block`}
    >
      {children}
    </div>
  );
};

export default Button;
