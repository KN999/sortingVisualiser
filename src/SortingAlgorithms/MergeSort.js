const MergeSort = (array) => {
    if(array.length == 1) return array;
    const mid = Math.floor(array.length / 2);
    const leftArray = MergeSort(array.slice(0, mid));
    const rightArray = MergeSort(array.slice(mid));
    const sortedArray = [];
    let i=0;
    let j=0;

    while(i<leftArray.length && j<rightArray.length) {
        if(leftArray[i] < rightArray[j]) sortedArray.push(leftArray[i++]);
        else sortedArray.push(rightArray[j++]);
    }

    while(i<leftArray.length) sortedArray.push(leftArray[i++]);
    while(j<rightArray.length) sortedArray.push(rightArray[j++]);

    return sortedArray;

}

export { MergeSort };