# Testing library for vue 3 


### Каркас теста
Подключаем библиотеку и достаем нужные нам методы 
import { render, screen, fireEvent } from '@testing-library/vue'; 
Подключаем нужный нам компонент который хотим проверить
import AppWidget from '@/AppWidget.vue';
import { render, screen, fireEvent } from '@testing-library/vue'; 
import AppWidget from '@/AppWidget.vue';

describe('AppWidget.vue', () => {

  it('Render AppWidgetStatus', () => {
  
    render(AppWidget);

        тут пишем код

  });
});

### Тест на присутствие текста в компоненте

// проверяем, есть ли такой текст в компоненте, иначе будет ошибка.
// должен  1 в 1 совпадать
expect(screen.getByText('Активный'));
import { render, screen, fireEvent } from '@testing-library/vue';
import AppWidget from '@/AppWidget.vue';

describe('AppWidget.vue', () => {
  it('Render AppWidgetStatus', () => {
  
    render(AppWidget);
    
    expect(screen.getByText('Активный'));
   
  });
});

### Тест по data-test-id

// Вешаем на нужный нам элемент атрибут data-testid="counter-days"
// (в верстке на div например) - например
// после заходим и пишем тест, присутствует ли он или нет, иначе будет ошибка

expect(screen.getByTestId('counter-days'));
import { render, screen, fireEvent } from '@testing-library/vue';
import AppWidget from '@/AppWidget.vue';

describe('AppWidget.vue', () => {
  it('Render AppWidgetStatus', () => {
  
    render(AppWidget);
    expect(screen.getByTestId('counter-days'));
  
  });
});

### Проверяем наличие css class-а

 // Получаю контейнер нашего компонента
const { container } = render(NavBar);
 
 // получаю конкретный элемент который хотим протестить
 const linkParent = container.querySelector('.linkParent');
 
 // проверяю весит ли на нашей ссылке, конкретный класс (linkParentActive) 
 if (linkParent !== undefined && linkParent !== null) {
   expect(linkParent.classList.contains('linkParentActive')).toBe(true);
 }


import { render, screen, fireEvent } from '@testing-library/vue';
import NavBar from '@/components/NavBar.vue';

describe('NavBar.vue', () => {
  it('Render component NavBar', () => {
  
    const { container } = render(NavBar);
    
    const linkParent = container.querySelector('.linkParent');

    if (linkParent !== undefined && linkParent !== null) {
      expect(linkParent.classList.contains('linkParentActive')).toBe(true);
    }

  });
});

### событие наведение мышки / уход мышки

// тут нужно обязательно ставить async + await
  it('Render AppWidgetStatus', async () => {
//асинхронно вызываем метод fireEvent (работает специально на события)
// и обращаемся какое событие тестируем
//например при наведение на кнопку, мы вешаем data-testid = badge-verification
//кнопка появляется и и проверяем на текст getByText

await fireEvent.mouseOver(screen.getByTestId('badge-verification'));
expect(screen.getByText('Необходимо подписать договор'));
//тоже самое, но проверяем если убираем мышку с элемента
//и проверяем нет ли такого текста queryByText

await fireEvent.mouseLeave(screen.getByTestId('badge-verification'));
expect(screen.queryByText('Необходимо подписать договор'));
import { render, screen, fireEvent } from '@testing-library/vue';
import AppWidget from '@/AppWidget.vue';

describe('AppWidget.vue', () => {

  it('Render AppWidgetStatus', async () => {
  
    render(AppWidget);

    await fireEvent.mouseOver(screen.getByTestId('badge-verification'));
    expect(screen.getByText('Необходимо подписать договор'));
    
    await fireEvent.mouseLeave(screen.getByTestId('badge-verification'));
    expect(screen.queryByText('Необходимо подписать договор'));

  });
});

### Событие клика на элемент

Проверка на наличие класса в элементе. Получение элемента из дом. Событие клик на элемент и проверяем что после события будет(наличие)
 // получаем контейнр нашего компонента
  const { container } = render(NavBar);
  
 // получаем нужный элемент в этом контейнере
 const childrenList = container.querySelector('.wrapperChildrenItems');
    
 // при клике на наш элемент, проверяем наличие текста children-1 =>
// когда появился наш элемент
 if (childrenList !== undefined && childrenList !== null) {
   await fireEvent.click(childrenList, screen.getAllByText('children-1'));
   await fireEvent.click(childrenList, screen.getAllByText('children-2'));
 }
import { render, screen, fireEvent } from '@testing-library/vue';
import NavBar from '@/components/NavBar.vue';

describe('NavBar.vue', () => {
  it('Render component NavBar', async () => {
    const { container } = render(NavBar);с
    
    const childrenList = container.querySelector('.wrapperChildrenItems');
    
    if (childrenList !== undefined && childrenList !== null) {
      await fireEvent.click(childrenList, screen.getAllByText('children-1'));
      await fireEvent.click(childrenList, screen.getAllByText('children-2'));
    }

  });
});

### доделать

expect(screen.getByRole('textbox)) 
1 можно явно указать на div роль компонента название роли
А так уже неявно они указаны в дом дереве (можно не писать) role="textbox"
поиск по placeholder у элемента - getByPlacegolderText
поиск в label текста - getByLabelText
ищет картинки по alt атрибуту - getByAltText
ищет по атрибуту value у элемента getByDisplayValue

если нет элемента в разметки лучше писать 
expect(screen.queryByText(/search/i).toBeNull()


для асинхронности async
например вначале нету текста в элементе, а позже запросом или как-то получили туда данные
expect(screen.queryByText(/search/i).toBeNull
expect(await screen.findByText(/search/i).toBeInTheDocument();

3 варианта поиска элементов на проверку
getBy - найти элемент
queryBy - показать что элемента нет в доме
findBy - изначально не было в дом, но при асинхронной операции появится 

если элеменов несколько добавляем AllBy

cписок утверждений - методы (на праверку на наличие чего-то у элемента)
отрицание - .not добавляем перед название (пример .not.toHaveClass

expect(screen.queryByText(/search/i).toHaveClass('nameClass') - проверяет класс у элемента

Нужно перевести эти все методы и записать сюда

FireEvent 
доделать с этого места 
https://www.youtube.com/watch?v=n79PMyqcCJ8



