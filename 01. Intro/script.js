/*
Three rules:
1. Everything immutable!
2. Everything through recursion!
3. Function as an argument!
*/

/*
Primitives:
- bool
- number
- undefined
- null
- string
- symbol

complexes:
-function
-object
*/

const func1 = function() {
    return 1;
}

function func2() {
    return 1;
}

const func3 = func1;
const func4 = func3;
func1 = function() {
    return 3;
}

// console.log(func4());
// console.log(func3());
// console.log(func1());
const func5 = function() {
    //numbers
    const num = 3+7
}

const func6 = function(grade) {
    if (0===0) {
 
    }
    else if (9===9) {
 
    }
    else {
 
    }
 
 
    switch(grade) {
        case 1: 
        case 2: 
        case 3: console.log("Bad"); break;
        case 5: case 6: case 7: console.log("normal"); break;
        case 8: case 9: case 10: console.log("excellent"); break;
        default: console.log("Wrong number"); 
    }
}
 /*
 == comparing values.
 === perfect comparing.
 <=, >=, !=, <, >
 */

 /*
 Loops:
 - for 
     for(i = [start_point]; [condition_to_break]; [operation_on_step]),
 - foreach
     foreach(const item in [collection_name]),
 - while,
     while([condition_to_break]);
 - do/while.
     do ... while([condition_to_break]);
*/