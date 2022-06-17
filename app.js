//////// Find the smallest integer in the array


/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/

function findSmallestInt(args) {
  let smallest = args[0]
  for (let i = 0; i < args.length; i++) {
    let currentNum = args[i]
    if (currentNum < smallest) {
      smallest = currentNum
    }
  }
  return smallest

  // return Math.min(...arg) The best Practices
}

findSmallestInt([78, 56, 232, 12, 8])


// Personalized Message

/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'

*/

function greet(name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest'
}


// Calculate average

/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function find_average(array) {
  // your code here
  if (array.length === 0) {
    return 0
  }
  let total = 0
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i]
    total += currentNum
  }
  return total / array.length
}

find_average([])


// ============ Counting sheep...

function countSheeps(arrayOfSheep) {
  let count = 0
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      count++
    }
  }
  return count
}

// function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.filter(Boolean).length  
// }

let array1 = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]

countSheeps(array1)


// Beginner Series #1 School Paperwork

function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}


// ==== Set Alarm

function setAlarm(employed, vacation) {
  return employed && !vacation ? true : false
}


// =============== Number of People in the Bus

function number(busStops) {
  const result = busStops.reduce((total, [peopleIn, peopleOut]) => {
    return total += peopleIn - peopleOut
  }, 0)
  return result
}

number([[10, 0], [3, 5], [5, 8]])



// =======================Summing a number's digits

function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split('')
    .reduce((acc, num) => +acc + +num, 0)
}

sumDigits(10)


// ==================  Find the middle element

function gimme(triplet) {
  const sorted = triplet.slice().filter((a, b) => a - b)[1]

  return triplet.indexOf(sorted)

}

gimme([5, 10, 14])



// ==================  Disemvowel Trolls

function disemvowel(str) {
  const vowelRegex = /[aeiou]/gi
  return str.split(vowelRegex).join('')
  // a more cleaner way would be
  // return str.replace(/[aeiou]/gi, '')

}

disemvowel('This website is for losers LOL!')

// ========== Factorial

function factorial(n) {
  if (n < 0 || n > 12)
    throw new RangeError()
  if (n === 0) return 1

  let final = n
  for (let i = 1; i < n; i++) {
    final *= i
  }

  return final
}
factorial(2)


// ============ The museum of incredible dull things
// function removeSmallest(numbers) {

//   const min = Math.min(...numbers)
//   return numbers.filter((num, index) => index !== num.indexOf(min))
// }

// console.log(removeSmallest([2, 2, 1, 2, 1]))



// ============ Vowel Count

function getCount(str) {
  let vowelsCount = 0;
  const regex = /[aeiou]/ig
  str.split('').filter(letter => letter.match(regex) ? vowelsCount++ : vowelsCount)

  return vowelsCount

}

getCount('abracadabra')

// ======== Square Every Digit

function squareDigits(num) {

  const digit = num.toString().split('')
  const result = digit.map(number => {
    return number * number
  })
  return +result.join('')
}

squareDigits(9119)


// ============= Jaden Casing Strings
String.prototype.toJadenCase = function () {
  const words = this.split(' ')
  const upper = words.map(letter => {
    // console.log(letter[0][i])
    //     console.log(letter[i])
    return letter.charAt(0).toUpperCase() + letter.slice(1)
  })
  return upper.join(' ')

  // 15 april 2022
  // const regex = /\s/gm
  // const stringArr = this.split(' ')
  // return stringArr.map(letter => letter[0].toUpperCase() + letter.slice(1)).join(' ')
}


// ====================== Get Divisor
function getDivisorsCnt(n) {
  // todo
  let count = 0
  const randomNum = 100
  for (let i = 1; i <= n; i++) {
    // console.log(i % n)
    if (n % i === 0) {
      count++
    }
  }
  return count
}

getDivisorsCnt(4)


// ============ Remove anchor from URL

function removeUrlAnchor(url) {
  // TODO: complete
  const regex = /#+\w+/g
  return url.replace(regex, '')
}

removeUrlAnchor('www.codewars.com#about')

// ========= The Coupon Code

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate) ? true : false

}
checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')

