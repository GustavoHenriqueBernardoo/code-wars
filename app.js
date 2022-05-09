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
  console.log(s.match(regex))
  for (let i = 0; i < s.length; i++) {
    if (regex.test(s[i]))
      count++
  }
  return `${count}/${s.length}`
}

printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")


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
  // console.log(remove)
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)