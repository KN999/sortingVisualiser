import React, { useState, useEffect } from "react";
import { GenerateRandomBar } from './GenerateRandom'
import Navbar from './Navbar'
import "./SortingVisualiser.css";

const MAX_BAR = 225;

const SortingVisualiser = () => {
  const [nums, setNums] = useState([]);

  useEffect(() => {
    GenerateRandomBar(MAX_BAR, setNums);
  },[])

  const Animate = (animation) => {
    for(let i=0; i<animation.length; i++) {
      const arrayBars = document.getElementsByClassName('bar');
      const isColorChange = i%3 !== 2;
      if(isColorChange) {
        const [barOneIdx, barTwoIdx] = animation[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i%3 === 0 ? 'red' : 'turquoise';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 3);
      } else {
        setTimeout(() => {
          const[barOneIdx, barTwoIdx] = animation[i];
          const temp = arrayBars[barOneIdx].style.height;
          arrayBars[barOneIdx].style.height = arrayBars[barTwoIdx].style.height;
          arrayBars[barTwoIdx].style.height = temp;
        }, i*3)
      }
    }
  }

  return (
    <div>
      <Navbar nums={nums} setNums={setNums} animation={Animate}/>
      <div className="array-bar">
        {nums.map((value, key) => (
          <div className="bar" key={key} style={{ height: `${value}px` }}></div>
        ))}
      </div>
    </div>
  );
}

export default SortingVisualiser;