// ====== Check the exam
function checkExam(array1, array2) {
  // let finalResult = 0
  // for (let i = 0; i < array1.length; i++) {
  //   if (array1[i] === '' || array2[i] === '') {
  //     continue
  //   }
  //   if (array1[i] === array2[i]) {
  //     finalResult += 4
  //   } else if (array1[i] !== array2[i]) {
  //     finalResult -= 1
  //   }
  // }

  // return finalResult < 0 ? 0 : finalResult
  let result = array2.reduce((total, answer, index) => {
    // console.log(total)
    if (answer === array1[index]) return total += 4
    else if (answer == 0) return total += 0
    else return total -= 1
  }, 0)
  return result < 0 ? 0 : result
}


checkExam(["a", "a", "c", "b"], ["a", "a", "b", "b"])


// =============== Descending Order

function descendingOrder(n) {
  let result = n.toString().split('')
  const final = result.map(number => {
    return +number
  })

  return +final.sort((a, b) => a - b).reverse().join('')
}

descendingOrder(42145)


// ============== List Filtering

function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(elem => typeof elem !== 'string')
}

// console.log(filter_list([1, 2, 'a', 'b']))

// ============= Double Char

const doubleChar = (str) => str.split('').map(letter => letter + letter).join('')

// =========Reverse words
const reverseWords = (str) => {
  const newArr = []
  const words = str.split('').reverse(' ').join('')
  const test = words.split(' ')
  for (let i = test.length - 1; i >= 0; i--) {
    newArr.push(test[i])
  }

  return newArr.join(' ')
  // return str.split('').reverse().join('').split(' ').reverse().join(' ')
}


// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))

// ==== Categorize New Member

const openOrSenior = (...data) => {
  let result = []
  data.map(array => {
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] >= 55 && array[i][1] > 7) {
        result.push('Senior')
      } else {
        result.push('Open')
      }
    }
  })

  return result


  // Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  // return data.map(([age, cap]) => age >= 55 && cap > 7 ? 'Senior' : 'Open')
}

openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])


// =========Regex validate PIN code

function validatePIN(pin) {
  //return true or false
  // const regex = /\d{4}|\d{6}/gm
  // const regexSpecial = /:|_|-|\D/
  // // console.log(pin.match(regex))

  // if (pin.length === 4 || pin.length === 6) {
  //   if (/^[a-z]|\.|\-/gi.test(pin) || pin.match(regexSpecial)) {
  //     console.log('enter')
  //     return false
  //   }
  //   console.log('2')
  //   return true
  // } else return false

  return /^(\d{4}|\d{6})$/.test(pin)

}

validatePIN("123:")


// ====Shortest Word

function findShort(s) {
  let newArr = []
  const word = s.split(' ').map(x => newArr.push(x.length))
  const min = Math.min(...newArr)
  return min
}

findShort("bitcoin take over the world maybe who knows perhaps")


// =========== Isograms

function isIsogram(str) {
  if (str === '') return true
  let newArr = []
  let result = []
  str.toLowerCase().split('')
    .map((x, index) => {
      // console.log(newArr.includes(x), index)
      if (newArr.includes(x)) {
        result.push(false)
      } else {
        result.push(true)
        newArr.push(x)
      }
    }
    )
  // console.log(result)
  return result.includes(false) ? false : true
}

isIsogram("")



// Two to One

function longest(s1, s2) {
  // your code
  const newConcat = s1.concat(s2)
  const test = [...new Set(newConcat)]
  // we have to convert to an array to sorted after, because set return an object
  return test.sort().join('')

}

longest("aretheyhere", "yestheyarehere")

// aehrsty


// ========== A Needle in the Haystack
function findNeedle(haystack) {
  // your code here
  const index = haystack.indexOf('needle')
  return `found the needle at position ${index}`
}

findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false])


// ======== Ones and Zeros
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)

}

binaryArrayToNumber([0, 0, 0, 1])

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11


// ======= Who likes it?

