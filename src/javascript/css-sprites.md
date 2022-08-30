# CSS-спрайты
CSS-спрайт – способ объединить много изображений в одно, чтобы:
- Сократить количество обращений к серверу.
- Загрузить несколько изображений сразу, включая те, которые понадобятся в будущем.
- Если у изображений сходная палитра, то объединённое изображение будет меньше по размеру, чем совокупность исходных картинок.


Шаг 4. Сдвинуть спрайт
Сдвиг фона background-position позволяет выбирать, какую именно часть спрайта видно.

В спрайте icons.gif изображения объединены так, что сдвиг на 16px покажет следующую иконку:

/*+ no-beautify */
.icon {
  width: 16px;
  height: 16px;
  float: left;
  background: url(icons.gif) no-repeat;
}

.open .icon {
  background-position: 0 -16px; /* вверх на 16px */
  cursor: pointer;
}

.closed .icon {
  background-position: 0 0px; /* по умолчанию */
  cursor: pointer;
}

.leaf .icon {
  background-position: 0 -32px; /* вверх на 32px */
  cursor: text;
}

![image](https://user-images.githubusercontent.com/71700914/187451326-31eecede-3dc6-43dd-816f-5a61e8497cb6.png)
