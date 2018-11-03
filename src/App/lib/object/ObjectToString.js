/*
Преобразование объекта, например {home: 1, street: 'Мира'}
в строку "home: 1, street: 'Мира'"
*/
function ObjectToString(value) {
  const re = Object.keys(value).map(key => `${key}: ${typeof value[key]==='string' ? `'${value[key]}'` : `${value[key]}`}`);
  return `{${re.join(', ')}}`;
}
export default ObjectToString;