# Notes After Completion

.filter method
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

```js
itemsArray.filter(item => item.length > 1);
```

typeof() operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

```js
typeof(itemsArray) // object
typeof(item) // number, string, etc
```

!Important
If we want to evaluate a specific data type with typeof, it needs to be referred to as a string:

```js
typeof(item) === 'number'
```

Another way is to use number.isinteger() method
https://www.w3schools.com/jsref/jsref_isinteger.asp

```js
itemsArray.filter(item => number.isInteger(item));

# Instructions

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

```js
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
```

# Starter code

```js
function filter_list(l) {
  // Return a new array with the strings filtered out
}
```

# Sample Tests

```js
Test.assertSimilar(filter_list([1,2,'a','b']),[1,2])
Test.assertSimilar(filter_list([1,'a','b',0,15]),[1,0,15])
Test.assertSimilar(filter_list([1,2,'aasf','1','123',123]),[1,2,123])
```