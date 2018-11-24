import gcd from './gcd';

function lcm(a, b) {
  // НОК
  return (a * b) / gcd(a, b);
}
export default lcm;