function likes(names) {

  if (names.length == 0) {
    return 'no one likes this'
  } else if (names.length == 1) {
    return `${names} likes this`
  }
  else if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`
  }
  else if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  else if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }

}

likes(['Jacob', 'Lero', 'gustavo', 'guilherme'])

// ============== Find the unique number

function findUniq(arr) {

  return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num))
  // Last index of here show the last index found in a number, for example, the index of 0 here is 2. So when comparing if
  // arr.indexOf(num) is equal to the lastindexOf(num) we are checking to see if is the same value, because if is not that means the value isn't unique
}
findUniq([1, 0, 0])  // result should be 1

// ======================= Persistent Bugger
function persistence(num) {
  //code me
  let count = 0
  num = num.toString()

  while (num.length > 1) {
    // 1)num.split('') splits our string variable 'num' into an array of strings
    // 2).map(Number) iterates over each string in the array and, utilizing the global
    //    Number object, converts each instance into an integer
    //    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    // 3).reduce applies our accumulator and value against the function, reducing the array to a
    //    single number (EX: accum (param a) * value in array (param b)
    //    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    // 4).toString() finally converts it back to a string
    count++
    num = num.split('').map(Number).reduce((a, b) => a * b).toString()
    // console.log(num)
  }
  //return the number of times our loop ran
  return count
}

persistence(39)


// ======= Basic Mathematical Operations

function basicOp(operation, value1, value2) {
  // Code
  switch (operation) {
    case '+':
      return value1 + value2

    case '-':
      return value1 - value2

    case '*':
      return value1 * value2

    case '/':
      return value1 / value2


  }
}

basicOp('+', 4, 7)

// ======== Simple multiplication
function simpleMultiplication(number) {
  if (number % 2 == 0) {
    return number * 8
  } else {
    return number * 9
  }
}
simpleMultiplication(1)

// ==========Get the Middle Character
function getMiddle(s) {
  const middle = Math.floor((s.length - 1) / 2)
  if (s.length % 2 == 0) {
    return s.slice(middle, middle + 2)
  } else {
    return s[middle]
  }
}

getMiddle("A")


// ======== Invert values
function invert(array) {
  return array.map(num => -num)
}

invert([1, 2, 3, 4, 5])


// ============ Array.diff

function arrayDiff(a, b) {
  // return a.filter((x, index) => {
  //   return x !== b[index]
  // })
  if (a.length <= 0) return []
  const array = a.concat(b)
  return array.filter(num => !a.includes(num) || !b.includes(num))

}

arrayDiff([], [1, 2])
// should return  [1]


// ======== Filter out the geese

function gooseFilter(birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(bird => !geese.includes(bird))
};

gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
)// ,["Mallard", "Hook Bill", "Crested", "Blue Swedish"])


// =========== Mexican Wave
function wave(str) {
  // Code here
  let result = []
  str.split('').forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1))
    }
  })
  return result
}

wave("code wars")

// ================ Count characters in your string

function count(string) {
  const count = {}
  string.split('').forEach(letter => {
    if (count[letter]) {
      count[letter]++
    } else {
      count[letter] = 1
    }
  })
  return count
}

count("daabdcdd")

// === Highest and Lowest
function highAndLow(numbers) {
  // console.log(numbers.split(' '))
  const arr = numbers.split(' ')
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  return `${max} ${min}`

}
highAndLow("1 2 -3 4 5")

// ===========Grasshopper - Summation
var summation = function (num) {
  // Code here
  let count = 0
  for (let i = 0; i <= num; i++) {
    count += i
  }
  return count
}

summation(8) //, 36

// Beginner - Lost Without a Map
function maps(x) {
  return x.map(n => n * 2)
}

maps([1, 2, 3]) //, [2, 4, 6])

// =========== Break camelCase

function solution(string) {
  const regex = /([A-Z])/g
  // let result = ''
  // let result2 = ''
  // let final = ''
  // string.split('').map((letter, idx) => {
  //   // console.log(result)
  //   if (result.length !== 0 && regex.test(letter)) {
  //     result2 = ' ' + string.slice(idx)
  //     final = result.replace('Testing', result2)

  //   }
  //   if (regex.test(letter) && result.length === 0) {
  //     // console.log(string.substring(string.charAt(idx)))
  //     result = string.slice(0, idx) + ' ' + string.slice(idx)
  //     // console.log(result)
  //     // string.charAt(idx).concat(' ')
  //   }
  // })

  // console.log(final)
  // return final
  return string.replace(regex, ' $1')
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n

}

solution('cameCase')

// ===The highest profit wins!

function minMax(arr) {
  const min = Math.min(...arr)
  const max = Math.max(...arr)

  return [min, max]; // fix me!
}


// ==== String repeat

function repeatStr(n, s) {
  let result = s
  for (let i = 1; i < n; i++) {
    result += s
  }
  return result
}


// Convert string to camel case
function toCamelCase(str) {
  const regex = /[-_]\w/g
  return str.replace(regex, (char) => char.charAt(1).toUpperCase())
  // let copy = str.slice()
  // console.log(copy)
  // str.split('').map((char, idx) => {
  //   if (regex.test(char)) {
  //     copy = str.charAt(idx + 1).toUpperCase()
  //     copy = str.replace(regex, '')
  //     console.log('true')
  //   }
  // })
  // return copy
}

toCamelCase("the_stealth_warrior")

// Reversed sequence

const reverseSeq = n => {
  let result = []
  for (let i = n; i > 0; i--) {
    result.push(i)
  }
  return result
}


function arrayDiff(a, b) {
  const array = a.concat(b)
  if (a.length === 0) return []
  return array.filter(num => !a.includes(num) || !b.includes(num))
}

arrayDiff([1, 2], [1])

function printerError(s) {
  // your code
  const rightRegex = /[a-m]/
  // const regex = /[nopqrstuvwxyz]/
  const regex = /[nopqrstuvwxyz]/
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (regex.test(s[i]))
      count++
  }
  return `${count}/${s.length}`
}

printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")


// ==== Abbreviate a Two Word Name
function abbrevName(name) {
  const regex = /\s\w/gm
  let result = ''
  const first = name.charAt(0).toUpperCase()
  const second = String(name.match(regex)).replace(' ', '').toUpperCase()
  return `${first}.${second}`
}




// ====Parse nice int from char problem

function getAge(inputString) {
  // return the girl's correct age as an integer. Happy coding :) 
  return +inputString.charAt(0)
}


function greet(language) {
  const database = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }
  return database[language] === undefined ? `${database['english']}` : database[language]
}

greet('IP_ADDRESS_INVALID')

// === All Star Code Challenge #18

function strCount(str, letter) {
  //code here
  let count = 0
  str.split('').map(c => {
    if (c === letter) {
      count++
    }
  })
  return count
}

// ==All Star Code Challenge #2
function findAverage(allStars) {
  //code here
  return allStars.reduce((total, n) => total += n, 0) / allStars.length
}

findAverage([17, 16, 16, 16, 16, 15, 17, 17, 15, 5, 17, 17, 16])

// Sum Numbers
function sum(numbers) {
  return numbers.reduce((total, n) => total += n, 0)

}

// ====== Grasshopper - Check for factor

function checkForFactor(base, factor) {
  return base % factor === 0 ? true : false
}

// ==== Adding Big Numbers


// THIS ONE IS NOT COMPLETE YET
function add(a, b) {
  let result = [parseFloat(a), parseFloat(b)]
  console.log(result)
  return String(result.reduce((total, n) => total + n, 0))
}


// ======= Counting Duplicates


function duplicateCount(text) {
  //...
  let count = 0
  const copy = []
  text.toLowerCase().split('').map(letter => {
    if (!copy.includes(letter)) {
      copy.push(letter)
      if (copy.indexOf(letter) === copy.lastIndexOf(letter)) {
        count++
      }
    }
  })
  return count
}

duplicateCount("abcdefghijABCDEABCDABCaba")


// ===== How many pages in a book?
function amountOfPages(summary) {
  let result = 0
  let arr = ''
  for (let i = 1; i <= summary; i++) {
    arr += i
    if (arr.length === summary) {
      result = i
    }
  }
  // console.log(arr)
  return result
}

amountOfPages(185) //97

// ===== Valid parentheses

function validParentheses(parens) {
  // let r = 0
  // let l = 0
  // const newParens = parens.split('').map(paren => {
  //   if (paren === '(') {
  //     l++
  //   } if (paren === ')') {
  //     r++
  //   }
  // })
  // let result = r + l
  // if (result % 2 === 0 && r === l) {
  //   return true
  // } else {
  //   return false
  // }
  let total = 0
  for (let i = 0; i < parens.length; i++) {
    // console.log(total)
    if (parens[i] === '(') total++
    if (parens[i] === ')') total--
    if (total < 0) return false
  }
  return total == 0
}
validParentheses("())(()")



// =================Convert number to reversed array of digits


function digitize(n) {
  //code here
  return String(n).split('').reverse().map(Number)
}

digitize(35231)

// ==== Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
  const min1 = Math.min(...numbers)
  numbers.forEach(number => {
    if (number === min1) {
      numbers.splice(numbers.indexOf(number), 1)
    }
  })
  const min2 = Math.min(...numbers)

  return min1 + min2
}

sumTwoSmallestNumbers([10, 2, 3453445, 3])

// 3453455

function stray(numbers) {
  return numbers.find((num, idx) => numbers.indexOf(num) === numbers.lastIndexOf(num))
}

stray([1, 1, 2])


///////// Is it even?
function testEven(n) {
  //Your awesome code here!
  return n % 2 === 0 ? true : false
}

// ======Opposite number

function opposite(number) {
  //your code here
  return number - (number * 2)
}

function enough(cap, on, wait) {
  const result = on + wait
  if (cap - result >= 0) {
    return 0
  } else {
    return result - cap
  }
  // return result > 0 ? result : result
}

enough(20, 5, 5)

function expandedForm(num) {
  return num.toString()
    .split('')
    .reverse()
    .map((n, idx) => n * Math.pow(10, idx))
    .filter(n => n > 0)
    .reverse()
    .join('+')
}

expandedForm(70304)


// ==========Unique In Order

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  let newArr = []
  // console.log(typeof iterable)
  if (typeof iterable === 'array' || typeof iterable === 'object') {
    iterable.map((letter, idx, arr) => {
      if (letter !== arr[idx + 1]) {
        newArr.push(letter)
      }
    })
  } else {
    iterable.toString().split('').map((letter, idx, arr) => {
      if (letter !== arr[idx + 1]) {
        newArr.push(letter)
      }
    })
  }


  return newArr
}

// console.log(uniqueInOrder([1, 2, 2, 3, 3]))
//[1,2,3]

// console.log(uniqueInOrder('AAAABBBCCDAABBB'))
//['A', 'B', 'C', 'D', 'A', 'B']


function getChar(c) {
  return String.fromCharCode(c)
}

getChar(200)

// ====== What's the real floor?

function getRealFloor(n) {
  if (n > 12) return n - 2
  else if (n === 0) return 0
  else if (n < 0) return n
  else return n - 1
}

getRealFloor(0)

// ======== Consecutive strings

function longestConsec(strarr, k) {
  // your code
  let newArr = []
  let count = 0
  strarr.map(elem => {
    for (let i = 1; i <= k; i++) {
      // console.log(elem)
      // console.log(elem[i])
    }
  })

  return newArr
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)

// Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
  let count = 0
  let sum = 0
  input.map(num => {
    if (num <= 0) {
      sum += num
    } else {
      count++
    }


  })
  return [count, sum]
}

countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])

// =Multiples of 3 or 5
function solution(num) {
  let count = 0
  for (let i = 0; i < num; i) {
    if (i % 3 === 0 || i % 5 === 0) {
      count += i
    }
  }

  return count
}

function abbrevName(name) {
  const name2 = name.split(' ')
  return `${name2[0][0]}.${name2[1][0]}`.toUpperCase()
}

abbrevName("Sam Harris")

// ==== Two to One


function longest(s1, s2) {
  const newVar = s1.concat(s2).split('').sort()
  const newVar2 = new Set(newVar)
  return Array.from(newVar2).join('')
}

longest("aretheyhere", "yestheyarehere")

// ====Find the unique number


function findUniq(arr) {

  return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num))

}

findUniq([1, 1, 1, 2, 1, 1]
)

// === array Diff

function arrayDiff(a, b) {
  return a.filter(elem => !b.includes(elem))

}

arrayDiff([1, 2], [1])

// === Sum without highest and lowest number

function sumArray(array) {
  if (array === null || array.length === 0) return 0
  const min = Math.min(...array)
  const max = Math.max(...array)
  return array.filter(num => min !== num && max !== num).reduce((total, n) => total + n, 0)
}

sumArray([0, 1, 6, 10, 10])

function XO(str) {
  let countX = 0
  let countO = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'x') {
      countX++
    }
    if (str[i].toLowerCase() === 'o') {
      countO++
    }

  }

  return countX === countO ? true : false
}

// == Sort and Star

function twoSort(s) {
  s.sort()
  return s[0].split('').join('***')
}


twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])


// Sum The Strings
function sumStr(a, b) {
  return String(+a + +b)
}

sumStr("4", "5")

// === Removing Elements

function removeEveryOther(arr) {
  //your code here
  return arr.filter((elem, idx) => idx % 2 === 0)

}

removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])

// ===Hello, Name or World!

function hello(name) {
  if (name === '' || name === undefined) {
    return "Hello, World!"
  }
  else {
    return `Hello, ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`
  }
}

function smash(words) {
  return words.join(' ')
};
smash(['hello', 'world', 'this', 'is', 'great'])

// ==== Correct the mistakes of the character recognition software

function correct(string) {
  let arr = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '0') {
      arr.push('O')
    } else if (string[i] === '5') {
      arr.push('S')

    } else if (string[i] === '1') {
      arr.push('I')

    } else {
      arr.push(string[i])
    }
  }
  return arr.join('')
}

function findMultiples(integer, limit) {
  //your code here
  let arr = []
  for (let i = 1; i < limit + 1; i++) {
    let multiple = integer * i
    // console.log(multiple, i, limit)
    if (multiple > limit) {
      console.log('here')
      break
    } else {
      arr.push(multiple)
    }
  }
  return arr
}

findMultiples(1, 2)

// === String incrementer

function incrementString(strng) {
  // return incrementedString
  const regex = /\d*/g
  if (regex.test(strng)) {
    strign = strng.split(' ')
  } else {
    return strng + '1'
  }
  // console.log(regex.test(strng))
}

incrementString("foobar001")



// ==Simple Fun #176: Reverse Letter

function reverseLetter(str) {
  //coding and coding..
  const regex = /\d|\W|_/g
  return str.replace(regex, '').split('').reverse().join('')

}

reverseLetter("krish21an")
// nortlu

// == Find the capitals

const capitals = function (word) {

  const regex = /[A-Z]/gm
  const upperCase = word.match(regex)
  let arr = []
  for (let i = 0; i < word.length; i++) {
    // console.log(word.indexOf(upperCase[i]))
    if (word.indexOf(upperCase[i]) >= 0) {
      arr.push(word.indexOf(upperCase[i]))
    }
  }
  return arr
}

capitals('CodEWaRs')
// , [0,3,4,6]

// ====Replace all vowel to exclamation mark in the sentence
function replace(s) {
  //coding and coding....
  return s.replace(/[aeiou]/gi, '!')
}

replace("!Hi! Hi!")

// Make a function that does arithmetic!
function arithmetic(a, b, operator) {
  //your code here!
  if (operator === 'add') {
    return a + b
  }
  if (operator === 'subtract') {
    return a - b
  }
  if (operator === 'multiply') {
    return a * b
  }
  if (operator === 'divide') {
    return a / b
  }
}

// === Form The Minimum

function minValue(values) {
  return parseInt([... new Set(values)].sort().join(''))

}

minValue([4, 7, 5, 7])

// ==== Return String of First Characters

function makeString(s) {
  // ...
  return s.split(' ').map(w => w.charAt(0)).join('')
}

makeString("sees eyes xray yoat")

// ===== No zeros for heros
function noBoringZeros(n) {
  // your code
  const regex = /0*$/g
  return parseInt(String(n).replace(regex, ''))
}
console.log(noBoringZeros(-1050))

// ====================== FREE CODE CAMP

function sumAll(arr) {
  let result = 0
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  for (let i = min; i <= max; i++) {
    result += i
  }
  return result
}

sumAll([1, 4])

// Diff Two Arrays

function diffArray(arr1, arr2) {
  const newArr = arr1.concat(arr2)
  return newArr.filter(num => !arr1.includes(num) || !arr2.includes(num))
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])

// Seek and Destroy

function destroyer(arr, ...remove) {
  return arr.filter(num => remove.includes(num))
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)

// Wherefore art thou
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source)
  return collection.filter(obj => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false
      }
    }
    return true
  })
}



function whatIsInAName(collection, source) {
  const sourceKey = Object.keys(source)
  return collection.filter(obj =>
    sourceKey.every(key => {
      // console.log('Object key :', obj[key], 'source Key:', source[key])
      return obj.hasOwnProperty(key) && source[key] === obj[key]
    }))

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })

function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}

spinalCase('this-Is SpinalTap')

function myReplace(str, before, after) {
  if (/[A-Z]/.test(before)) {
    return str.replace(before, after.charAt(0).toUpperCase() + after.slice(1))
  } else if (/^[a-z]/.test(before)) {
    return str.replace(before, after.charAt(0).toLowerCase() + after.slice(1))
  }
  else {
    return str.replace(before, after)
  }
}

// === Pig Latin

function translatePigLatin(str) {
  let result = ''
  let consonantRegex = /^[bcdfghjklmnpqrstvwxys]?[bcdfghjklmnpqrstvwxys]?[bcdfghjklmnpqrstvwxys]?[bcdfghjklmnpqrstvwxys]/gm
  if (consonantRegex.test(str)) {
    const strLength = String(str.match(consonantRegex)).length
    result = str.slice(strLength) + str.match(consonantRegex) + 'ay'
    return result
  } else {
    return result = str.slice(0) + 'way'
  }
}

// ===DNA Pairing

function pairElement(str) {
  // CG or GC 
  // AT or TA
  let result = []
  str.split('').map(dna => {

    if (dna === 'G') {
      result.push([dna, 'C'])
    }
    else if (dna === 'C') {
      result.push([dna, 'G'])
    }
    else if (dna === 'A') {
      result.push([dna, 'T'])
    }
    else if (dna === 'T') {
      result.push([dna, 'A'])
    }
  })

  return result
}

pairElement("ATCGA")

// === Missing letters
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)
    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1)
    }
  }
  return undefined
}

// === Missing letters AGAIN

fearNotLetter("abce")

function fearNotLetter(str) {
  let correct = str.charCodeAt(0)
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (correct !== str.charCodeAt(i)) {
      result = String.fromCharCode(correct)
      break
    }
    correct++
    if (i === str.length - 1) return undefined
  }

  return result
}

// ==== Sorted Union

function uniteUnique(...arr) {
  // const newArr = Array.from(new Set(...arr))
  let newArr = []
  arr.filter((array, idx) => {
    for (let i = 0; i < array.length; i++) {
      newArr.push(array[i])
    }
  })
  // console.log(newArr)
  return Array.from(new Set(newArr))
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])

function sumPrimes(num) {
  function isPrime(num) {
    for (let i = 2; i < Math.sqrt(num); i++) {
      console.log(i)
      if (num % i > 0) {
        return false
      }
      return true
    }
  }
  let sum = 0
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (isPrime(i)) {
      sum += i
    }
  }
  return sum
}

// === Drop it
function dropElements(arr, func) {
  // return arr.filter(num => func(num) )
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i)
    }
  }

  return []
}

// console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))
// console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))

// ====Binary Agents
function binaryAgent(str) {
  // const newStr = str.split(' ')
  // return newStr.map(bi => String.fromCharCode(parseInt(bi, 2))).join('')
  return str.split(' ').map(code => String.fromCharCode(parseInt(code, 2))).join('')
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")

// ==Everything Be True

function truthCheck(collection, pre) {
  // console.log(pre)
  const newCollection = collection.map(obj => {
    return !!obj[pre]
  })
  return newCollection.includes(false) ? false : true
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot")

// ==== Arguments Optional
function addTogether() {

  const [first, second] = arguments

  if (typeof first !== 'number') {
    return undefined
  }
  if (second === undefined) {
    return function (second) {
      if (typeof second !== 'number') return undefined
      return first + second
    }
  }
  if (typeof second !== 'number') {
    return undefined
  }

  return first + second
}

addTogether(2, 3)
// addTogether(2)([3])


// 2, 3, 5, 7, 11, 13.

// Palindrome Checker

function palindrome(str) {
  const strReverse = str.split('').reverse().join('').replace(/\W|_/gm, '').toLowerCase()
  const originalStr = str.replace(/\W|_/gm, '').toLowerCase()

  if (originalStr === strReverse) {
    return true
  } else {
    return false
  }
}

palindrome("_eye")

// =Steamroller

function steamrollArray(arr) {
  let newArr = []

  arr.forEach(elem => {
    if (Array.isArray(elem)) {
      newArr.push(...steamrollArray(elem))
    } else {
      newArr.push(elem)
    }
  })

  return newArr
}

// === Make a Person

// const Person = function (firstAndLast) {

//   let fullName = firstAndLast
//   // console.log(firstAndLast)

//   this.getFullName = function () {
//     return fullName;
//   }

//   this.setFullName = function (firstAndLast) {
//     fullName = firstAndLast

//   }

//   this.getFirstName = function () {
//     return fullName.split(' ')[0]
//   }
//   this.getLastName = function () {
//     return fullName.split(' ')[1]
//   }

//   this.setFirstName = function (first) {
//     fullName = `${first} ${fullName.split(' ')[1]}`
//   }

//   this.setLastName = function (last) {
//     fullName = `${fullName.split(' ')[0]} ${last}`
//   }
// }


const Person = function (firstAndLast) {
  let [first, second] = firstAndLast.split(' ')
  // console.log(first, last)

  this.getFullName = function () {
    return first + ' ' + second
  };
  this.getFirstName = function () {
    return first
  };
  this.getLastName = function () {
    return second
  };
  this.setFirstName = function (_first) {
    first = _first
  };
  this.setLastName = function (_last) {
    second = _last
  };
  this.setFullName = function (_fullName) {
    [first, second] = _fullName.split(' ')
  };
};

const bob = new Person('Bob Ross');


// const bob = new Person('Bob Ross')
// console.log(bob.getFullName())
// // console.log(bob.getFirstName())
// // console.log(bob.getLastName())
// console.log(bob.setFirstName('gustavo'))
// console.log(bob.setLastName('Bernardo'))
// console.log(bob.getFullName())


// Roman Numeral Converter

function convertToRoman(num) {
  const romanTable = {
    3000: 'MMM',
    2000: 'MM',
    1000: 'M',
    900: 'CM',
    800: 'DCCC',
    700: 'DCC',
    600: 'DC',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    80: 'LXXX',
    60: 'LX',
    50: 'L',
    40: 'XL',
    20: 'XX',
    10: 'X',
    9: 'IX',
    8: 'VIII',
    7: 'VII',
    6: 'VI',
    5: 'V',
    4: 'IV',
    3: 'III',
    2: 'II',
    1: 'I',
  }

  const numLength = String(num).length
  const strNum = String(num)

  for (let i = 0; i < numLength; i++) {
    if (numLength <= 1) {
      return romanTable[strNum[i]]
    } else if (numLength === 2) {
      const first = strNum[0] + 0
      // const second = romanTable[strNum[1]]
      // console.log(first, second)
      return `${romanTable[first]}${romanTable[strNum[1]]}`
    } else if (numLength === 3) {
      const first = strNum[0] + 0 + 0
      const second = strNum[1] + 0
      const third = strNum[2]
      const final = +first + +second + +third
      if (second.includes('00') && third === '0') {
        console.log('enter')
        return `${romanTable[final]}`
      }
      return `${romanTable[first]}${second !== '00' ? romanTable[second] : ''}${romanTable[third]}`

    } else if (numLength === 4) {
      const first = strNum[0] + 0 + 0 + 0
      const second = strNum[1] + 0 + 0
      const third = strNum[2] + 0
      const forth = strNum[3]
      const final = +first + +second + +third + +forth
      if (second.includes('000') && third === '00' && forth === '0') {
        console.log('enter')
        return `${romanTable[final]}`
      }
      return `${romanTable[first]}${second !== '000' ? romanTable[second] : ''}${third !== '00' ? romanTable[third] : ''}${romanTable[forth]}`
    }
  }
}

convertToRoman(2014)


// === Caesars Cipher

function rot13(str) {
  const cipherTable = {
    A: 'N',
    N: 'A',
    B: 'O',
    O: 'B',
    C: 'P',
    P: 'C',
    D: 'Q',
    Q: 'D',
    E: 'R',
    R: 'E',
    F: 'S',
    S: 'F',
    G: 'T',
    T: 'G',
    H: 'U',
    U: 'H',
    I: 'V',
    V: 'I',
    J: 'W',
    W: 'J',
    K: 'X',
    X: 'K',
    L: 'Y',
    Y: 'L',
    M: 'Z',
    Z: 'M',
  }
  const regex = /\s|\W+/gm
  return str.split('').map(letter => {
    if (letter.match(regex) !== null) {
      return letter
    }

    return cipherTable[letter]
  }).join('')


}

rot13("SERR PBQR PNZC")

function telephoneCheck(str) {

  const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[-|\s]?\d{3}[-|\s]?\d{4}$/im



  return regex.test(str)
}
console.log(telephoneCheck("1 555)555-5555"))
console.log(telephoneCheck("27576227382"))
console.log(telephoneCheck("(275)76227382"))
console.log(telephoneCheck("555)-555-5555"))
console.log(telephoneCheck("(555-555-5555"))

// these above should return false
