# Notes After Completion

Reworked using .map & .apply

# Instructions

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

```js
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```

# Note

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

# Starter code

```js
function highAndLow(numbers){
  // ...
}
```

# Sample Tests

```js
Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
```