//Assignment 1: Building Your Friend List

//. Define an object named people containing an empty array called friends.
let people : any = {
    friends : []
}

//create a object type containing friend info
type Friend = {
    firstName : string;
    lastName: string;
    id?: string;
}

//. Create three separate objects, each representing a friend, with properties like firstName, lastName, and optionally id.

let friends1: Friend ={
    firstName: "Aqsa",
    lastName: "Bukhari",
    id: "@aqsabukhari11"
}

let friends2: Friend ={
    firstName: "Ayesha",
    lastName: "Mughal",
    id: "@ayeshamugha2513"
}

let friends3: Friend ={
    firstName: "roshan",
    lastName: "Albaloshi",
}

//3. Add these friend objects to the friends array within the people object.
people.friends.push(friends1 ,friends2 , friends3);

//Output the entire people object to the console, displaying your information and your friend list
console.log(people);


//Assignment 2: Manipulating an Array: Rearranging Words

//Rearrange an array using array methods to form the sentence "I am a student of GIAIC".

const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"]

//Use methods like splice(), pop(), and unshift() to rearrange
scrambledArray.splice(2,4)
scrambledArray.unshift("I","am", "a");
scrambledArray.pop();

// Use join() to combine elements back into a single string: "I am a student of GIAIC".
console.log(scrambledArray.join(' '));
//output will be "I am a student of GIAIC".



//Assignment 3: Company Product Catalog

// Define an array named inventory to store product information.
let inventory : any = [];

//create a type containing product info
type Product = {
    name : string;
    model: string;
    cost: number;
    quantity: number
}

//. Create three separate objects, each representing a product, with properties like name, 
//model, cost, and quantity

const productOne : Product = {
    name: "G-shock",
    model: "mx-2023",
    cost : 8000,
    quantity: 100,
}
const productTwo : Product = {
    name: "samsung",
    model: "z fold5",
    cost : 10000,
    quantity: 100,
}
const productThree : Product = {
    name: "Hyundayi",
    model: "plaisade SUV",
    cost : 13068716,
    quantity: 100,
}

//3. Add these product objects to the inventory array using an appropriate array method
inventory.push(productOne, productTwo, productThree);

//Explore adding and accessing more elements within the inventory array to understand how to manage product data.
console.log(`Quantity of the third product: ${inventory[2].quantity}`);
console.log(`name of the second product: ${inventory[1].name}`);
console.log(`model of the first product: ${inventory[0].model}`);


//Assignment 4: Student List Organizer

//. Student Data: The provided code defines an interface named Student that describes 
//student information like name, senior status (true/false), and whether they've completed 
//their assignments (true/false).

interface student {
  name: string;
  isSenior: boolean;
  isAssignWork: boolean;
}

//Student List: An array named students stores information about several students using the 
//Student template. Think of this array as your class list!

const studentsList: student[] = [
  {
    name: "khadija",
    isSenior: true,
    isAssignWork: true,
  },
  {
    name: "Ayesha",
    isSenior: false,
    isAssignWork: true,
  },
  {
    name: "madhiya",
    isSenior: false,
    isAssignWork: false,
  },
];

// The code (not shown here) has a function that might find students who are seniors and have completed their assignments
function findStudents(student: student[]) {
  for (let i = 0; i < student.length; i++) {
    if (student[i].isSenior && student[i].isAssignWork) {
      return student[i];
    }
  }
}
const goodStudents = findStudents(studentsList);
console.log(goodStudents);

// imagine you need to update your class list! The code (not shown here)
 //might have a function that removes students who haven't completed their assignmen
function updatelist(student: student[]) {
    const updateStudentList = []
  for (let i = 0; i < student.length; i++) {
    if (student[i].isAssignWork === true) {
      updateStudentList.push(student[i]);
    }
  }
  return updateStudentList;
}
const newList = updatelist(studentsList);
console.log(newList);
