import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {[1,2,3,4].map((item, index) => {
        return (
          <>
            <div className="shimmer-card" key={index}></div>
          </>
        );
      })}
    </div>
  );
};

export default Shimmer;
