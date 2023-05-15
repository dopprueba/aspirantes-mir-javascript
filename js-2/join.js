function join(array) {
    
    let result = "";

    for (let index = 0; index < array.length; index++) {
        result += array[index] + " ";    
    }

    result = result.trimEnd();

    return result;
}

console.log(join(['a']));
console.log(join(['a', 'b', 'c']));
console.log(join([]));
