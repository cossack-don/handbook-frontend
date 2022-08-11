# Enum - перечисления

Перечисления - это удобный способ создания наборов значений, количество и названия которых известны заранее и не должны изменяться. Для создания перечислений используется ключевое слово enum.
```typescript
enum Season { 
    Winter, 
    Spring, 
    Summer, 
    Autumn,
};
```


Получение по ключу
```typescript
let current: string = Season[0];

console.log(current); // 'Winter'
```

Получение по значению
```typescript
let current: number = Season.Winter;
console.log(current); // 0
```

Указание номеров, можно нумеровать не с 0
```typescript
enum Season { 
	Winter = 1, 
	Spring = 2, 
	Summer = 3, 
	Autumn = 4 
};
```
  
Не обязательно указывать всем номера ключей
```typescript
enum Season { 
	Winter = 1, 
	Spring, 
	Summer, 
	Autumn 
}; 
```

Ключами могут быть не только числа, но и строки
```typescript
enum Season { 
	Winter = 'Зима', 
	Spring = 'Весна',
	Summer = 'Лето', 
	Autumn = 'Осень'
}
```