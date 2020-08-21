import React, { useState, useEffect } from "react";
import { GenerateRandomBar } from './GenerateRandom'
import Navbar from './Navbar'
import "./SortingVisualiser.css";

const MAX_BAR = 325;

const SortingVisualiser = () => {
  const [nums, setNums] = useState([]);

  useEffect(() => {
    GenerateRandomBar(MAX_BAR, setNums);
  },[])

  return (
    <div>
      <Navbar nums={nums} setNums={setNums}/>
      <div className="array-bar">
        {nums.map((value, key) => (
          <div className="bar" key={key} style={{ height: `${value}px` }}></div>
        ))}
      </div>
    </div>
  );
}

export default SortingVisualiser;