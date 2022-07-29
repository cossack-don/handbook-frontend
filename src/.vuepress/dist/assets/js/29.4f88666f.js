(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{304:function(t,e,s){"use strict";s.r(e);var a=s(16),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"типы-данных"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#типы-данных"}},[t._v("#")]),t._v(" Типы данных")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Тип")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("en")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("Описание")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Число")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("для любых чисел: целочисленных или чисел с плавающей точкой.")])]),t._v(" "),e("tr",[e("td",[t._v("Большие числа")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("BigInt")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("для целых чисел произвольной длины.")])]),t._v(" "),e("tr",[e("td",[t._v("Строка")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("cтрока может содержать ноль или больше символов, нет отдельного символьного типа.")])]),t._v(" "),e("tr",[e("td",[t._v("Булевый(логический)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("true/false, правда/неправда")])]),t._v(" "),e("tr",[e("td",[t._v("Пустое значение")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("для неизвестных значений – отдельный тип.")])]),t._v(" "),e("tr",[e("td",[t._v("Неопределённый")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("для неприсвоенных значений – отдельный тип.")])]),t._v(" "),e("tr",[e("td",[t._v("Объекты")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("для более сложных структур данных.")])]),t._v(" "),e("tr",[e("td",[t._v("Символы")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("symbol")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("для уникальных идентификаторов.")])])])]),t._v(" "),e("h2",{attrs:{id:"оператор-typeof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#оператор-typeof"}},[t._v("#")]),t._v(" Оператор typeof")]),t._v(" "),e("p",[t._v("Оператор typeof возвращает тип аргумента. Это полезно, когда мы хотим обрабатывать значения различных типов по-разному или просто хотим сделать проверку.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "undefined"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "number"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10n")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "bigint"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "boolean"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "string"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "symbol"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "object"  (1)')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "object"  (2) старая ошибка в самом JS')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "function"  (3)')]),t._v("\n")])])]),e("p",[t._v("Пример:")]),t._v(" "),e("iframe",{attrs:{src:"https://codepen.io/s-zhuravlev/embed/QWmdxZy?editors=1010",width:"100%",height:"300"}},[t._v("\n    Ваш браузер не поддерживает плавающие фреймы!\n ")])])}),[],!1,null,null,null);e.default=n.exports}}]);