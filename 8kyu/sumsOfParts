function partsSums(ls) {
  let result = [0]
  for(const x in ls.reverse()){
    result.push(ls[x]+result[x]);
  }
  return result.reverse()
}