function sum(array) {
    let result = 0;

    if (array.length > 0) {
        for (let index = 0; index < array.length; index++) {
            result += array[index];
        }
    }

    return result;
}

console.log(sum([1, 2, 3]));
console.log(sum([10, 8, 12, 5]));
console.log(sum([]));

