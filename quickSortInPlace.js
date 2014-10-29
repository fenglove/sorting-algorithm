function partition(arr, start, end) {
  var index = start
  var pivot = arr[start]
  var tmp

  arr[start] = arr[end]
  arr[end] = pivot
  for(var i = start; i < end; i++) {
    if(arr[i] < pivot) {
      tmp = arr[index]
      arr[index] = arr[i]
      arr[i] = tmp
      index++
    }
  }
  arr[end] = arr[index]
  arr[index] = pivot
  return index
}

function quickSortInPlace(arr, start, end) {
  var left = start || 0
  var right = typeof end == 'number' ? end : arr.length - 1
  if(right > left) {
    var index = partition(arr, left, right)
    quickSort(arr, left, index - 1)
    quickSort(arr, index + 1, right)
  }
  return arr
}