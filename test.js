let array = [1, 2, 10, 16];
let newArray = [];

newArray = array.forEach((num) => {
   return newArray.push(num * 5);
});

const mapArray = array.map((num) => {
   return num + 5;
});

const filter = array.filter((num) => num >= 10);

const reduceArray = array.reduce((accumilator, num) => {
   return accumilator + num;
}, 0 /* << Default value for the accumilator */);

// Prototypal Inheritance

function Person(name, age, gender) {
   this.name = name;
   this.age = age;
   this.gender = gender;
}

Person.prototype.greet = function () {
   return `Hi, my name is ${this.name} and I am ${this.age}`;
};

// Programmer Constructor Object
function Programmer(name, age, gender, language) {
   Person.call(this, name, age, gender);
   this.language = language;
}

// Linking to Person.prototype
Programmer.prototype = Object.create(Person.prototype); // Assigns constructor to Person
Programmer.prototype.constructor = Programmer; // Reassigns constructor to Programmer

// Method Overriding
Programmer.prototype.greet = function () {
   return `${Person.prototype.greet.call(this)} I program in ${this.language} `;
};

const eric = new Programmer("Eric", 34, "male", "Javascript");

// Classical Inheritance

class PersonTwo {
   constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
   }

   greet() {
      return `Hi, my name is ${this.name} and I am ${this.age}`;
   }
}

class ProgrammerTwo extends PersonTwo {
   constructor(name = "Branden", age, gender, language) {
      super(name, age, gender);
      this.language = language;
   }

   greet() {
      return `${super.greet()}. I program in ${this.language}.`;
   }
}

const branden = new ProgrammerTwo("Branden", 29, "male", "c++");
//
//
//
//
//

// CODING CHALLANGE

const arrayChallange = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const sortArray = (array = []) => {
   let i = 0;
   const arrayLength = array.length;

   for (i; i < arrayLength; i++) {
      for (index = 0; index < arrayLength; index++) {
         if (array[index] > array[index + 1]) {
            [array[index], array[index + 1]] = [array[index + 1], array[index]];
         }
      }
   }

   return array;
};

const groupSortedArray = (array = []) => {
   const GROUPED_ARRAY = [];
   let tempArray = [];

   array.map((item, i) => {
      if (item === array[i + 1]) {
         //instead see if the types match
         tempArray.push(item);
         // if they don't match, skip &&....
      } else if (item !== array[i + 1] && item === array[i - 1]) {
         tempArray.push(item);
         GROUPED_ARRAY.push(tempArray);
         tempArray = [];
      } else {
         GROUPED_ARRAY.push(item);
      }
   });

   return GROUPED_ARRAY;
};

console.log(groupSortedArray(sortArray(arrayChallange)));

// TODO: Finish the final part of the last challange.
// !Warning: Finish Work //
