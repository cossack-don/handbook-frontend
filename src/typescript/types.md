# Свои Типы

В TypeScript можно создавать псевдонимы типов. Это делается с помощью оператора type.

```typescript
type stumber = string | number;

Объявим переменную с нашим новым типом:

let test: stumber;

test = 123; или test = 'abc';
```
