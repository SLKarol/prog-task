// Input: "hello"
// Output: "olleh"
function reverseString(inputString) {
  let reverseArray = inputString.split("").reverse();
  return reverseArray.join("");
};
export default reverseString;