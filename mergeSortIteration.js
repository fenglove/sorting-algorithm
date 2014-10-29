function merge(left, right) {
  var arr = []

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  return arr.concat(left, right)
}

function mergeSortIteration(arr) {
  var len = arr.length

  if(len > 1) {
    var work = []

    for(var i = 0; i < len; i++) {
      work.push([arr[i]])
    }
    work.push([])

    for(var j = len; j > 1; j = Math.ceil(j/2)) {
      for(var k = 0, l = 0; l < j; k++, l += 2) {
        work[k] = merge(work[l], work[l+1])
      }
      work[k] = []
    }
    return work[0]
  } else {
    return arr
  }
}