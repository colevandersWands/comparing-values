/*
  leaving this behind, moving these operators to 'between sets'
    (num, num) -> boolean
*/

/* ordering within sets
  in javascript, elements within sets are well-ordered
    any subset has a least element
  the <, >, <=, >=, ===, !== operators allow you to use this
    we'll learn about ==, != in the next one
  these operators are maps between sets
    string -> boolean
    number -> boolean
    boolean -> boolean
  challenge:
    is order preserved across mappings
*/


function less_than(a, b) {
  return a < b;
}
// https://javascript.info/comparison#string-comparison
const string_tests = [
    {name: 'e < f', args: ['e', 'f'], expected: true}
  ]
const number_tests = [
  ] 
const boolean_tests = [
  ]

function greater_than(a, b) {
  return a > b;
}
// https://javascript.info/comparison#string-comparison
const string_tests = [
    {name: 'e < f', args: ['e', 'f'], expected: true}
  ]
const number_tests = [
  ] 
const boolean_tests = [
  ]

// ... for each


