/*
Input: 2 3
Output: 5
Input type string
*/
function SumTwoNumber(value) {
  const tempArray = value.split(' ');
  if (tempArray.length !== 2) {
    return null;
  }
  if(tempArray[0]==='' || tempArray[1]===''){
    return null;
  }
  return (1*tempArray[0])+(1*tempArray[1]);
}
export default SumTwoNumber;