# Массивы в объекте - описание типов

Объекты в значениях своих полей могут содержать не только примитивы, но и массивы. </br>
Описание объекта (внутри массив) через объект
```typescript
let prod: {
	name: string,
	colors: string[]
};

```

```typescript
 prod = {
	name: 'notebook',
	colors: ['red', 'black', 'gray']
}
```

Описание объекта ( в нем массив) через интерфейс
```typescript
interface Product {
	name: string,
	colors: string[]
};

let prod: Product = {
	name: 'notebook',
	colors: ['red', 'black', 'gray']
}
```
