/*
Преобразование массива [1,2,{now: true}]
в строку "[1,2,{now: true}]"
*/
import ObjectToString from './../object/ObjectToString';

function ArrayToString(valueArray) {
  let re = [];
  valueArray.forEach(element => {    
    if (typeof element === 'object') {
      re.push(ObjectToString(element));
    } else {
      re.push(element.toString());
    }
  });
  return `[${re.join(', ')}]`;
}
export default ArrayToString;