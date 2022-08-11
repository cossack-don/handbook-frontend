(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{283:function(t,n,s){"use strict";s.r(n);var e=s(16),a=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"правильное-именование-переменных"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#правильное-именование-переменных"}},[t._v("#")]),t._v(" Правильное именование переменных")]),t._v(" "),n("p",[t._v("значение — существительное: cat, dog;\nмассив — существительное в множественном числе: cats, dogs;\nкласс — существительное с заглавной буквой: Cat, Dog;\nконстанта — всё имя пишется заглавными буквами в стиле snake_case: MAXIMUM_FOOD, LIMIT_X;\nобработчик — имя описывает событие, по которому он вызывается. Как правило, содержит префикс on или постфикс Handler: onButtonClick, formSendHandler.\nфункция — глагол: download, update;")]),t._v(" "),n("h3",{attrs:{id:"переменные"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#переменные"}},[t._v("#")]),t._v(" Переменные")]),t._v(" "),n("h4",{attrs:{id:"как-правило-при-создании-имен-для-строковои-переменнои-используют-существительное-вам-и-тому-кто-будет-читать-ваш-код-должно-быть-понятно-что-находится-в-переменнои-по-ее-названию"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#как-правило-при-создании-имен-для-строковои-переменнои-используют-существительное-вам-и-тому-кто-будет-читать-ваш-код-должно-быть-понятно-что-находится-в-переменнои-по-ее-названию"}},[t._v("#")]),t._v(" Как правило, при создании имен для строковой переменной, используют существительное. Вам, и тому, кто будет читать ваш код, должно быть понятно, что находится в переменной по её названию.")]),t._v(" "),n("p",[t._v("const serverMessage = 'hello server'\nconst componentHtml = Hello\nconst login = 'username'\nconst password = 'qwerty'\nconst ACCESS_TOKEN = 'zzzzzz'")]),t._v(" "),n("h3",{attrs:{id:"числовые-переменные"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#числовые-переменные"}},[t._v("#")]),t._v(" Числовые переменные")]),t._v(" "),n("h4",{attrs:{id:"почти-в-каждом-проекте-приняты-следующие-правила"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#почти-в-каждом-проекте-приняты-следующие-правила"}},[t._v("#")]),t._v(" Почти в каждом проекте приняты следующие правила.")]),t._v(" "),n("p",[t._v("количество (count)\nкод чего-либо (code)\nразмер (size, length)\nномер (number)\nconst keyCode = 15\nconst numberFromEnd = 101\nconst maxWindowSize = 900\nconst minCharacterLength = 10\nconst newMessageCount = 3")]),t._v(" "),n("h3",{attrs:{id:"логичным-названием-для-булевои-переменнои-вопрос-с-ответом-да-или-нет"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#логичным-названием-для-булевои-переменнои-вопрос-с-ответом-да-или-нет"}},[t._v("#")]),t._v(" Логичным названием для булевой переменной — вопрос с ответом да или нет.")]),t._v(" "),n("p",[t._v("это (is)\nсодержит (has/contain)\nможет (can)\nдолжен (shoud)\nвозможность (able)\nconst isPopupOpen = true;\nconst hasUpperLetters = true;\nconst containObject = false;\nconst shoudUpdate = false;\nconst disabled = true;")]),t._v(" "),n("h3",{attrs:{id:"массивы"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#массивы"}},[t._v("#")]),t._v(" Массивы")]),t._v(" "),n("h4",{attrs:{id:"это-существительные-во-множественном-числе-которые-имеют-окончание-на-s-и-es"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#это-существительные-во-множественном-числе-которые-имеют-окончание-на-s-и-es"}},[t._v("#")]),t._v(" Это существительные во множественном числе, которые имеют окончание на s и es")]),t._v(" "),n("p",[t._v("const users = [{ name: 'Yury'}];\nconst letters = ['A', 'B', 'C'];\nconst codes = [21, 37];\nОбъекты\nНе стоит дублировать название объекта в названии свойства или метода.\nconst user = {\nname: 'test',\ngetName() {},\n};")]),t._v(" "),n("h3",{attrs:{id:"функции-и-методы"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#функции-и-методы"}},[t._v("#")]),t._v(" Функции и методы")]),t._v(" "),n("h4",{attrs:{id:"для-функции-используите-первое-слово-глагол"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#для-функции-используите-первое-слово-глагол"}},[t._v("#")]),t._v(" Для функций, используйте первое слово глагол.")]),t._v(" "),n("p",[t._v("init/initialize\ncompute\nfind\ncreate (object, array…)\nto (string, array…)\nfilter\nconst initApp = () => {};\nconst computeMaxHeight = () => {};\nconst findClosestElement = () => {};\nconst toString = () => {};\nconst filterUsers = () => {};")]),t._v(" "),n("h3",{attrs:{id:"симметричные-пары"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#симметричные-пары"}},[t._v("#")]),t._v(" Симметричные пары")]),t._v(" "),n("h4",{attrs:{id:"общие"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#общие"}},[t._v("#")]),t._v(" Общие:")]),t._v(" "),n("p",[t._v("min/max\nup/down\nold/new\nbegin/end\nfirst/last\nnext/previous\nДля функций:\nopen/close\nget/set\nadd/remove\ncreate/destroy\nstart/stop\ninsert/delete\nincrement/decrement\nshow/hide\nsuspend/resume")])])}),[],!1,null,null,null);n.default=a.exports}}]);