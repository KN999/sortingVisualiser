import React, { useState, useEffect } from "react";
import { GenerateArray } from './GenerateRandom'
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
    GenerateArray(MAX_BAR, setNums);
  },[])

  return (
    <div>
      <div>
        <button onClick={() => GenerateArray(MAX_BAR, setNums)}>Shuffle</button>
        <button onClick={() => MergeSort()}>Merge Sort</button>
        <button onClick={() => BubbleSort()}>Bubble Sort</button>
        <button onClick={() => QuickSort()}>Quick Sort</button>
        <button onClick={() => InsertionSort()}>Insertion Sort</button>
        <button onClick={() => SelectionSort()}>Selection Sort</button>
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