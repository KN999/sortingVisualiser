const InsertionSort = (array) => {
    let size = array.length;
    let animation = [];

    for(let i=1; i<size; i++) {

        for(let j=i; j > 0; j--) {

            if(array[j-1] > array[j]) {
                animation.push([j,j-1]);
                animation.push([j,j-1]);
                animation.push([j-1,j]);
                let temp = array[j-1];
                array[j-1] = array[j];
                array[j] = temp;
            }
            else {
                animation.push([j,j-1]);
                animation.push([j,j-1]);
                animation.push([j,j]);
                break;
            }
           
        }
    }

    return animation;
}

export { InsertionSort };