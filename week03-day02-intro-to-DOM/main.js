
console.log('in main.js');
// AN ARRAY OF OBJECTS
var person1 = {
  firstName:'Bob',
  lastName: 'le plant',
  email:'bob@spartaglobal.co',
  age:12.5
};

var person2 = {
      firstName:'Aretha',
          lastName: 'Franklin',
   email:'ms.legend@examlple.com',
  age:29
};


var person3 = {
  firstName:'Joe',
  email: 4,
  hobbies:['boxing', 'hitting'],
};


var people = [ person1, person2, person3];

// A FOR LOOP TO PRINT OUT THE FIRSTNAME AND AGE
for (var i = 0 ; i < people.length; i++){
  console.log(people[i].firstName, people[i].age);
}





if ({} === {}) {
  console.log( 'yep I got it');
}
else{
  console.log('nope i havent got it');
}
// {} = A SHORT HAND FOR 'NEW OBJECT' so in this statement 2 different brand new objects are being compared so they will not equal the same.



console.log('-----Function');

function createPerson(firstNameParam, lastNameParam, emailParam, ageParam){
  var person ={
    firstName: firstNameParam,
    lastName: lastNameParam,
    email: emailParam,
    age:ageParam,
    fullName:function() {
      return firstName + lastName;
    }
};
console.log('New person:', person);
}

createPerson('Harald', 'Kumar', 'h.kumar@example.com', 15);

return newPerson;
}

var harald = createPerson('Harald', 'Kumar', 'h.kumar@example.com', 15);
console.log('newPerson:', harald);

function isOldEnough(age) {
  return (age >= 18);
}

if (isOldEnough(harald.age)) {
  console.log('Come in');
} else {
  console.log('Come back when you are older.');
}
