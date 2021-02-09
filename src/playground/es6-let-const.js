var nameVar = "David";
nameVar = "Mike";
console.log('nameVar', nameVar);

let nameLet = "Jen";
nameLet = "julie";
console.log("nameLet", nameLet);

const nameConst = "Mike Jones";

console.log("nameConst", nameConst);

// function getPetName()  {

//     let petName = "hal";
//     return petName;

// }

// getPetName();
// console.log(petName);

// Block Scoping

var fullName = "David Dugle";

let firstName;

if (fullName){
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);
