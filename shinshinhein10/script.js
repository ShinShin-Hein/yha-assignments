// 1. array join()
// The join method is commonly used to combine elements of an array into a single string, separated by a special delimiter.

// Syntax
// array.join(separator)

//(i) Joing the default separator(comma)
let colors = ["white", "yellow", "purple", "pink"];
let joinResult1 = colors.join();
console.log("joinResult1 is: ", joinResult1);   //Output: "white,yellow,purple,pink"


//(ii) Joing a custom separator
let joinResult2 = colors.join("-");
console.log("joinResult2 is: ", joinResult2);   //Output: "white-yellow-purple-pink"

//(iii) Joing an empty string as a separator
let joinResult3 = colors.join("");
console.log("joinResult3 is: ", joinResult3);   //Output: "whiteyellowpurplepink"

//(iv) Joing an array with spaces
let joinResult4 = colors.join(" ");
console.log("joinResult54 is: ", joinResult4);   //Output: "white yellow purple pink"

//(v) Joing an empyt array[]
let users = [];
let joinResult5 = users.join("-");
console.log("joinResult5 is: ", joinResult5);   //Output: ""


//2. array.flat()
//The flat method in javascript is used to create a new array by flattening nested array (array within arrays) to a specified depth.

//Syntax
//array.flat(depth)

//(i) Default behavior (depth = 1)
let numArrays = [1, 2, [3, 4, [5, 6]]];
let flatResult1 = numArrays.flat();   
console.log("flatResault1 is: ", flatResult1);    //Output: [1, 2, 3, 4, [5, 6]] 

//(ii) Flattening to a specified depth
let flatResult2 = numArrays.flat(2);
console.log("flatResault2 is: ", flatResult2);   //Output: [1, 2, 3, 4, 5, 6]

//(iii)vCompletely flattening with Infinity
let flatResult3 = numArrays.flat(Infinity);
console.log("flatResult3 is: ", flatResult3);   //Output: [1, 2, 3, 4, 5, 6]

//(iv) Using on already flat arrays
let nums = [1, 2, 3]
let flatResult4 = nums.flat();   
console.log("flatResult4 is: ", flatResult4);   //Output: [1, 2, 3](unchanged)


//3. array splice()
//The splice method is used to add,remove and replace items in an array. It directly modifies the original array and can return the added,removed,replace items as a new array.

//Syntax
//array.splice(start, deletedCount, item1, item2, item3,....)

//(i)Removing items
let fruits = ["orange", "banana", "grape", "pineapple", "strawberry"];
let spliceResult1 = fruits.splice(1, 2); //start at index1, remove 2 items

console.log("fruits array is: ", fruits);   //Output: ["orange", "pineapple", "strawberry"];  original array was changed
console.log("spliceResult1 is: ", spliceResult1);  //Output: ["banana", "grape"]

//(ii)Adding items
fruits.splice(1, 0, "mango", "lemon"); //start at index 1, remove o , add 2 items
console.log("fruits array is: ", fruits);  //Output: ["orange", "mango", "lemon", "pineapple", "strawberry"];

//(iii)Replacing items
fruits.splice(0, 1, "kiwi"); //start at index 0, remove 1, add 1 item
console.log("fruits array is: ", fruits);  //Output: ["kiwi", "mango", "lemon", "pineapple", "strawberry"];

//(iv)Using a negative index
fruits.splice(-1, 1, "orange");  //start from the last element, remove i, add 1 item
console.log("fruits array is: ", fruits);  //Output: ["kiwi", "mango", "lemon", "pineapple", "orange"]

//(v)Removing all items from a specific index
fruits.splice(2);  //start at index 2, remove everything after
console.log("fruits array is: ", fruits);   //Output: ["kiwi", "mango"]

//4. array slice()
//The slice method in javascript is used to extract a portion of an array and return it as a new array.The original array remain unchanged.

//Syntax
//array.slice(start, end)  

//(i)Basic Slicing
let animals = ['elephant', "dog", "snake", "tiger"];
let sliceResult1 = animals.slice(1, 3);  //start at index 1, stop before index3
console.log("sliceResult1 is: ", sliceResult1);   //Output: ["dog", "snake"]
console.log("animals array is: ", animals);  //original array remain unchanged

//(ii) Omitting(ချန်သည်) the end parameter
let sliceResult2 = animals.slice(2);  //start at index 2, go to the end
console.log("sliceResult2 is: ", sliceResult2);  //Output: ["snake", "tiger"];

//(iii)negative indices
let sliceResult3 = animals.slice(-2);  //start 2 items from the end
console.log("sliceResult3 is: ", sliceResult3);  //Output: ["snake", "tiger"]

//(iv)negative end
let sliceResult4 = animals.slice(-3, -1);   //start 3 items from the end count(0), stop 1 from the end(cout1)
console.log("sliceResult4 is: ", sliceResult4);    //Output: ["dog", "snake"]

let sliceResult5 = animals.slice(-4, -1);
console.log("sliceResult5 is: ", sliceResult5);   //Output: ["elephant", "dog", "snake"]

let sliceResult6 = animals.slice(2, -1);
console.log("sliceResult6 is: ", sliceResult6);  //Output: ["snake"]

//(v)Copying an array
let bootsColors = ["success", "danger", "info", "warning", "secondary"];
let copyArray = bootsColors.slice();

let isEqual = bootsColors === copyArray;  //Output: false (it's a new arr)
console.log("is equal is: ", isEqual);
