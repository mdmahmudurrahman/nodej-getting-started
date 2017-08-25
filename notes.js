console.log("From the notes");
// console.log(module);

module.exports.age = 28;

module.exports.addNote = () => {
  console.log("Added note");
  return "Returned note";
};

module.exports.sumNumber = (num1, num2) => {
  console.log("Added number: ");
  return num1 + num2;
};