console.log("hello typescript");

//Define
let age: number = 11;
if (age < 18)
    age += 10;

//Array
let nums: number[] = [1, 2, 3, 9];

console.log(nums);
nums.forEach((n) => n + 1);
console.log(nums);

//Tuple
const tuple: [number, string] = [1, 'a']

//enum
enum Size { Small = 1, Medium, Large }
const mySize = Size.Small;
console.log(mySize);

//function
function calculateTax(income: number): number {
    if (income > 20_000)
        return income * 10;
    return income / 10;
}
console.log(calculateTax(1000));

//Object
const object: { id: number, readonly name: string, age: (date: Date) => void } = { id: 1, name: 'gunjan', age: (date: Date) => console.log(date)}
object.id = 2;
console.log(object);

//Alias type
type Customer = {
    birthday: Date;
}

function getCustomer(id: number) : Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()};
}

//union type
let union: number | string;
union = 1;
union = 'a';
console.log(union);
function print(id: number|string) {
    if(typeof(id) == 'string')
    console.log(id.toUpperCase()); 
}   
console.log(print('a'));   //narrowing


//optional chaining
let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear());

let a: any = 'abc';
a = 0;

//intersection
type A = {
    propA: number
};

type B = {
    propB: string
};

type combined = A & B;

