//deklarasi tuple
let person: [string, number, boolean] = ["John", 30, true];

//deklerasi kordinat
let coordinate: [number, number] = [10.5, 20.1];

//tuple untuk koordinat 
let optionalTuple: [string, number?] = ["Hello"];
optionalTuple = ["Hello", 20];

//destructuring tuple
let[name, age, isEmployed] = person;
console.log("Name: ", name);
console.log("Age: ", age);
console.log("Employed: ", isEmployed);

//Tumple di dalam array
let employees: [string, number][] = [
    ["John", 30],
    ["Jane", 25],
    ["Bob", 35],
];

employees.forEach(([name, age]) => {
    console.log('${name} is ${age} years old');
});

export {};