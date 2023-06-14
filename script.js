//forEach()
Array.prototype.forEach = function myEach(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
    console.log(number); // 1 2 3 4 5
});
```

### map()

Without using the native “Array.prototype.map” method of JavaScript, compose a function titled “myMap” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.

```
Array.prototype.map = function myMap(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(function (number) {
    return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

### filter()

Without using the native “Array.prototype.filter” method of JavaScript, compose a function titled “myFilter” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.

```
function myFilter() {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function (number) { return number % 2 === 0; });

console.log(evenNumbers); // [2, 4]
```

### some() (aka any())

Without using the native “Array.prototype.some” method of JavaScript, compose a function titled “mySome” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.

```
function mySome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }

    return false;
}

let numbers = [1, 2, 3, 4, 5];
let hasEvenNumber = numbers.some(function (num) {
    return num % 2 === 0;
});
console.log(hasEvenNumber); // true
```

### every()

Without using the native “Array.prototype.every” method of JavaScript, compose a function titled “myEvery” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.

```
function myEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
}

let numbers = [2, 4, 6, 8, 10];
let allNumbersEven = numbers.every(function (num) {
    return num % 2 === 0;
});
console.log(allNumbersEven); // true
```

### reduce()

Without using the native “Array.prototype.reduce” method of JavaScript, compose a function titled “myReduce” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.

```
function myReduce(array, callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }

    return accumulator;
}

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function (acc, num) {
    return acc + num;
}, 0);
console.log(sum); // 15

//includes()
Array.prototype.includes = function myIncludes(target) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === target) {
            return true;
        }
    }
    return false;
}
const fruits = ['apple', 'banana', 'orange', 'grape'];
const hasBanana = fruits.includes('banana');
console.log(hasBanana); // true


//indexOf()
Array.prototype.indexOf = function myIndexOf(target) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === target) {
            return i;
        }
    }
    return -1;
}

const fruits = ['apple', 'banana', 'orange', 'grape'];

const indexOrange = fruits.indexOf('orange');
console.log(indexOrange); // 2

const indexPear = fruits.indexOf('pear');
console.log(indexPear); // -1

//push()
Array.prototype.push = function myPush(elementToAdd) {
    this[this.length] = elementToAdd;
    return this.length;
}
let fruits = ['apple', 'banana'];
let length = fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']
console.log(length); // 3
```

### lastIndexOf()

Without using the native “Array.prototype.lastIndexOf” method of JavaScript, compose a function titled “myUnshift” (typo) that will take in an array of elements and returns the index of the last encounter of a target element (if it is found) or -1 if that element does not exist within the input array.

```
const animals = ['cat', 'dog', 'bird', 'dog', 'fish'];

const lastIndexDog = animals.lastIndexOf('dog');
console.log(lastIndexDog); // 3

const lastIndexCow = animals.lastIndexOf('cow');
console.log(lastIndexCow); // -1
```

### Object.keys()

Without using the native “Object.keys()” method of JavaScript, compose a function titled “grabKeys” that will take in an object and return all of the keys of the key:value pairs of that object. Modify the Object class, appending a static method to the Object class., appending a static method to the Object class. Leverage the “for...in” loop.

```
const student = {
    firstname: 'John',
    lastname: 'Doe',
    age: 22,
    gender: 'male'
};

const keys = Object.keys(student);
console.log(keys); // ['firstname', 'lastname', 'age', 'gender']
```

### Object.values()

Without using the native “Object.values()” method of JavaScript, compose a function titled “grabValues” that will take in an object and return all of the values of the key:value pairs of that object. Modify the Object class, appending a static method to the Object class. Leverage the “for...in” loop.

```
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
};

const values = Object.values(car);
console.log(values); // ["Toyota", "Corolla", 2020]
```

## Miscellaneous Problems (4)

[From Chapter 4 of Eloquent JavaScript](https://eloquentjavascript.net/04_data.html)

- [ ] Sum of a Range
- [ ] Reversing an Array
- [ ] A List
- [ ] Deep Comparison

## Miscellaneous Problems (1)

- [ ] Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

```
function moveZeros(nums) {
    // Code logic goes here
}
```

Example:

```
Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]
    ```

**Note:**

You must do this in-place without making a copy of the array.