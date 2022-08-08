# Массивы в объекте - описание типов

Объекты в значениях своих полей могут содержать не только примитивы, но и массивы.
Описание объекта (внутри массив) через объект

let prod: {
	name: string,
	colors: string[]
};


 prod = {
	name: 'notebook',
	colors: ['red', 'black', 'gray']
}

Описание объекта ( в нем массив) через интерфейс

interface Product {
	name: string,
	colors: string[]
};


let prod: Product = {
	name: 'notebook',
	colors: ['red', 'black', 'gray']
}
