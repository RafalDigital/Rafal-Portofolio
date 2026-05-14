import * as React from "react";
import "../../index.css"; // Pastikan path ke src/styles.css sudah benar

const Loading = (props) => {
  return (
    <div className="svg-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 100" // Ukuran kanvas virtual (rasio lebar)
        className="svg-drawing"
        {...props}
      >
        <text
          x="50%" 
          y="50%" 
          dominantBaseline="middle" 
          textAnchor="middle"
          className="text-animated font-extrabold font-zain"
        >
          LOADING ⏱
        </text>
      </svg>
    </div>
  );
};

export default Loading;