// console.log("From the notes");
// // console.log(module);

// module.exports.age = 28;

// module.exports.addNote = () => {
//   console.log("Added note");
//   return "Returned note";
// };



var addNotes = (title, body) => {
  console.log("Adding note", title, body);
  return 0;
};

module.exports = {
  testNote: addNotes
};

module.exports.sumNumber = (num1, num2) => {
  console.log("Added number: ");
  return num1 + num2;
};