# Циклы

В цикле for нужно указывать тип счетчика:
```typescript
for (let i: number = 0; i <= 10; i++) { 
	console.log(i);
}
```

for-in - тип переменной для ключа не указывается:
```typescript
let arr: number[] = [1, 2, 3, 4, 5]; 

for (let elem of arr) {
	console.log(elem);
}
```
