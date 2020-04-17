# Notes After Completion

Another way is to use conditional operator '?'
https://javascript.info/ifelse

```js
let result = condition ? value1 : value2
// value1 returned if condition is 'truthy'
// value2 returned if condition is 'falsy'
// 0, "", null, undefined, and NAN are falsy

// In this case, our condition will evaulate to 0
let result = number % 2 ? value1 : value2

// 0 is falsy, so 'Even' numbers will have to be under value2
let result = number % 2 ? 'Odd' : 'Even'

// The conditional operator can also be used for multiple conditions via the ':'

# Instructions

Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

# Starter code

```js
function even_or_odd(number) {
  // ...
}
```

# Sample Tests

```js
Test.assertEquals(even_or_odd(2), "Even")
Test.assertEquals(even_or_odd(0), "Even")
Test.assertEquals(even_or_odd(7), "Odd")
Test.assertEquals(even_or_odd(1), "Odd")
```