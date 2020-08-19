const BAR_MIN_HEIGHT = 30;
const BAR_MAX_HEIGHT = 700;

const GenerateArray = (bars, setNums) => {
  let newNums = [];
  for (let i = 0; i < bars; i++) {
    newNums.push(randomIntForInterval(BAR_MIN_HEIGHT, BAR_MAX_HEIGHT));
  }
  setNums(newNums);
};

const randomIntForInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { GenerateArray };
