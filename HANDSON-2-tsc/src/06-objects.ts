// object type annotation
let user: { name: string; age: number; email: string } = {
    name: 'John Doe',
    age: 30,
    email: "john.doe@example.com"
    };

    //implementasi interface
    interface Employee{
        id: number;
        name: string;
        department: string;
        readonly salary: number;
        contact?: string;
    }

    let employee: Employee = {
        id: 1,
        name: "John Doe",
        department: "IT",
        salary: 5000,
        contact: "phone-number"
    };

    interface Company{
        name: string;
        address: {
            street: string;
            city: string;
            country: string;
    };
    employees: Employee[];
}
let company: Company = {
    name: "Tech Corp",
    address: {
        street: "123 Main St",
        city: "Tech City",
        country: "Techland",
},
    employees: [employee],
};

console.log("User: ", user);
console.log("Employee: ", employee);
console.log("Company: ", company);