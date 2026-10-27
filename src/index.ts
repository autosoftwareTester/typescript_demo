let id: string = "sam";
let social_security: number = 123_345_666;
let isAge: boolean = false;

if (id.at(0) == "s") {
  console.log(id);
}

console.log(social_security);

console.log(isAge);

let grades: number[] = [];
grades[0] = 200;
grades[1] = 300;
grades[2] = 400;
grades[3] = 500;

grades.forEach(x => console.log(x));

// Fixed length array
let choice: [string, string, number] = ["Yes", "No", 2];
const slice = choice[1].slice(0, -1);
console.log(slice);
