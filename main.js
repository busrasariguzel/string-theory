
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
    return newStr
}

function reverse() {

}

function crazyCase2ReturnOfCrazyCase() {
}

function titleCase() {
}

function onlyVowels() {
}

function crazyCase3SonOfCrazyCase() {
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