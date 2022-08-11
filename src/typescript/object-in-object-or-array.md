# Объекты в объектах/массивах - описание типов

Объекты могут иметь внутри себя структуру любой вложенности и эта структура может быть описана при объявлении объекта или в интерфейсе.

Описание объекта и вложенного в него объекта
```typescript
interface User {
	name: string,
	age: number,
	parents: {
		mother: string,
		father: string
	}
}

let user: User = {
	name: 'john',
	age: 30,
	parents: {
		mother: 'jane',
		father: 'eric'
	}
}
```

Описание объекта и вложенного в него массива
```typescript
interface User {
	name: string,
	age: number,
	parents: string[]
}

let user: User = {
	name: 'john',
	age: 30,
	parents: ['one', 'two', 'three']
}
```

Пусть у нас есть интерфейс Period, описывающий объект, хранящий в себе две даты встроенного в JavaScript класса Date:
```typescript
interface Period {
	date1: Date,
	date2: Date
};
```

```typescript
let period: Period = {
	date1: new Date(2030, 11, 31),
	date2: new Date(2020, 11, 31)
};
```

Описание объект через интерфейс - возможность №2
```typescript
Пример - 1

iterface City {
	name: string
}

interface User {
	name: string,
	age: number,
	city: City
}

let city: City = { name: 'london' };
let user: User = { name: 'john', age: 30, city: city };
```

```typescript
Вариант - 2
Не обязательно для города создавать отдельную переменную.
		
let user: User = {
	name: 'john',
	age: 30,
	city: {name: 'london'}
};
```