import React from "react";

const Spiner = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-100px)]">
      <span className="loading loading-bars loading-lg bg-teal-500"></span>
    </div>
  );
};

export default Spiner;
