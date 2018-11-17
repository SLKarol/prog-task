function matchingBrackets(str) {
  const pattern = /[^()\[\]{}]/g;
  let checkString = ("" + str).replace(pattern, "");
  let bracket = {
    "]": "[",
    "}": "{",
    ")": "("
  };
  let openBrackets = [];
  let isClean = true;  
  for (let i = 0; isClean && i < checkString.length; i++) {
    if (bracket[checkString[i]]) {
      isClean = (openBrackets.pop() === bracket[checkString[i]]);
    } else {
      openBrackets.push(checkString[i]);
    }
  }
  return isClean && !openBrackets.length;
}
export default matchingBrackets;