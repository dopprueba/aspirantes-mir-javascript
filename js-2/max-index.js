function maxIndex(array) {

    if (array.length === 0) {
        return -1;
    }
    
    if (array.length > 0) {
        let result = 0;
        let nroMax = array[0];
        let indexMax = 0;
        
        for (let index = 0; index < array.length; index++) {
            if (array[index] > nroMax) {
                nroMax = array[index];
                indexMax = index;
            }
        }
    
        return indexMax;
    }

}

console.log(maxIndex([1, 3, 2]));
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]));
console.log(maxIndex([]));
