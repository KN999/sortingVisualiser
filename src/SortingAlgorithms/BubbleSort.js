const BubbleSort = (arr) => {
    let array = arr.slice();
    let animation = [];
    let size = array.length;
    for(let i=size-1; i>=0; i--) { 
        for(let j=0; j<i; j++) { 
            if(array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;

                animation.push([j,j+1])
                animation.push([j,j+1])
                animation.push([j,j+1])
            }
            else {
                animation.push([j,j+1])
                animation.push([j,j+1])
                animation.push([j,j])
            }
        }
        // animation.push({
        //     idx1 : size-i-1,
        //     idx2 : size-i-1,
        //     oper : 'final'
        // })
    }
    
    return animation;
}

export { BubbleSort };