// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
let words = ["cat","bt","hat","tree", "ta"];
let  chars = "atach"
// Output: 6
function countCharInWords ( words, chars) {
 let charsSplited = wordArray(chars);
 let countResult = 0;
 for (let i=0; i < words.length; i++){
     if (!isNaN(checkword(words[i], charsSplited)))
      countResult = countResult + checkword(words[i], charsSplited);
     
 }  return countResult;

}
 function wordArray (word){
     return word.split("");
 }
 function checkChar (char, arryStr){
     for (let i=0; i<arryStr.length; i++){
       if (char == arryStr[i]){
           return true
        }
    }
 return false
}
function checkword (word, arryStr){
    let count = 0;
   for (let i=0; i< word.length; i++){
       if(checkChar(word[i], arryStr)){
        count +=1;
       } else {
           return false
       }
   }
  return count;
}
function checkNumberOrNot (numInput){
    if(isNaN(numInput)){
        return `${numInput} is not a number`
    }
    return `${numInput} is a number`
}

function lengthWord (word){
    let count = 0;
    let arrayWord = word.split("");
    for (let i=0; i<arrayWord.length; i++){
        count +=1;
    }
    return count
}

 console.log("testttt", countCharInWords(words, chars))
 console.log("hhhhhhh", checkword("heb", ["h","e", "l","o" ]))
 console.log("testttchhhehe", checkChar('c' , ["h","e"  ]))
 console.log("length word", lengthWord("hello"))
 console.log("testttchhhehe", checkNumberOrNot(3))