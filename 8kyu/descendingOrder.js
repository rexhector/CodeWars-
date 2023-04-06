// Code Wars ! Descending order 

function descendingOrder(num){
  let numStr = num.toString(); // Convert the number to a string
  let sortedStr = numStr.split('').sort((a, b) => b - a).join(''); // Sort the digits in descending order
  let sortedNum = parseInt(sortedStr); // Convert the sorted string back to a number
  return sortedNum;
}
