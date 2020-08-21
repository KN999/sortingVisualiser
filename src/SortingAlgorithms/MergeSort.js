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

const MergeSort = (array) => {
    return MergerSortUtil2(array, 0, array.length-1);
}

const MergerSortUtil2 = (arr, low, high) => {
    let newAnimation = {
        compare : [],
        swap : []
    };
    
    if((high-low)> 0) {
        let mid = Math.floor(low + (high-low)/2);
        
        MergerSortUtil2(arr, low, mid);
        MergerSortUtil2(arr, mid+1, high);
        
        let aux= [(high-low+1)];
        let i=low;
        let j=mid+1;
        let k=0;
        let l=low;
        
        for(;i<=mid && j<=high; k++,l++) {
            newAnimation.compare.push([i,j]);
            if(arr[i] < arr[j]) {
                aux[k] = arr[i++];
                newAnimation.swap.push([l,i]);
            }
            else {
                aux[k] = arr[j++];
                newAnimation.swap.push([l,j]);
            }
        }
        
        while(i<=mid) {
            newAnimation.compare.push([i,i]);
            newAnimation.swap.push([l++,i]);
            aux[k++] = arr[i++];
        }
            
        while(j<=high) {
            newAnimation.compare.push([j,j]);
            newAnimation.swap.push([l++,j]);
            aux[k++] = arr[j++];
        }
            
        for(let i=low, k=0; i<=high; i++,k++) {
            arr[i] = aux[k];
        }
    }
    
    return newAnimation;
    
}

export { MergeSort };