const numbers = [9, 8, 3, 5, 6, 2, 7, 9];

// Expected result: 8

function findSecondMax(arr) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1
            max1 = arr[i]
        } else if (arr[i] > max2 && arr[i] !== max1) {
            max2 = arr[i]
        }
    }
    return max2
}

console.log(`second max ${findSecondMax(numbers)}`)

const classA = [15, 2, 8, 10];
const classB = [8, 11, 2, 5, 9];
// Step 1 & 2: [15, 2, 8, 10, 11, 5, 9]
// Step 3: Quick Sort -> [2, 5, 8, 9, 10, 11, 15]

function quickSort(arr) {
    let midIndex = Math.floor(arr.length / 2)
    let pivot = arr[midIndex]
    let leftArr = []
    let rightArr = []
    if (arr.length <= 1) return arr;
    for (let i = 0; i < arr.length; i++) {
        if (i === midIndex) continue;
        if (arr[i] < pivot) {
            leftArr.push(arr[i])
        } else rightArr.push(arr[i])
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

function mergeArray(classA, classB) {
    let merged = [...classA, ...classB];
    const uniqueMap = new Map();
    for (let item of merged) {
        uniqueMap.set(item, true);
    }
    return quickSort([...uniqueMap.keys()]);
}

console.log(mergeArray(classA, classB));
