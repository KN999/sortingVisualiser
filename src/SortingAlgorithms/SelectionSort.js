const SelectionSort = (array) => {
    let animation = [];
    let size = array.length;
    for(let i=0; i<size-1; i++) {
        let minIdx = i;
        for(let j=i+1; j<size; j++) {
            animation.push([minIdx,j]);
            animation.push([minIdx,j]);
            animation.push([minIdx, minIdx]);
            if(array[minIdx] > array[j]) {
                minIdx = j;
            }
        }
        animation.push([minIdx, minIdx]);
        animation.push([minIdx, minIdx]);
        animation.push([minIdx,i]);
        let temp = array[minIdx];
        array[minIdx] = array[i];
        array[i] = temp;
    }

    return animation;
}

export { SelectionSort };