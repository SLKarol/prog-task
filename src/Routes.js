//--- Захватываю все разделы, кои будут учавствовать в роутере
import IndexInfo from "./App/IndexInfo.jsx";
import IndexString from "./App/String/IndexString.jsx";
import ReverseString from "./App/String/Reverse.jsx";

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
        name: "Reverse string",
      }
    ]
  }
];
export default ROUTES;
