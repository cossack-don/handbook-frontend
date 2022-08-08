# Объекты в массиве - описание типов


### Массив с объектами Users

let arr: User[] = [];

interface User {
	name: string,
	age: number
}

arr.push({name: 'john', age: 30});
arr.push({name: 'eric', age: 40});

Итог:

arr = [
	{name: 'john', age: 30},
	{name: 'eric', age: 40}
];

### Массив с  датами

let arr: Date[] = [];

arr.push(new Date(2030, 11, 31));
arr.push(new Date(2020, 11, 31));

### Массив DOM элементов

let arr: HTMLElement[] = [];

let lst: NodeList = document.querySelectorAll('div');
let arr: HTMLElement[] = Array.from(lst);
