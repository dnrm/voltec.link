import React from "react";

const Message = ({ color, icon, label }) => {
  return (
    <div
      className={`justify-center inline-block items-center gap-2 border-2 rounded-xl text-yellow-500 border-yellow-400 dark:border-yellow-400 p-3 bg-yellow-100`}
    >
      <div className="flex gap-2">
        {icon}
        <p>{label}</p>
      </div>
    </div>
  );
};

export default Message;
