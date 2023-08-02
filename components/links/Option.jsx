import React from "react";

const Option = ({ icon, label, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} text-sm md:text-base flex text-left justify-center items-center gap-2 border-2 rounded-xl text-neutral-400 border-[#e1e1e1] dark:border-neutral-400 p-3 bg-neutral-50 hover:bg-neutral-100`}
    >
      {icon}
      {label}
    </button>
  );
};

export default Option;
