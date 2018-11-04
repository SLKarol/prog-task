//--- Захватываю все разделы, кои будут учавствовать в роутере
import IndexInfo from "./App/IndexInfo.jsx";
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
import IndexNetwork from "./App/Network/IndexNetwork.jsx";
import RSSReader from "./App/Network/RSSReader.jsx";

const ROUTES = [
  {
    path: "/",
    component: IndexInfo
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
    path: "/network",
    component: IndexNetwork,
    LeftMenu: "Network",
    routes: [
      {
        path: "/network/rssreader",
        component: RSSReader,
        name: "Чтение RSS-ленты"
      }
    ]
  }
];
export default ROUTES;
