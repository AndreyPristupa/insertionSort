const fc = require('fast-check');
const insertionSort = require('./insertionSort');
const t = require('@jest/globals');

let isSorted = arr => arr.every((val, i, array) =>  i === 0 || val >= array[i - 1]); 

t.describe('Insertion Sort - Property-based tests', () => {
    t.it('should sort any array of numbers in ascending order', () => {
        fc.assert(
            fc.property(
                fc.array(fc.integer()), // Random Array<Integer> generator
                arr => {
                    const sortedArray = insertionSort([...arr]);
                    return isSorted(sortedArray);
                }
            )
        );
    });
});

