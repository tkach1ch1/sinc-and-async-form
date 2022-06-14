import React from "react";

function Spiner () {
  return (
    <div className="spinner-border d-flex flex-column" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spiner
