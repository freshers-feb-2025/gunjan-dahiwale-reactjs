"use strict";
var _a;
console.log("hello typescript");
let age = 11;
if (age < 18)
    age += 10;
let nums = [1, 2, 3, 9];
console.log(nums);
nums.forEach((n) => n + 1);
console.log(nums);
const tuple = [1, 'a'];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
const mySize = Size.Small;
console.log(mySize);
function calculateTax(income) {
    if (income > 20000)
        return income * 10;
    return income / 10;
}
console.log(calculateTax(1000));
const object = { id: 1, name: 'gunjan', age: (date) => console.log(date) };
object.id = 2;
console.log(object);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let union;
union = 1;
union = 'a';
console.log(union);
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let a = 'abc';
a = 0;
//# sourceMappingURL=index.js.map