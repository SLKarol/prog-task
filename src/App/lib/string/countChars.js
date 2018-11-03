// Input: "abddfghgrab"
// Output: {a:2,b:2,d:2,f:1,g:2,h:1,r:1}
function countChars(inputString) {
  let re = {};
  for (let i = 0; i < inputString.length; i++) {
    let t = inputString[i];
    if (Object.keys(re).find(q => q === t)) {
      re[t]++;
    } else {
      re[t] = 1;
    }
  }
  return re;
}
export default countChars;