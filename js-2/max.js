function max(array) {

    if (array.length === 0) {
        return
    }
    
    if (array.length > 0) {
        let result = 0;
        let nroMax = array[0];
        
        for (let index = 0; index < array.length; index++) {
            if (array[index] > nroMax) {
                nroMax = array[index];
            }
        }
    
        return nroMax;
    }
}

console.log(max([1, 3, 2]));
console.log(max([10, 9, 8, 7, 6, 5, 4]));
console.log(max([]));
