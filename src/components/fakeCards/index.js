import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {[1,2,3,4].map((item, index) => {
        return (
          <>
            <h6 className="shimmer-card" key={index}>loading...</h6>
          </>
        );
      })}
    </div>
  );
};

export default Shimmer;
