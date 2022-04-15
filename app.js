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
  return enteredCode === correctCode || Date.parse(currentDate) > Date.parse(expirationDate) ? true : false

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

console.log(filter_list([1, 2, 'a', 'b']))


