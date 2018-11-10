//--- Захватываю все разделы, кои будут учавствовать в роутере
import IndexInfo from "./App/IndexInfo.jsx";
import Help from "./App/Help.jsx";
import IndexString from "./App/String/IndexString.jsx";
import ReverseString from "./App/String/Reverse.jsx";
import CountChars from "./App/String/CountChars.jsx";
import CountVovels from "./App/String/CountVovels.jsx";
import IsPalindrome from "./App/String/IsPalindrome.jsx";
import IndexObject from "./App/Object/IndexObject.jsx";
import ToString from "./App/Object/ToString.jsx";
import IndexArray from "./App/Array/IndexArray.jsx";
import ArrayToString from "./App/Array/ArrayToString.jsx";
import IndexNumber from "./App/Number/IndexNumber.jsx";
import SummTwoNumbers from "./App/Number/SummTwoNumbers.jsx";
import IndexAsynchrony from "./App/Asynchrony/IndexAsynchrony.jsx";
import RSSReader from "./App/Asynchrony/RSSReader.jsx";
import DelayText from "./App/Asynchrony/DelayText.jsx";
import CheckExistTriangle from "./App/Number/CheckExistTriangle.jsx";
import LinearFunc from './App/Number/LinearFunc';

const ROUTES = [
  {
    path: "/",
    component: IndexInfo
  },
  {
    path: "/help",
    component: Help
  },
  {
    path: "/string",
    component: IndexString,
    LeftMenu: "String",
    routes: [
      {
        path: "/string/reverse",
        component: ReverseString,
        name: "Reverse string"
      },
      {
        path: "/string/countchars",
        component: CountChars,
        name: "Количество букв в слове"
      },
      {
        path: "/string/countvovels",
        component: CountVovels,
        name: "Статистика гласных букв в слове"
      },
      {
        path: "/string/ispalindrome",
        component: IsPalindrome,
        name: "Проверка на палиндром"
      }
    ]
  },
  {
    path: "/number",
    component: IndexNumber,
    LeftMenu: "Number",
    routes: [
      {
        path: "/number/summtwonumbers",
        component: SummTwoNumbers,
        name: "Сумма двух чисел"
      },
      {
        path: "/number/checkexisttriangle",
        component: CheckExistTriangle,
        name: "Проверка существования треугольника по трем сторонам"
      },
      {
        path: "/number/linearfunc",
        component: LinearFunc,
        name: "Линейная функция"
      }
    ]
  },
  {
    path: "/object",
    component: IndexObject,
    LeftMenu: "Object",
    routes: [
      {
        path: "/object/tostring",
        component: ToString,
        name: "Простой способ ToString"
      }
    ]
  },
  {
    path: "/array",
    component: IndexArray,
    LeftMenu: "Array",
    routes: [
      {
        path: "/array/arraytostring",
        component: ArrayToString,
        name: "Простой способ ToString"
      }
    ]
  },
  {
    path: "/asynchrony",
    component: IndexAsynchrony,
    LeftMenu: "Asynchrony",
    routes: [
      {
        path: "/asynchrony/rssreader",
        component: RSSReader,
        name: "Чтение RSS-ленты"
      },
      {
        path: "/asynchrony/delaytext",
        component: DelayText,
        name: "Текст с задержкой"
      }
    ]
  }
];
export default ROUTES;
