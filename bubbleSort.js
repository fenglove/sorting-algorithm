Array.prototype.bubbleSort = function() {
  var len = this.length
  var tmp

  for(var i = 1; i < len; i++) {
    for(var j = i; j > 0; j--) {
      if(this[j] < this[j-1]) {
        tmp = this[j]
        this[j] = this[j-1]
        this[j-1] = tmp
      } else {
        break
      }
    }
  }
  return this
}