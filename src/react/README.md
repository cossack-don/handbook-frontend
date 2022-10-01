# React

- <a href="https://github.com/cossack-don/handbook-frontend/blob/main/src/react/core-methods.md">Основные методы Core methods: Data, Methods, Computed, Watch , Life cycle, но на React Hooks</a>


- 🔷 Хуки с примерами https://my-js.org/docs/cheatsheet/react-hooks/  - отличная 📑
- 📂 Инфа для Vue developer 📗 при переходе на React developer 📘 - аналоги по функциям https://badtry.net/pochiemu-ia-priedpochitaiu-react-a-nie-vue-react-vs-vue/
<hr>



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

### ✅ v-if, v-else v-else-if vs if,else, else-if React

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

### ✅ Анимация v-Transitions vs React - её нет

React не имеет встроенных утилит для анимации. <br/>
Если вы ищете библиотеку для React чем-то похожую на Vue transition, <br/>
которая на самом деле ничего не анимирует, а  <br/>
только организует анимацию с помощью классов, обратите внимание на react-transition-group. <br/>



<hr>

- React - https://reactjs.org/ 
- React Routers - https://reactrouter.com/ru/main
- Redux - https://redux.js.org/ (state container)
- React ru book - https://reactdev.ru/

<br>
философия реакт - https://ru.reactjs.org/docs/thinking-in-react.html
<br>
Рекомендуемый набор инструментов
Команда React в первую очередь рекомендует следующие решения:
<br>
Если вы изучаете React или создаёте новое одностраничное приложение, используйте Create React App.
Если вы создаёте серверный сайт с Node.js, попробуйте Next.js.
Если вы создаёте статический контент-ориентированный сайт, попробуйте Gatsby.
Если вы создаёте библиотеку компонентов или интегрируетесь с существующей кодовой базой, попробуйте более гибкие наборы инструментов.
https://ru.reactjs.org/docs/create-a-new-react-app.html

react -> redux -> saga/thunk
роутер в любое время можно взять

