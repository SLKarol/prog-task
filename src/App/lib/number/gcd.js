function gcd(...args) {
  // НОД
  const recurseDiv = (a, b) => {
    let r = a % b;
    if (r === 0) {
      return b;
    } else {
      return recurseDiv(b, r);
    }
  }
  let inputNumbers = args.sort();
  const re = recurseDiv(1*inputNumbers[1], 1*inputNumbers[0]);
  return re;
}
export default gcd;