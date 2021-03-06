import React from 'react';
import { MergeSort } from './SortingAlgorithms/MergeSort'
import { BubbleSort } from './SortingAlgorithms/BubbleSort'
import { QuickSort } from './SortingAlgorithms/QuickSort'
import { InsertionSort } from './SortingAlgorithms/InsertionSort'
import { SelectionSort } from './SortingAlgorithms/SelectionSort'
import { GenerateRandomBar } from './GenerateRandom'
import './Navbar.css'
import { Test } from './Test'

const MAX_BAR = 225;

const Navbar = (props) => {
  return (
    <div>
      <button onClick={() => GenerateRandomBar(MAX_BAR, props.setNums)}>
        Shuffle
      </button>
      <button onClick={() => props.animation(MergeSort(props.nums))}>Merge Sort</button>
      <button onClick={() => props.animation(BubbleSort(props.nums))}>Bubble Sort</button>
      <button onClick={() => props.animation(QuickSort(props.nums))}>Quick Sort</button>
      <button onClick={() => props.animation(InsertionSort(props.nums))}>Insertion Sort</button>
      <button onClick={() => props.animation(SelectionSort(props.nums))}>Selection Sort</button>
      <button onClick={() => Test(QuickSort)}>Test Sort</button>
    </div>
  );
};

export default Navbar;