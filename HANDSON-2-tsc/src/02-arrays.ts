//cara 1
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["John", "Jane", "Bob"];

//cara 2
let scores: Array<number> = [85, 92, 78];
let fruits: Array<string> = ["apple", "Orange", "Banana"];

//Array dengan multiple types (union type)
let mixed: (number | string)[] = [1, "Two", 3, "four"];

numbers.push(6);
names.pop();

//interasi array
numbers.forEach((num) => {
console.log("Number: ", num);
});

const doubledNumbers = numbers.map((num) => num * 2);
console.log("Doubled numbers: ", doubledNumbers);

export {};