
function crazyCase(str) {
  let newStr= ''
  for (i=0;i<str.length;i++) {
    if (i % 2 ===0) {
    newStr = newStr + str[i].toLowerCase()
    } else {
    newStr = newStr + str[i].toUpperCase()
    }
  }
    return newStr
}

const nextCrazyCase = crazyCase('hello')
console.log(nextCrazyCase);

function ciEmailify(str) {

let newStr= ''
str = str.toLowerCase()
for (i=0; i<str.length; i++) {
  if (str[i] === " ") {
  newStr = newStr + '.'
  } else {
  newStr = newStr + str[i]
  }
  }
  return newStr + '@codeimmersives.com'
}

function exclaim(str) {
  let newStr= ''
  for (i=0;i<str.length;i++) {
    if (str[i]=== '?') {
    newStr = newStr + '!'
    } else if(str[i]=== '.') {
    newStr = newStr + '!'
    } else {
    newStr = newStr + str[i]
    }
  }
    return newStr;
}

function reverse(str) {
  newStr= ''
  for (i=1;i<=str.length;i++){
    if(str[i] !== ' ' ){
    newStr =  newStr +  str[str.length - i]
    }
} 
    return newStr;
  }


function crazyCase2ReturnOfCrazyCase(str) {
let newStr= ''
let counter = 0;
str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
  if (counter % 2 === 0) {
  newStr = newStr + str[i].toLowerCase()
  
  } else {
  newStr = newStr + str[i].toUpperCase()
  }
  if (str[i] !==  ' ') {
    counter++;
  }
  }
  return newStr
}

function titleCase(str) {
let newStr= ''
for (i=0;i<str.length;i++){
  if(i == 0){
    newStr = newStr + str[0].toUpperCase()
  } else{
  if (str[i-1] === ' ') {
  newStr = newStr + str[i].toUpperCase()}
  else {
  newStr = newStr + str[i].toLowerCase()
    }

    }
  }
    return newStr;
}


function onlyVowels(str) {
  let newStr= ''
  for (i=0;i<str.length;i++){
    if('aeiou'.includes(str[i]) || 'AEIOU'.includes(str[i])) {
      newStr = newStr + str[i]
  }
}
  return newStr;
}

function crazyCase3SonOfCrazyCase(str) {
  let newStr = '';
  let counter = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if(str[i] ===  ' ') {
      newStr = newStr + ' '
      counter++;
    }
    else if ('0123456789!@#$.,()'.includes(str[i])) {
      newStr = newStr + str[i]
      counter++;
    }
    else if(counter % 2 === 0) {
      newStr = newStr + str[i];
    }
    else {
      newStr = newStr + str[i].toUpperCase();
    }counter++
  }
  return newStr;
}




module.exports = {
  crazyCase,
  exclaim,
  ciEmailify,
  reverse,
  crazyCase2ReturnOfCrazyCase,
  titleCase,
  onlyVowels,
  crazyCase3SonOfCrazyCase
}