const MergeSort2 = (array) => {
    if(array.length === 1) return array;
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

const MergeSort = (array, animation) => {
    return MergerSortUtil2(array, 0, array.length-1, animation);
}

const MergerSortUtil2 = (arr, low, high, animation) => {
    
    if((high-low)> 0) {
        let mid = Math.floor(low + (high-low)/2);
        
        MergerSortUtil2(arr, low, mid, animation);
        MergerSortUtil2(arr, mid+1, high, animation);
        
        let aux= [(high-low+1)];
        let i=low;
        let j=mid+1;
        let k=0;
        
        for(;i<=mid && j<=high; k++) {
            if(arr[i] < arr[j])
                aux[k] = arr[i++];
            else
                aux[k] = arr[j++];
        }
        
        while(i<=mid)
            aux[k++] = arr[i++];
        while(j<=high)
            aux[k++] = arr[j++];
            
        for(let i=low, k=0; i<=high; i++,k++) {
            arr[i] = aux[k];
        }
        
    }
    
    return arr;
    
}

export { MergeSort };