# Базовый пакет знаний по Front-end, Back-end разработки.


### <a href="https://cossack-don.github.io/handbook-frontend/" target="_blank">Handbook-frontend prodaction<a/>

## React - актуальное для заполнения <a href="https://github.com/cossack-don/handbook-frontend/tree/main/src/react" target="_blank">React docs</a>

### Разделы:
<ul>
    <li>JavaScript ES6</li>
    <li>Vue 3</li>
    <li>React</li>
    <li>TypeScript</li>
    <li>Unit Testing</li>
    <li>Интересных инструментов</li>
</ul>

### Разрабатывается на правилах коммитов (git commit -m "feat: number task - description commit):
<ul>
    <li>build - Изменения, влияющие на систему сборки или внешние зависимости (webpack, npm, gulp)</li>
    <li>ci - Изменения в конфигурационных файлах и сценариях CI</li>
    <li>docs - Меняется только документация</li>
    <li>feat - Новый функционал</li>
    <li>fix - Исправление бага</li>
    <li>perf - Изменение кода, повышающее производительность</li>
    <li>refactor - Изменение кода, которое не исправляет ошибку и не добавляет новую функцию.</li>
    <li>revert - Откат изменений</li>
    <li>style - Изменения кодстайла (табы, отступы, точки, запяты и тд.)</li>
    <li>test - Изменения касающиеся тестов</li>
    <li>chore - Все, что не подходит по типы выше</li>
</ul>

### Инструкция по deploy
1. находимся в main branch (local)
2. изменили файлы любые
3. сделали npm run build
4. git add . && git commit (сохранили исходники и собранный билд)
5. git push (отправили в удаленный repo-main-branch)
6. находимся так же в main branch (local)
7. git subtree push --prefix src/.vuepress/dist origin test
берём из main branch, нашу папку dist, а точней файлы, что  ней лежат
и заливаем в нужную нам ветку (src/.vuepress/dist - путь где лежит папка, test - имя ветки куда скопировать файлы)
