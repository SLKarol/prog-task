function bmi(height, weight) {
  const heightInM=height/100;
  const index = Math.round((weight / Math.pow(heightInM, 2)) * 10) / 10;
  let re = {
    index
  };
  switch (true) {
    case index < 18.5:
      re.eng = 'Underweight';
      re.rus = 'Недостаточная масса';
      break;
    case index >= 25 && index < 30:
      re.eng = 'Overweight';
      re.rus = 'Избыточная масса';
      break;
    case index >= 30:
      re.eng = 'Obesity';
      re.rus = 'Ожирение';
      break;
    default:
      re.eng = 'Normal weight';
      re.rus = 'Норма';
      break;
  }
  return re;
}
export default bmi;