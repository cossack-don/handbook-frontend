# Только для чтения типов / не обязательный параметр / объединение типов / по умолчанию параметры

Можно создавать элементы которые нельзя изменить. Для этого перед типом указывается ключевое слово readonly.
let user: readonly [string, number] = ['john', 31];

пример не обязательного типа - ? (на кортеже), можно использовать на других
let user: [string, number, boolean?];

Объединение типов
let test: string | number;

Значения параметров по умолчанию
function func(first: string, last: string = 'snow') { 
	return first + ' ' + last;
}
