function spinWords(words){ // takes a function with a parameter called words 
  const seperateWords = words.split(" ") //using the parameter words and changing into seperate words
  let output = ""; // defining an output with an empty string 
  
//   const splitWords = words.split("")  was from previous iteration//
  
  for (let i = 0; i < seperateWords.length; i++) { // a For Loop that is iterating over an array of words 
    console.log(seperateWords[i]); //consoling all the words in the previous array 
    const word = seperateWords[i] // declared and defined a new variable called word 
    let joinWord = "" // declared and defined a new variable named joinWord
    if(word.length >= 5){ //add and if statement to check if the word had five (5) or more characters in it
      console.log("this word has five or more characters! "+ word)  // consoling for "this word has five or more characters! "+ word
      const splitWord = word.split("") //spliting the variable word into seperate characters in a single word
      const reverseCharacters = splitWord.reverse() //reversing the order of the characters in that order
      joinWord = reverseCharacters.join("") // putting the word in reverse, back together
      output += joinWord; // putting the sentence back together with all words 
      console.log("this word is now reversed! "+ joinWord) // consoling for "this word has five or more characters! "+ word
    } else{ // else in a case where the word is less than 5 characters
      output += word; // putting the sentence back together with all words including words less than five characters
    }
//    
    output += " "; // using the output and adding a space after every word 
  } 
  output = output.slice(0,-1) // removes the last space since we added a space to each word in the previous line of code
//   console.log(joinWord)
  return output // returning the output 
  
}