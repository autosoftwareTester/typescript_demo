"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let id = "sam";
let social_security = 123_345_666;
let isAge = false;
if (id.at(0) == "s") {
    console.log(id);
}
console.log(social_security);
console.log(isAge);
let grades = [];
grades[0] = 200;
grades[1] = 300;
grades[2] = 400;
grades[3] = 500;
grades.forEach(x => console.log(x));
// Fixed length array
let choice = ["Yes", "No", 2];
const slice = choice[1].slice(0, -1);
console.log(slice);
//# sourceMappingURL=index.js.map