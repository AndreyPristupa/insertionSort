/**
 * @description Insertion Sort implementation
 * @param arr <Array>
 * @returns <Array>
 */
module.exports = function insertionSort(arr) {
    console.log(`Original Array: ${arr}`);
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than current, to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    console.log(`Sorted Array: ${arr}`);
    return arr;
}

