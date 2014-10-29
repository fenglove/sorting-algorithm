Array.prototype.mergeSort = function() {
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

  var len = this.length

  if(len > 1) {
    var index = Math.floor(len/2)
    var left = this.slice(0, index)
    var right = this.slice(index)
    return merge(left.mergeSort(), right.mergeSort())
  } else {
    return this
  }
}