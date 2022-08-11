# Функции
Описание параметров функции и описание типа, что функция должна возвращать.
```typescript
function func (a: number, b: number): number {
	return a + b;
}
```

Если функций без return (ничего не возвращает) - пишем void.
Применяется так же к ошибкам - throw new Error('текст исключения');
```typescript
function func (test: string): void {
	alert(test);
}
```

Свой тип с функцией
```typescript
type Func = (x: number, y: number) => number;

let func1: Func = function(a: number, b: number): number {
	return a + b;
};
```

Функции-коллбэки с описанием типов
```typescript
function make(num: number, func: (num: number) => number): number {
	return func(num);
}

make(3, function(num: number): number {
	return num ** 2;
});
```

Стрелочные функции
```typescript
let func = (num: number): number => num ** 2;
```