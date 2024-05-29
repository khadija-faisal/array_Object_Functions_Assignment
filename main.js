"use strict";
// //Assignment 1: Building Your Friend List
Object.defineProperty(exports, "__esModule", { value: true });
const students = [
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
function findStudents(student) {
    for (let i = 0; i < student.length; i++) {
        if (student[i].isSenior && student[i].isAssignWork) {
            return student[i];
        }
    }
}
const goodStudents = findStudents(students);
console.log(goodStudents);
function updatelist(student) {
    const updateStudentList = [];
    for (let i = 0; i < student.length; i++) {
        if (student[i].isAssignWork === true) {
            updateStudentList.push(student[i]);
        }
    }
    return updateStudentList;
}
const newList = updatelist(students);
console.log(newList);
