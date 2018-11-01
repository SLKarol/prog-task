"use strict";
// Количество гласных букв в строке
// Вывод: [{letter: 'a', count: 1},...]
function countVovels(inputString) {
  const Vovels='аеёийоуыэюяaeiouy'.split('');  
  let re = [];
  for(let i=0;i<Vovels.length;i++)
  {
    let l=inputString.match(new RegExp(Vovels[i], "g"));
    if(l){
      re.push({letter: Vovels[i], count: l.length});
    }
  }
  return re;
}

if (typeof module !== "undefined" && module.hasOwnProperty("exports")) {
  module.exports = countVovels;
}
