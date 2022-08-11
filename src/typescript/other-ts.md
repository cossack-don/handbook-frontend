# Только для чтения типов / не обязательный параметр / объединение типов / по умолчанию параметры

Можно создавать элементы которые нельзя изменить. Для этого перед типом указывается ключевое слово readonly.

```typescript
let user: readonly [string, number] = ['john', 31];
```

пример не обязательного типа - ? (на кортеже), можно использовать на других
```typescript
let user: [string, number, boolean?];
```

Объединение типов
```typescript
let test: string | number;
```

Значения параметров по умолчанию
```typescript
function func(first: string, last: string = 'snow') { 
	return first + ' ' + last;
}
```