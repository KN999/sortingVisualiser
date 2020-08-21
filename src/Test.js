import { GenerateRandomBar, randomIntForInterval } from "./GenerateRandom";

const Test = (algo) => {
  for (let i = 0; i < 100; i++) {
    let nums = [];
    let animation = [];
    GenerateRandomBar(randomIntForInterval(1, 1000), (array) => (nums = array));

    const Arr1 = nums.slice().sort((a, b) => a - b);
    const Arr2 = algo(nums);

    let flag = "true";

    if (Arr1.length === Arr2.length) {
      for (let i = 0; i < Arr1.length; i++) {
        
        if (Arr1[i] !== Arr2[i]) {
          console.log("Arr1 : ", Arr1);
          console.log("Arr2 : ", Arr2);
          flag = "false1";
        }
      }
    } else {
      flag = "false2";
      console.log("Arr1 : ", Arr1);
      console.log("Arr2 : ", Arr2);
    }

    console.log(flag);
  }
};

export { Test };
