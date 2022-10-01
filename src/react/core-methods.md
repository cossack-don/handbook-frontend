# Список основных методов React

#### Data vs useState React Hook

```html
✅ Vue
<template>
  <button @click="count++">
    You clicked me {{ count }} times.
  </button>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
};
</script>
```

useState, который возвращает массив из двух элементов: содержащий текущее значение состояния и функцию-сеттер.
```html
☑️ React
import { useState } from 'react';

export default function ButtonCounter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
</script>
```

Вы можете выбрать, желаете ли вы распределить состояние между несколькими вызовами useState, или оставить его в одном объекте.

```html
☑️ React
import { useState } from 'react';

export default function ProfileForm() {
  const [name, setName] = useState('Sebastian');
  const [email, setEmail] = useState('sebastian@spatie.be');

  // ...
}
```
☑️
```html
import { useState } from 'react';

export default function ProfileForm() {
  const [values, setValues] = useState({
    name: 'Sebastian',
    email: 'sebastian@spatie.be'
  });

  // ...
}
</script>
```
