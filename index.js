function mergeSort (array) {
    if (array.length <= 1) {
        return array;
    } else {
        const split = Math.floor(array.length/2);
        const left = mergeSort([...array.slice(0,split)]);
        const right = mergeSort([...array.slice(split)]);
        const result = [];
        let i = 0;
        let j = 0;
        while (i < left.length || j < right.length) {
            if (left[i] <= right[j] || right[j] == null) {
                result.push(left[i]);
                i += 1;
            } else {
                result.push(right[j]);
                j += 1;
            }
        }
        return result;
    }
}

console.log(mergeSort([5,4,1,2,3]));