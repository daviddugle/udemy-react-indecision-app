// arguments object - no longer bound with arrow funcitons

const add = (a, b) => {
    // console.log(arguments);
    return a+ b;
}

console.log(add(55,1));

// this keyword - no longer bound

const user = {
    name: "David",
    cities: ["Indianapolis", "Tampa", "Jacksonville", "Charlotte", "Tallahassee"],
    printPlacesLived() {
      return this.cities.map((city) => this.name + " has lived in " + city);
        // this.cities.forEach( (city) => {
        //     console.log(this.name + " has lived in " + city)
        // })
        
    }
}
// user.printPlacesLived();

console.log(user.printPlacesLived());

const multiplier = {
    // numbers -array of numbers
    // multiplyBy - single number
    // multiphy - return a new array where the number have been multiplied

    numbers: [0,1,2,3,4,5,6,7,8,9],
    multiplyBy: 9,
    multiply() {
        return this.numbers.map((num) => this.multiplyBy * num);
    }
}

console.log(multiplier.multiply());