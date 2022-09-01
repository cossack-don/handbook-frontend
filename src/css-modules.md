# Css modules

draft - expample

Добавление class + второй по условию добавляем

    <a
        :href="parentItem.url"
        :class="[$style.linkParent, {[$style.linkParentActive]: parentItem.isActive}]"
        @click="() => showChildrenMenu(parentIndex)"
        @keyup.enter="() => showChildrenMenu(parentIndex)"
      >

### Список классов для css.modules
https://vuejs.org/api/sfc-css-features.html#scoped-css

import { useCssModule } from 'vue'

// inside setup() scope...
// default, returns classes for <style module>
useCssModule()

// named, returns classes for <style module="classes">
useCssModule('classes')
