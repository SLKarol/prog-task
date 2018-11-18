function arrayCounters(arrayCheck, maxNumber) {
  let resultArray = [];
  for (let i = 1; i <= maxNumber; i++) {
    resultArray.push(arrayCheck.filter(f => f === i).length);
  }
  return resultArray;
}
export default arrayCounters;
