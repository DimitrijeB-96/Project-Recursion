function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let middleArr = parseInt(arr.length / 2),
    leftArr = mergeSort(arr.slice(0, middleArr)),
    rightArr = mergeSort(arr.slice(middleArr)),
    i = 0,
    j = 0,
    result = [];

  while (i < leftArr.length && j < rightArr.length) {
    if (rightArr[j] > leftArr[i]) {
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(rightArr[j]);
      j++;
    }
  }
  while (i < leftArr.length) {
    result.push(leftArr[i]);
    i++;
  }
  while (j < rightArr.length) {
    result.push(rightArr[j]);
    j++;
  }

  return result;
}

console.log(mergeSort([5, 2, 3, 7, -1 , 0, 12, 4]));