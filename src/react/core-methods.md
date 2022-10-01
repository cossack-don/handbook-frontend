# Список основных методов React

- Data - useState
- Methods - Arrow Fucntions () => 
- Computed - useMemo
- Watch - useEffect
- Life cycle - ?
- Events(События) v-on, @click vs onClick, onChange - React
- Vue Props vs React Props

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

## Vue Props vs React Props

Props в React ведут себя так же, как и Vue. <br/>
Одна небольшая разница: компоненты React не наследуют неизвестные атрибуты.

```html
✅ Vue
<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  props: ['title'],
};
</script>
```

```html
☑️ React
<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  props: ['title'],
};
</script>
```

Использование выражений в качестве props в Vue возможно с префиксом :, <br/>
который является псевдонимом для директивы v-bind. <br/>
React использует фигурные скобки для динамических значений. <br/>

```html
✅ Vue
<template>
  <post-title :title="title" />
</template>

<script>
export default {
  props: ['title'],
};
</script>
```

```html
☑️ React
export default function Post({ title }) {
  return <PostTitle title={title} />;
}
```

## Watch vs useEffect Hook

Наблюдатели идейно похожи на хуки на протяжении всего жизненного цикла: <br/>
"Когда Х случается, делай Y". Наблюдателей концептуально не существует в React, <br/>
но вы можете достичь того же самого эффекта с помощью useEffect <br/>

```html
✅ Vue
<template>
  <input type="checkbox" v-model="checked" />
</template>

<script>
export default {
  data() {
    return {
      checked: false
    }
  },

  watch: {
    checked(checked) {
      syncWithServer(checked);
    }
  },

  methods: {
    syncWithServer(checked) {
      // ...
    }
  }
};
</script>
```

```html
☑️ React
import { useEffect, useState } from 'react';

export default function AjaxToggle() {
  const [checked, setChecked] = useState(false);

  function syncWithServer(checked) {
    // ...
  }

  useEffect(() => {
    syncWithServer(checked);
  }, [checked]);

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
}
```

⛔ Обратите внимание, что useEffect также запустится при первом рендеринге. <br/>
Это то же самое, что и использование параметра immediate в Vue watcher. <br/>

Если вы не хотите, чтобы эффект работал при первом рендере, <br/>
вам нужно будет создать ref, чтобы определить, случился первый рендеринг или нет. <br/>

```html
☑️ React
import { useEffect, useRef, useState } from 'react';

export default function AjaxToggle() {
  const [checked, setChecked] = useState(false);
  const firstRender = useRef(true);

  function syncWithServer(checked) {
    // ...
  }

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    syncWithServer(checked);
  }, [checked]);

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
}
```

## Life cycle vs
