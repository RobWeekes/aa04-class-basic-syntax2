class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // instance methods
    introduce() {
        console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
        // return `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`;
    }

    // static methods
    static introducePeople(people) {
        if(!Array.isArray(people)) {
            throw new Error('introducePeople only takes an array as an argument.');
        }
        for(let i = 0; i < people.length; i++) {
            const person = people[i];
            if(!(person instanceof Person)) {
                throw new Error('All items in array must be Person class instances.');
            }
        }
        people.forEach(person => person.introduce());
    }
}



// let rob = new Person('Rob', 'Weekes', 40)
// console.log(rob);
// console.log(rob.introduce());


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
