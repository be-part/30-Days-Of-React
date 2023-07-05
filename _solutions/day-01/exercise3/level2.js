// Exercise 3 - Level 2

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// 1. Find the person who has many skills in the users object.
getMostSkilled = function () {
    let maxSkillsPerson = null;
    let maxSkillsCount = 0;

    Object.keys(users).forEach((person) => {
        const skillsCount = users[person].skills.length;
        if (skillsCount > maxSkillsCount) {
            maxSkillsPerson = person;
            maxSkillsCount = skillsCount;
        }
    });

console.log(maxSkillsPerson);
}

// 2. Count logged in users, count users having greater than equal to 50 points.

const countLoggedIn = function () {

  let loggedInTotal = 0

  for (const user in users) {
    if (users[user].isLoggedIn === true) {
      loggedInTotal ++; 
    }
  }
  
  console.log(loggedInTotal)
}

const countMoreThan50 = function () {

  let moreThan50Total = 0

  for (const user in users) {
    if (users[user].points >= 50) {
      moreThan50Total ++; 
    }
  }
  
  console.log(moreThan50Total)
}


// 3. Set your name in the users object without modifying the original users object
const copyUsers = Object.assign({}, users)

const newUser = {
    email: 'newuser@example.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 22,
    isLoggedIn: true,
    points: 35
  };
  
copyUsers['NewUser'] = newUser;

// 4. Get all keys or properties of users object
const keys = Object.keys(copyUsers)

// 5. Get all the values of users object
const values = Object.values(copyUsers)


