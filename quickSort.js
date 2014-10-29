Array.prototype.quickSort = function() {
  var len = this.length

  if(len > 1) {
    var pivot = this[0]
    var left = []
    var right = []
    for(var i = 1; i < len; i++) {
      if(this[i] < pivot) {
        left.push(this[i])
      } else {
        right.push(this[i])
      }
    }
    return left.quickSort().concat(pivot, right.quickSort())
  } else {
    return this
  }
}