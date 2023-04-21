multiplicationTable = function(size) {
  let x = []
  for(let i = 1; i<=size; i++){
    let y = []
    for(let o = 1; o<=size; o++){
      y.push(i*o)
    }
    x.push(y)
  }
  return x
}