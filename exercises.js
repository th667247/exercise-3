//Part 3: New JS file and exercises from chapter 5. Exporting into main js file. 

//Exercise 1: flattening(list)
export function flattening(arrays) {
    return arrays.reduce((flatArray, currentArray) => flatArray.concat(currentArray), []);
  }
  
  //Exercise 2: loop(value, test, update, body)
  export function loop(value, test, update, body) {
    while (test(value)) {
      body(value);
      value = update(value);
    }
  }
  
  //Exercise 3: everyLoop(array, test)
  export function everyLoop(array, test) {
    for (let element of array) {
      if (!test(element)) {
        return false;
      }
    }
    return true;
  }
  
  //Exercise 4: everySome(array, test)
  export function everySome(array, test) {
    return array.every(test);
  }