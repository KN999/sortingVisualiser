import React, { useState, useEffect } from "react";
import { GenerateRandomBar, randomIntForInterval } from './GenerateRandom'
import { MergeSort } from './SortingAlgorithms/MergeSort'
import { BubbleSort } from './SortingAlgorithms/BubbleSort'
import { QuickSort } from './SortingAlgorithms/QuickSort'
import { InsertionSort } from './SortingAlgorithms/InsertionSort'
import { SelectionSort } from './SortingAlgorithms/SelectionSort'
import "./SortingVisualiser.css";

const MAX_BAR = 325;

const SortingVisualiser = () => {
  const [nums, setNums] = useState([]);

  useEffect(() => {
    GenerateRandomBar(MAX_BAR, setNums);
  },[])

  const Test = (TestSort) => {
    for (let i = 0; i < 100; i++) {
      GenerateRandomBar(randomIntForInterval(1, 1000), setNums);
      const Arr1 = nums.slice().sort((a, b) => a - b);
      const Arr2 = TestSort(nums);

      let flag = true;

      if (Arr1.length === Arr2.length) {
        for (let i = 0; i < Arr1.length; i++) {
          if (Arr1[i] !== Arr2[i]) {
            flag = false;
          }
        }
      } else flag = false;

      console.log(flag);
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => GenerateRandomBar(MAX_BAR, setNums)}>Shuffle</button>
        <button onClick={() => MergeSort}>Merge Sort</button>
        <button onClick={() => BubbleSort()}>Bubble Sort</button>
        <button onClick={() => QuickSort()}>Quick Sort</button>
        <button onClick={() => InsertionSort()}>Insertion Sort</button>
        <button onClick={() => SelectionSort()}>Selection Sort</button>
        <button onClick={() => Test(MergeSort)}>Test Sort</button>
      </div>
      <div className="array-bar">
        {nums.map((value, key) => (
          <div className="bar" key={key} style={{ height: `${value}px` }}></div>
        ))}
      </div>
    </div>
  );
}

export default SortingVisualiser;