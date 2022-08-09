# Встроенные объекты в TS (HTML, Date, Регулярки и д.р.)

Дата - пример

let date: Date = new Date;

let date: Date = new Date(2030, 11, 31);

Регулярное выражение - пример
let reg: RegExp = new RegExp('.+?');

HTML - Элементы. Их много и к каждому нужно обращаться по своему

let elem: HTMLElement = document.querySelector('div');
console.log(elem);

let lst: NodeList = document.querySelectorAll('div');
