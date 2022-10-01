# Работа внутри JSX

### ✅ v-for vs array.map и v-for vs Object.entries

```html
<template>
  <ul>
    <li v-for="(ingredient, index) in ingredients" :key="index">
      {{ ingredient }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['ingredients']
};
</script>
```

Array
```html
export default function Recipe({ ingredients }) {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  );
}
```

Objects
```html
export default function KeyValueList({ object }) {
  return (
    <ul>
      {Object.entries(object).map(([key, value]) => (
        <li key={key}>{value}</li>
      ))}
    </ul>
  );
}
```

### ✅ v-if, v-else v-else-if vs if,else vs else-if React

```html
<template>
  <article>
    <h1 v-if="awesome">Vue is awesome!</h1>
  </article>
</template>

<script>
export default {
  props: ['awesome']
};
</script>
```

<b>Оператор &&</b> предоставляет краткий способ написания оператора if.

```html
export default function Awesome({ awesome }) {
  return (
    <article>
      {awesome && <h1>React is awesome!</h1>};
    </article>
  );
}
</script>
```

Если вам нужно выполнение кода на else, тогда, вместо него, используйте <b>тернарное выражение.</b>
```html
export default function Awesome({ awesome }) {
  return (
    <article>
      {awesome ? (
        <h1>React is awesome!</h1>
      ) : (
        <h1>Oh no 😢</h1>
      )};
    </article>
}
```

Вы также можете полностью разделить эти две ветви и использовать подход с ранним возвратом.
```html
export default function Awesome({ awesome }) {
  if (!awesome) {
    return (
      <article>
        <h1>Oh no 😢</h1>
      </article>
    );
  }

  return (
    <article>
      <h1>React is awesome!</h1>
    </article>
  );
}
```
