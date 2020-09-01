const animation = []
const QuickSort =  (array) => {
    let size = array.length-1;
    QuickSortUtil(array, 0, size);
    console.log("-----******----",animation.length);
    return animation;
}

const partition = (array, low, high) => {

    let i = low-1
    let pivot = array[high];

    for(let j=low; j<=high-1; j++) {
        animation.push([j,high]);
        animation.push([j,high]);
        if(array[j] <= pivot) {
            i++;
            animation.push([j,i]);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        else {
            animation.push([high,high]);
        }
    }

    animation.push([low+1,high]);
    animation.push([low+1,high]);
    animation.push([low+1,high]);

    let temp = array[low+1];
    array[low+1] = array[high];
    array[high] = temp;

    return low+1;
   
}

const QuickSortUtil = (array, low, high) => {
    if(high <= low) return;

    const idx1 = partition(array, low, high);
    console.log("low : ",idx1," idx1 : ",idx1, " high : ",high);
    QuickSortUtil(array, low, idx1-1);
    QuickSortUtil(array, idx1+1, high);

}

export { QuickSort };