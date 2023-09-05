import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-indigo-600 text-white py-2 my-10 rounded hover: bg-indigo-700 px-6 "
    >
      {children}
    </button>
  );
};

export default Button;
