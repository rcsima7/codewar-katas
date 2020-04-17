# Notes After Completion



# Instructions

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

```js
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
```

# Starter code

```js
function list(names){
}
```

# Sample Tests

```js
Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
"Must work with many names")
Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie',
"Must work with many names")
Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa', 
"Must work with two names")
Test.assertEquals(list([{name: 'Bart'}]), 'Bart', "Wrong output for a single name")
Test.assertEquals(list([]), '', "Must work with no names")
```