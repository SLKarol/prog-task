// Input: "hello"
// Output: "olleh"
const reverseString = function(inputString) {
  let reverseArray = inputString.split("").reverse();
  return reverseArray.join("");
};
export default reverseString;