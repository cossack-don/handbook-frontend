# Правильное именование переменных

значение — существительное: cat, dog;
массив — существительное в множественном числе: cats, dogs;
класс — существительное с заглавной буквой: Cat, Dog;
константа — всё имя пишется заглавными буквами в стиле snake_case: MAXIMUM_FOOD, LIMIT_X;
обработчик — имя описывает событие, по которому он вызывается. Как правило, содержит префикс on или постфикс Handler: onButtonClick, formSendHandler.
функция — глагол: download, update;

### Переменные

#### Как правило, при создании имен для строковой переменной, используют существительное. Вам, и тому, кто будет читать ваш код, должно быть понятно, что находится в переменной по её названию.

const serverMessage = 'hello server'
const componentHtml = Hello
const login = 'username'
const password = 'qwerty'
const ACCESS_TOKEN = 'zzzzzz'

### Числовые переменные
#### Почти в каждом проекте приняты следующие правила.

количество (count)
код чего-либо (code)
размер (size, length)
номер (number)
const keyCode = 15
const numberFromEnd = 101
const maxWindowSize = 900
const minCharacterLength = 10
const newMessageCount = 3

### Логичным названием для булевой переменной — вопрос с ответом да или нет.

это (is)
содержит (has/contain)
может (can)
должен (shoud)
возможность (able)
const isPopupOpen = true;
const hasUpperLetters = true;
const containObject = false;
const shoudUpdate = false;
const disabled = true;

### Массивы
#### Это существительные во множественном числе, которые имеют окончание на s и es

const users = [{ name: 'Yury'}];
const letters = ['A', 'B', 'C'];
const codes = [21, 37];
Объекты
Не стоит дублировать название объекта в названии свойства или метода.
const user = {
    name: 'test',
    getName() {},
};

### Функции и методы
#### Для функций, используйте первое слово глагол.

init/initialize
compute
find
create (object, array…)
to (string, array…)
filter
const initApp = () => {};
const computeMaxHeight = () => {};
const findClosestElement = () => {};
const toString = () => {};
const filterUsers = () => {};

### Симметричные пары
#### Общие:
min/max
up/down
old/new
begin/end
first/last
next/previous
Для функций:
open/close
get/set
add/remove
create/destroy
start/stop
insert/delete
increment/decrement
show/hide
suspend/resume
