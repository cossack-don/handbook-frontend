# Кортежи

Кортеж представляет собой массив, каждый элемент которого имеет свой жестко заданный тип.


```typescript
let user: [string, number] = ['john', 31];
```

Деструктуризация кортежа

```typescript
let user: [string, number] = ['john', 31];

// Давайте разобьем его части в переменные:
let [name, age] = user;
```
Оператор REST (rest) - это ... три точки
```typescript
// Наш массив
const number = [1, 2, 3, 4, 5];

// вставляем массив в другой массив
let tpl: [string, ...number[]];

// Результат
tpl = ['str', 1, 2, 3, 4, 5];
```