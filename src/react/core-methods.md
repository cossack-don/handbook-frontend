# Список основных методов React

- Data - useState
- Methods - arrow-fucntions
- Computed - useMemo
- Watch - ?
- Life cycle - ?
- Events(События) v-on, @click vs onClick, onChange - React

## Data vs useState React Hook

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

```html
☑️ React
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

## Methods vs functions React

```html
✅ Vue
<template>
  <button onClick="doSomething">
    Do something!
  </button>
</template>

<script>
export default {
  methods: {
    doSomething() {
      // ...
    }
  }
};
</script>
```

В React вы можете объявить нативные функции внутри компонента, к которым можно обратиться.
```html
☑️ React
export default function ImportantButton() {
  function doSomething() {
    // ...
  }

  return (
    <button onClick={doSomething}>
      Do something!
    </button>
  );
}
```

##  Computed vs useMemo React Hook (Вычисляемые свойства)

 ```html
✅ Vue
<template>
  <p>{{ reversedMessage }}</p>
</template>

<script>
export default {
  props: ['message'],

  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  }
};
</script>
```

Если речь идет о производительности, вычисления могут быть завернуты в useMemo хук. <br/>
useMemo нужно передать функцию обратного вызова, которая возвращает вычисленный  <br/>
результат, и массив зависимостей. <br/>

 ```html
☑️ React
import { useMemo } from 'react';

export default function ReversedMessage({ message }) {
  const reversedMessage = useMemo(() => {
    return message.split('').reverse().join('');
  }, [message]);

  return <p>{reversedMessage}</p>;
}
```

## События (Events) v-on, @click vs onClick React

События, по сути, являются callback-ами, которые вызываются, когда что-то происходит <br/>
в дочернем компоненте. Vue предоставляет возможность "прослушивать" события с помощью <br/>
аннотации @, что является сокращением для директивы v-on. <br/>

 ```html
✅ Vue
<template>
  <form>
    <button type="button" @click="$emit('save')">
      Save
    </button>
    <button type="button" @click="$emit('publish')">
      Publish
    </button>
  </form>
</template>
```

События в React не особенного значения, они являются обычными props-функциями, <br/>
которые будут вызываться дочерним компонентом при определённом событии. <br/>

 ```html
☑️ React
export default function PostForm({ onSave, onPublish }) {
  return (
    <form>
      <button type="button" onClick={onSave}>
        Save
      </button>
      <button type="button" onClick={onPublish}>
        Publish
      </button>
    </form>
  );
}
```
