//forEach()
Array.prototype.forEach = function myEach(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}


//map()
Array.prototype.map = function myMap(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}


//filter()
Array.prototype.filter = function myFilter() {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}


//some()
Array.prototype.some = function mySome(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        }
    }
    return false;
}


//every()
Array.prototype.every = function myEvery(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false;
        }
    }
    return true;
}


//reduce
Array.prototype.reduce = function myReduce(callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
}


//includes()
Array.prototype.includes = function myIncludes(target) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === target) {
            return true;
        }
    }
    return false;
}


//indexOf()
Array.prototype.indexOf = function myIndexOf(target) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === target) {
            return i;
        }
    }
    return -1;
}


//push()
Array.prototype.push = function myPush(elementToAdd) {
    this[this.length] = elementToAdd;
    return this.length;
}


//lastIndexOf
Array.prototype.lastIndexOf = function myUnshift(target) {
    for (let i = this.length - 1; i >= 0; i--) {
        if (this[i] === target) {
            return i;
        }
    }
    return -1;
}


//Object.keys()
Object.keys = function grabKeys(obj) {
    const keys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}


//Object.values()
Object.values = function grabValues(obj) {
    var values = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            values.push(obj[key]);
        }
    }
    return values;
};


// Sum of a Range
function sum(result) {
    let sum = 0;
    for (i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return result;
}
function range(min, max) {
    let result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

//Reversing an Array
function reverseArray(array) {
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

function reverseArrayInPlace(array) {
    let length = array.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    let temp = array[i];
    array[i] = array[length - 1 - i];
    array[length - 1 - i] = temp;
  }
}

//A List
//Deep Comparison
```
    //Miscellaneous Problems (1)

    - [] Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

function moveZeros(nums) {
    let i = 0;
    for (let num of nums) {
        if (num !== 0) {
            nums[i] = num;
            i++;
        }
    }
    while (i < nums.length) {
        nums[i] = 0;
        i++;
    }
    return nums;
}
```

Example:

```
Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]
