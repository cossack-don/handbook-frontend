# Список технических вопросов с собеседований (JavaScript ES6+)
https://habr.com/ru/post/486820/


Вопросы:<br>
<a href="#1">1. В чем разница между null и undefined?</a><br>
<a href="#2">2. Для чего используется оператор "&amp;&amp;"?</a><br>
<a href="#3">3. Для чего используется оператор "||"?</a><br>
<a href="#4">4. Является ли использование унарного плюса (оператор "+") самым быстрым способом преобразования строки в число?</a><br>
<a href="#5">5. Что такое DOM?</a><br>
<a href="#6">6. Что такое распространение события (Event Propogation)?</a><br>
<a href="#7">7. Что такое всплытие события (Event Bubbling)?</a><br>
<a href="#8">8. Что такое погружение события (Event Capturing)?</a><br>
<a href="#9">9. В чем разница между методами event.preventDefault() и event.stopPropagation()?</a><br>
<a href="#10">10. Как узнать об использовании метода event.preventDefault()?</a><br>
<a href="#11">11. Почему obj.someprop.x приводит к ошибке?</a><br>
<a href="#12">12. Что такое цель события или целевой элемент (event.target)?</a><br>
<a href="#13">13. Что такое текущая цель события (event.currentTarget)?</a><br>
<a href="#14">14. В чем разница между операторами "==" и "==="?</a><br>
<a href="#15">15. Почему результатом сравнения двух похожих объектов является false?</a><br>
<a href="#16">16. Для чего используется оператор "!!"?</a><br>
<a href="#17">17. Как записать несколько выражений в одну строку?</a><br>
<a href="#18">18. Что такое поднятие (Hoisting)?</a><br>
<a href="#19">19. Что такое область видимости (Scope)?</a><br>
<a href="#20">20. Что такое замыкание (Closures)?</a><br>
<a href="#21">21. Какие значения в JS являются ложными?</a><br>
<a href="#22">22. Как проверить, является ли значение ложным?</a><br>
<a href="#23">23. Для чего используется директива «use strict»?</a><br>
<a href="#24">24. Какое значение имеет this?</a><br>
<a href="#25">25. Что такое прототип объекта?</a><br>
<a href="#26">26. Что такое IIFE?</a><br>
<a href="#27">27. Для чего используется метод Function.prototype.apply?</a><br>
<a href="#28">28. Для чего используется метод Function.prototype.call?</a><br>
<a href="#29">29. В чем разница между методами call и apply?</a><br>
<a href="#30">30. Для чего используется метод Function.prototype.bind?</a><br>
<a href="#31">31. Что такое функциональное программирование и какие особенности JS позволяют говорить о нем как о функциональном языке программирования?</a><br>
<a href="#32">32. Что такое функции высшего порядка (Higher Order Functions)?</a><br>
<a href="#33">33. Почему функции в JS называют объектами первого класса (First-class Objects)?</a><br>
<a href="#34">34. Как бы Вы реализовали метод Array.prototype.map?</a><br>
<a href="#35">35. Как бы Вы реализовали метод Array.prototype.filter?</a><br>
<a href="#36">36. Как бы Вы реализовали метод Array.prototype.reduce?</a><br>
<a href="#37">37. Что такое объект arguments?</a><br>
<a href="#38">38. Как создать объект, не имеющий прототипа?</a><br>
<a href="#39">39. Почему в представленном коде переменная b становится глобальной при вызове функции?</a><br>
<a href="#40">40. Что такое ECMAScript?</a><br>
<a href="#41">41. Что нового привнес в JS стандарт ES6 или ECMAScript2015?</a><br>
<a href="#42">42. В чем разница между ключевыми словами «var», «let» и «const»?</a><br>
<a href="#43">43. Что такое стрелочные функции (Arrow Functions)?</a><br>
<a href="#44">44. Что такое классы (Classes)?</a><br>
<a href="#45">45. Что такое шаблонные литералы (Template Literals)?</a><br>
<a href="#46">46. Что такое деструктуризация объекта (Object Destructuring)?</a><br>
<a href="#47">47. Что такое модули (Modules)?</a><br>
<a href="#48">48. Что такое объект Set?</a><br>
<a href="#49">49. Что такое функция обратного вызова (Callback Function)?</a><br>
<a href="#50">50. Что такое промисы (Promises)?</a><br>
<a href="#51">51. Что такое async/await?</a><br>
<a href="#52">52. В чем разница между spread-оператором и rest-оператором?</a><br>
<a href="#53">53. Что такое параметры по умолчанию (Default Parameters)?</a><br>
<a href="#54">54. Что такое объектная обертка (Wrapper Objects)?</a><br>
<a href="#55">55. В чем разница между явным и неявным преобразованием или приведением к типу (Implicit and Explicit Coercion)?</a><br>
<a href="#56">56. Что такое NaN? Как проверить, является ли значение NaN?</a><br>
<a href="#57">57. Как проверить, является ли значение массивом?</a><br>
<a href="#58">58. Как проверить, что число является четным, без использования деления по модулю или деления с остатком (оператора "%")?</a><br>
<a href="#59">59. Как определить наличие свойства в объекте?</a><br>
<a href="http://60" rel="nofollow">60. Что такое AJAX?</a><br>
<a href="#61">61. Как в JS создать объект?</a><br>
<a href="#62">62. В чем разница между методами Object.freeze и Object.seal?</a><br>
<a href="#63">63. В чем разница между оператором «in» и методом hasOwnProperty?</a><br>
<a href="#64">64. Какие приемы работы с асинхронным кодом в JS Вы знаете?</a><br>
<a href="#65">65. В чем разница между обычной функцией и функциональным выражением?</a><br>
<a href="#66">66. Как в JS вызвать функцию?</a><br>
<a href="#67">67. Что такое запоминание или мемоизация (Memoization)?</a><br>
<a href="#68">68. Как бы Вы реализовали вспомогательную функцию запоминания?</a><br>
<a href="#69">69. Почему typeof null возвращает object? Как проверить, является ли значение null?</a><br>
<a href="#70">70. Для чего используется ключевое слово «new»?</a><br>
<br>
<a name="1"></a><h4>1. В чем разница между null и undefined?</h4><br>
Для начала давайте поговорим о том, что у них общего.<br>
<br>
Во-первых, они принадлежат к 7 «примитивам» (примитивным типам) JS:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">let</span> primitiveTypes = [<span class="hljs-string">'string'</span>, <span class="hljs-string">'number'</span>, <span class="hljs-string">'null'</span>, <span class="hljs-string">'undefined'</span>, <span class="hljs-string">'boolean'</span>, <span class="hljs-string">'symbol'</span>, <span class="hljs-string">'bigint'</span>]
</code></pre><br>
Во-вторых, они являются ложными значениями, т.е. результатом их преобразования в логическое значение с помощью Boolean() или оператора "!!" является false:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-built_in">console</span>.log(!!<span class="hljs-literal">null</span>) <span class="hljs-comment">// false</span>
<span class="hljs-built_in">console</span>.log(!!<span class="hljs-literal">undefined</span>) <span class="hljs-comment">// false</span>

<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Boolean</span>(<span class="hljs-literal">null</span>)) <span class="hljs-comment">// false</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Boolean</span>(<span class="hljs-literal">undefined</span>)) <span class="hljs-comment">// false</span>
</code></pre><br>
Ладно, теперь о различиях.<br>
<br>
undefined («неопределенный») представляет собой значение по умолчанию:<br>
<ul>
<li>переменной, которой не было присвоено значения, т.е. объявленной, но не инициализированной переменной;</li>
<li>функции, которая ничего не возвращает явно, например, console.log(1);</li>
<li>несуществующего свойства объекта.</li>
</ul><br>
В указанных случаях движок JS присваивает значение undefined.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">let</span> _thisIsUndefined
<span class="hljs-keyword">const</span> doNothing = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {}
<span class="hljs-keyword">const</span> someObj = {
    <span class="hljs-attr">a</span>: <span class="hljs-string">'ay'</span>,
    <span class="hljs-attr">b</span>: <span class="hljs-string">'bee'</span>,
    <span class="hljs-attr">c</span>: <span class="hljs-string">'si'</span>
}
<span class="hljs-built_in">console</span>.log(_thisIsUndefined) <span class="hljs-comment">// undefined</span>
<span class="hljs-built_in">console</span>.log(doNothing()) <span class="hljs-comment">// undefined</span>
<span class="hljs-built_in">console</span>.log(someObj[<span class="hljs-string">'d'</span>]) <span class="hljs-comment">// undefined</span>
</code></pre><br>
null — это «значение отсутствия значения». null — это значение, которое присваивается переменной явно. В примере ниже мы получаем null, когда метод fs.readFile отрабатывает без ошибок:<br>
<br>
<pre><code class="javascript hljs">fs.readFile(<span class="hljs-string">'path/to/file'</span>, (e, data) =&gt; {
    <span class="hljs-built_in">console</span>.log(e) <span class="hljs-comment">// здесь мы получаем null</span>
<span class="hljs-keyword">if</span>(e) {
    <span class="hljs-built_in">console</span>.log(e)
}
    <span class="hljs-built_in">console</span>.log(data)
})
</code></pre><br>
При сравнении null и undefined мы получаем true, когда используем оператор "==", и false при использовании оператора "===". О том, почему так происходит, см. ниже.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-built_in">console</span>.log(<span class="hljs-literal">null</span> == <span class="hljs-literal">undefined</span>) <span class="hljs-comment">// true</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-literal">null</span> === <span class="hljs-literal">undefined</span>) <span class="hljs-comment">// false</span>
</code></pre><br>
<a name="2"></a><h4>2. Для чего используется оператор "&amp;&amp;"?</h4><br>
Оператор "&amp;&amp;" (логическое и) находит и возвращает первое ложное значение либо последний операнд, когда все значения истинные. Он использует короткое замыкание во избежание лишних затрат:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-built_in">console</span>.log(<span class="hljs-literal">false</span> &amp;&amp; <span class="hljs-number">1</span> &amp;&amp; []) <span class="hljs-comment">// false</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">' '</span> &amp;&amp; <span class="hljs-literal">true</span> &amp;&amp; <span class="hljs-number">5</span>) <span class="hljs-comment">// 5</span>
</code></pre><br>
С оператором «if»:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> router: Router = Router()

router.get(<span class="hljs-string">'/endpoint'</span>, (req: Request, <span class="hljs-attr">res</span>: Response) =&gt; {
    <span class="hljs-keyword">let</span> conMobile: PoolConnection
    <span class="hljs-keyword">try</span> {
        <span class="hljs-comment">// операции с базой данных</span>
    } <span class="hljs-keyword">catch</span> (e) {
        <span class="hljs-keyword">if</span> (conMobile) {
            conMobile.release()
        }
    }
})
</code></pre><br>
То же самое с оператором "&amp;&amp;":<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> router: Router = Router()

router.get(<span class="hljs-string">'/endpoint'</span>, (req: Request, <span class="hljs-attr">res</span>: Response) =&gt; {
    <span class="hljs-keyword">let</span> conMobile: PoolConnection
    <span class="hljs-keyword">try</span> {
        <span class="hljs-comment">// операции с базой данных</span>
    } <span class="hljs-keyword">catch</span> (e) {
        conMobile &amp;&amp; conMobile.release()
    }
})
</code></pre><br>
<a name="3"></a><h4>3. Для чего используется оператор "||"?</h4><br>
Оператор "||" (логическое или) находит и возвращает первое истинное значение. Он также использует короткое замыкание. Данный оператор использовался для присвоения параметров по умолчанию в функциях до того, как параметры по умолчанию были стандартизированы в ES6.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-built_in">console</span>.log(<span class="hljs-literal">null</span> || <span class="hljs-number">1</span> || <span class="hljs-literal">undefined</span>) <span class="hljs-comment">// 1</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">logName</span>(<span class="hljs-params">name</span>) </span>{
    <span class="hljs-keyword">let</span> n = name || Mark
    <span class="hljs-built_in">console</span>.log(n)
}

logName() <span class="hljs-comment">// Mark</span>
</code></pre><br>
<a name="4"></a><h4>4. Является ли использование унарного плюса (оператор "+") самым быстрым способом преобразования строки в число?</h4><br>
Согласно <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus" rel="nofollow">MDN</a> оператор "+" действительно является самым быстрым способом преобразования строки в число, поскольку он не выполняет никаких операций со значением, которое является числом.<br>
<br>
<a name="5"></a><h4>5. Что такое DOM?</h4><br>
DOM или Document Object Model (объектная модель документа) — это прикладной программный интерфейс (API) для работы с HTML и XML документами. Когда браузер первый раз читает («парсит») HTML документ, он формирует большой объект, действительно большой объект, основанный на документе — DOM. DOM представляет собой древовидную структуру (дерево документа). DOM используется для взаимодействия и изменения самой структуры DOM или его отдельных элементов и узлов.<br>
<br>
Допустим, у нас есть такой HTML:<br>
<br>
<pre><code class="xml hljs"><span class="hljs-meta">&lt;!DOCTYPE <span class="hljs-meta-keyword">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"en"</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">http-equiv</span>=<span class="hljs-string">"X-UA-Compatible"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"ie=edge"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Document Object Model<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre><br>
DOM этого HTML выглядит так:<br>
<br>
<img src="https://habrastorage.org/r/w1560/webt/ax/cg/id/axcgidsa8fghreeuyvbhfpga6yo.png" data-src="https://habrastorage.org/webt/ax/cg/id/axcgidsa8fghreeuyvbhfpga6yo.png"><br>
<br>
В JS DOM представлен объектом Document. Объект Document имеет большое количество методов для работы с элементами, их созданием, модификацией, удалением и т.д.<br>
<br>
<a name="6"></a><h4>6. Что такое распространение события (Event Propagation)?</h4><br>
Когда какое-либо событие происходит в элементе DOM, оно на самом деле происходит не только в нем. Событие «распространяется» от объекта Window до вызвавшего его элемента (event.target). При этом событие последовательно пронизывает (затрагивает) всех предков целевого элемента. Распространение события имеет три стадии или фазы:<br>
<ol>
<li>Фаза погружения (захвата, перехвата) — событие возникает в объекте Window и опускается до цели события через всех ее предков.</li>
<li>Целевая фаза — это когда событие достигает целевого элемента.</li>
<li>Фаза всплытия — событие поднимается от event.target, последовательно проходит через всех его предков и достигает объекта Window.</li>
</ol><br>
<img src="https://habrastorage.org/r/w1560/webt/a3/9x/67/a39x67wkxdmcyzj-it5m2jmfxgg.png" data-src="https://habrastorage.org/webt/a3/9x/67/a39x67wkxdmcyzj-it5m2jmfxgg.png"><br>
<br>
Подробнее о распространении событий можно почитать <a href="https://learn.javascript.ru/bubbling-and-capturing" rel="nofollow">здесь</a> и <a href="https://www.w3.org/TR/DOM-Level-3-Events/#event-flow" rel="nofollow">здесь</a>.<br>
<br>
<a name="7"></a><h4>7. Что такое всплытие события?</h4><br>
Когда событие происходит в элементе DOM, оно затрагивает не только этот элемент. Событие «всплывает» (подобно пузырьку воздуха в воде), переходит от элемента, вызвавшего событие (event.target), к его родителю, затем поднимается еще выше, к родителю родителя элемента, пока не достигает объекта Window.<br>
<br>
Допустим, у нас есть такая разметка:<br>
<br>
<pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grandparent"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"parent"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"child"</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><br>
И такой JS:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addEvent</span>(<span class="hljs-params">el, event, callback, isCapture = false</span>) </span>{
    <span class="hljs-keyword">if</span> (!el || !event || !callback || <span class="hljs-keyword">typeof</span> callback !== <span class="hljs-string">'function'</span>) <span class="hljs-keyword">return</span>

    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> el === <span class="hljs-string">'string'</span>) {
        el = <span class="hljs-built_in">document</span>.querySelector(el)
    }
    el.addEventListener(event, callback, isCapture)
}

addEvent(<span class="hljs-built_in">document</span>, <span class="hljs-string">'DOMContentLoaded'</span>, () =&gt; {
    <span class="hljs-keyword">const</span> child = <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">'.child'</span>)
    <span class="hljs-keyword">const</span> parent = <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">'.parent'</span>)
    <span class="hljs-keyword">const</span> grandparent = <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">'.grandparent'</span>)

    addEvent(child, <span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'child'</span>)
    })

    addEvent(parent, <span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'parent'</span>)
    })

    addEvent(grandparent, <span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'grandparent'</span>)
    })

    addEvent(<span class="hljs-string">'html'</span>, <span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'html'</span>)
    })

    addEvent(<span class="hljs-built_in">document</span>, <span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'document'</span>)
    })

    addEvent(<span class="hljs-built_in">window</span>, <span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'window'</span>)
    })
})
</code></pre><br>
У метода addEventListener есть третий необязательный параметр — useCapture. Когда его значение равняется false (по умолчанию), событие начинается с фазы всплытия. Когда его значение равняется true, событие начинается с фазы погружения (для «прослушивателей» событий, прикрепленных к цели события, событие находится в целевой фазе, а не в фазах погружения или всплытия. События в целевой фазе инициируют все прослушиватели на элементе в том порядке, в котором они были зарегистрированы независимо от параметра useCapture — прим. пер.). Если мы кликнем по элементу child, в консоль будет выведено: child, parent, grandparent, html, document, window. Вот что такое всплытие события.<br>
<br>
<a name="8"></a><h4>8. Что такое погружение события?</h4><br>
Когда событие происходит в элементе DOM, оно происходит не только в нем. В фазе погружения событие опускается от объекта Window до цели события через всех его предков.<br>
<br>
Разметка:<br>
<br>
<pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grandparent"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"parent"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"child"</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><br>
JS:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addEvent</span>(<span class="hljs-params">el, event, callback, isCapture = false</span>) </span>{
    <span class="hljs-keyword">if</span> (!el || !event || !callback || <span class="hljs-keyword">typeof</span> callback !== <span class="hljs-string">'function'</span>) <span class="hljs-keyword">return</span>

    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> el === <span class="hljs-string">'string'</span>) {
        el = <span class="hljs-built_in">document</span>.querySelector(el);
    }
    el.addEventListener(event, callback, isCapture)
}

addEvent(<span class="hljs-built_in">document</span>, <span class="hljs-string">'DOMContentLoaded'</span>, () =&gt; {
    <span class="hljs-keyword">const</span> child = <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">'.child'</span>)
    <span class="hljs-keyword">const</span> parent = <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">'.parent'</span>)
    <span class="hljs-keyword">const</span> grandparent = <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">'.grandparent'</span>)

    addEvent(child, <span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'child'</span>);
    }, <span class="hljs-literal">true</span>)

    addEvent(parent, <span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'parent'</span>)
    }, <span class="hljs-literal">true</span>)

    addEvent(grandparent, <span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'grandparent'</span>)
    }, <span class="hljs-literal">true</span>)

    addEvent(<span class="hljs-string">'html'</span>, <span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'html'</span>)
    }, <span class="hljs-literal">true</span>)

    addEvent(<span class="hljs-built_in">document</span>, <span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'document'</span>)
    }, <span class="hljs-literal">true</span>)

    addEvent(<span class="hljs-built_in">window</span>, <span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'window'</span>)
    }, <span class="hljs-literal">true</span>)
})
</code></pre><br>
У метода addEventListener есть третий необязательный параметр — useCapture. Когда его значение равняется false (по умолчанию), событие начинается с фазы всплытия. Когда его значение равняется true, событие начинается с фазы погружения. Если мы кликнем по элементу child, то увидим в консоли следующее: window, document, html, grandparent, parent, child. Это и есть погружение события.<br>
<br>
<a name="9"></a><h4>9. В чем разница между методами event.preventDefault() и event.stopPropagation()?</h4><br>
Метод event.preventDefault() отключает поведение элемента по умолчанию. Если использовать этот метод в элементе form, то он предотвратит отправку формы (submit). Если использовать его в contextmenu, то контекстное меню будет отключено (данный метод часто используется в keydown для переопределения клавиатуры, например, при создании музыкального/видео плеера или текстового редактора — прим. пер.). Метод event.stopPropagation() отключает распространение события (его всплытие или погружение).<br>
<br>
<a name="10"></a><h4>10. Как узнать об использовании метода event.preventDefault()?</h4><br>
Для этого мы можем использовать свойство event.defaulPrevented, возвращающее логическое значение, служащее индикатором применения к элементу метода event.preventDefault.<br>
<br>
<a name="11"></a><h4>11. Почему obj.someprop.x приводит к ошибке?</h4><br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> obj = {}
<span class="hljs-built_in">console</span>.log(obj.someprop.x)
</code></pre><br>
Ответ очевиден: мы пытается получить доступ к свойству x свойства someprop, которое имеет значение undefined. obj.__proto__.__proto = null, поэтому возвращается undefined, а у undefined нет свойства x.<br>
<br>
<a name="12"></a><h4>12. Что такое цель события или целевой элемент (event.target)?</h4><br>
Простыми словами, event.target — это элемент, в котором происходит событие, или элемент, вызвавший событие.<br>
<br>
Имеем такую разметку:<br>
<br>
<pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">"clickFunc(event)"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"text-align: center; margin: 15px;
border: 1px solid red; border-radius: 3px;"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin: 25px; border: 1px solid royalblue; border-radius: 3px;"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin: 25px; border: 1px solid skyblue; border-radius: 3px;"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin: 10px"</span>&gt;</span>
                Button
            <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><br>
И такой простенький JS:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">clickFunc</span>(<span class="hljs-params">event</span>) </span>{
    <span class="hljs-built_in">console</span>.log(event.target)
}
</code></pre><br>
Мы прикрепили «слушатель» к внешнему div. Однако если мы нажмем на кнопку, то получим в консоли разметку этой кнопки. Это позволяет сделать вывод, что элементом, вызвавшим событие, является именно кнопка, а не внешний или внутренние div.<br>
<br>
<a name="13"></a><h4>13. Что такое текущая цель события (event.currentTarget)?</h4><br>
Event.currentTarget — это элемент, к которому прикреплен прослушиватель событий.<br>
<br>
Аналогичная разметка:<br>
<br>
<pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">"clickFunc(event)"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"text-align: center;margin:15px;
border:1px solid red;border-radius:3px;"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin: 25px; border:1px solid royalblue;border-radius:3px;"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin:25px;border:1px solid skyblue;border-radius:3px;"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin:10px"</span>&gt;</span>
                Button
            <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><br>
И немного видоизмененный JS:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">clickFunc</span>(<span class="hljs-params">event</span>) </span>{
    <span class="hljs-built_in">console</span>.log(event.currentTarget)
}
</code></pre><br>
Мы прикрепили слушатель к внешнему div. Куда бы мы ни кликнули, будь то кнопка или один из внутренних div, в консоли мы всегда получим разметку внешнего div. Это позволяет заключить, что event.currentTarget — это элемент, к которому прикреплен прослушиватель событий.<br>
<br>
<a name="14"></a><h4>14. В чем разница между операторами "==" и "==="?</h4><br>
Разница между оператором "==" (абстрактное или нестрогое равенство) и оператором "===" (строгое равенство) состоит в том, что первый сравнивает значения после их преобразования или приведения к одному типу (Coersion), а второй — без такого преобразования.<br>
<br>
Давайте копнем глубже. И сначала поговорим о преобразовании.<br>
<br>
Преобразование представляет собой процесс приведения значения к другому типу или, точнее, процесс приведения сравниваемых значений к одному типу. При сравнении оператор "==" производит так называемое неявное сравнение. Оператор "==" выполняет некоторые операции перед сравнением двух значений.<br>
<br>
Допустим, мы сравниваем x и y.<br>
<br>
Алгоритм следующий:<br>
<br>
<ol>
<li>Если x и y имеют одинаковый тип, сравнение выполняется с помощью оператора "===".</li>
<li>Если x = null и y = undefined возвращается true.</li>
<li>Если x = undefined и y = null возвращается true.</li>
<li>Если x = число, а y = строка, возвращается x == toNumber(y) (значение y преобразуется в число).</li>
<li>Если x = строка, а y = число, возвращается toNumber(x) == y (значение x преобразуется в число).</li>
<li>Если x = логическое значение, возвращается toNumber(x) == y.</li>
<li>Если y = логическое значение, возвращается x == toNumber(y).</li>
<li>Если x = строка, символ или число, а y = объект, возвращается x == toPrimitive(y) (значение y преобразуется в примитив).</li>
<li>Если x = объект, а y = строка, символ или число, возвращается toPrimitive(x) == y.</li>
<li>Возвращается false.</li>
</ol><br>
Запомните: для приведения объекта к «примитиву» метод toPrimitive сначала использует метод valueOf, затем метод toString.<br>
<br>
Примеры:<br>
<br>
<img src="https://habrastorage.org/r/w1560/webt/yd/xe/tn/ydxetnfghjtfuex_p-em8v4emck.png" data-src="https://habrastorage.org/webt/yd/xe/tn/ydxetnfghjtfuex_p-em8v4emck.png"><br>
<br>
Все примеры возвращают true.<br>
<br>
Первый пример — первое условие алгоритма.<br>
Второй пример — четвертое условие.<br>
Третий — второе.<br>
Четвертый — седьмое.<br>
Пятый — восьмое.<br>
И последний — десятое.<br>
<br>
<img src="https://habrastorage.org/r/w1560/webt/t-/4k/ys/t-4kyszb4grfafbi7lazyyvq6dy.png" data-src="https://habrastorage.org/webt/t-/4k/ys/t-4kyszb4grfafbi7lazyyvq6dy.png"><br>
<br>
Если же мы используем оператор "===" все примеры, кроме первого, вернут false, поскольку значения в этих примерах имеют разные типы.<br>
<br>
<a name="15"></a><h4>15. Почему результатом сравнения двух похожих объектов является false?</h4><br>
<pre><code class="javascript hljs"><span class="hljs-keyword">let</span> a = {
    <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>
}
<span class="hljs-keyword">let</span> b = {
    <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>
}
<span class="hljs-keyword">let</span> c = a

<span class="hljs-built_in">console</span>.log(a === b) <span class="hljs-comment">// false</span>
<span class="hljs-built_in">console</span>.log(a === c) <span class="hljs-comment">// true хм...</span>
</code></pre><br>
В JS объекты и примитивы сравниваются по-разному. Примитивы сравниваются по значению. Объекты — по ссылке или адресу в памяти, где хранится переменная. Вот почему первый console.log возвращает false, а второй — true. Переменные «a» и «c» ссылаются на один объект, а переменные «a» и «b» — на разные объекты с одинаковыми свойствами и значениями.<br>
<br>
<a name="16"></a><h4>16. Для чего используется оператор "!!"?</h4><br>
Оператор "!!" (двойное отрицание) приводит значение справа от него к логическому значению.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-built_in">console</span>.log(!!<span class="hljs-literal">null</span>) <span class="hljs-comment">// false</span>
<span class="hljs-built_in">console</span>.log(!!<span class="hljs-literal">undefined</span>) <span class="hljs-comment">// false</span>
<span class="hljs-built_in">console</span>.log(!!<span class="hljs-string">''</span>) <span class="hljs-comment">// false</span>
<span class="hljs-built_in">console</span>.log(!!<span class="hljs-number">0</span>) <span class="hljs-comment">// false</span>
<span class="hljs-built_in">console</span>.log(!!<span class="hljs-literal">NaN</span>) <span class="hljs-comment">// false</span>
<span class="hljs-built_in">console</span>.log(!!<span class="hljs-string">' '</span>) <span class="hljs-comment">// true</span>
<span class="hljs-built_in">console</span>.log(!!{}) <span class="hljs-comment">// true</span>
<span class="hljs-built_in">console</span>.log(!![]) <span class="hljs-comment">// true</span>
<span class="hljs-built_in">console</span>.log(!!<span class="hljs-number">1</span>) <span class="hljs-comment">// true</span>
<span class="hljs-built_in">console</span>.log(!![].length) <span class="hljs-comment">// false</span>
</code></pre><br>
<a name="17"></a><h4>17. Как записать несколько выражений в одну строку?</h4><br>
Для этого мы можем использовать оператор "," (запятая). Этот оператор «двигается» слева направо и возвращает значение последнего выражения или операнда.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">let</span> x = <span class="hljs-number">5</span>

x = (x++, x = addFive(x), x *= <span class="hljs-number">2</span>, x -= <span class="hljs-number">5</span>, x += <span class="hljs-number">10</span>)

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addFive</span>(<span class="hljs-params">num</span>) </span>{
    <span class="hljs-keyword">return</span> num + <span class="hljs-number">5</span>
}
</code></pre><br>
Если мы выведем значение x в консоль, то получим 27. Сначала мы увеличиваем значение x на единицу (x = 6). Затем вызываем функцию addFive() с параметром 6, к которому прибавляем 5 (x = 11). После этого мы умножаем значение x на 2 (x = 22). Затем вычитаем 5 (x = 17). И, наконец, прибавляем 10 (x = 27).<br>
<br>
<a name="18"></a><h4>18. Что такое поднятие (Hoisting)?</h4><br>
Поднятие — это термин, описывающий подъем переменной или функции в глобальную или функциональную области видимости.<br>
<br>
Для того, чтобы понять, что такое Hoisting, необходимо разобраться с тем, что представляет собой контекст выполнения.<br>
<br>
Контекст выполнения — это среда, в которой выполняется код. Контекст выполнения имеет две фазы — компиляция и собственно выполнение.<br>
<br>
Компиляция. В этой фазе функциональные выражения и переменные, объявленные с помощью ключевого слова «var», со значением undefined поднимаются в самый верх глобальной (или функциональной) области видимости (как бы перемещаются в начало нашего кода. Это объясняет, почему мы можем вызывать функции до их объявления — прим. пер.).<br>
<br>
Выполнение. В этой фазе переменным присваиваются значения, а функции (или методы объектов) вызываются или выполняются.<br>
<br>
Запомните: поднимаются только функциональные выражения и переменные, объявленные с помощью ключевого слова «var». Обычные функции и стрелочные функции, а также переменные, объявленные с помощью ключевых слов «let» и «const» не поднимаются.<br>
<br>
Предположим, что у нас есть такой код:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-built_in">console</span>.log(y)
y = <span class="hljs-number">1</span>
<span class="hljs-built_in">console</span>.log(y)
<span class="hljs-built_in">console</span>.log(greet(<span class="hljs-string">'Mark'</span>))

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">greet</span>(<span class="hljs-params">name</span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-string">'Hello '</span> + name + <span class="hljs-string">'!'</span>
}

<span class="hljs-keyword">var</span> y
</code></pre><br>
Получаем undefined, 1 и 'Hello Mark!'.<br>
<br>
Вот как выглядит фаза компиляции:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">greet</span>(<span class="hljs-params">name</span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-string">'Hello '</span> + name + <span class="hljs-string">'!'</span>
}

<span class="hljs-keyword">var</span> y <span class="hljs-comment">// присваивается undefined</span>

<span class="hljs-comment">// ожидается завершение фазы компиляции</span>

<span class="hljs-comment">// затем начинается фаза выполнения</span>
<span class="hljs-comment">/*
console.log(y)
y = 1
console.log(y)
console.log(greet('Mark'))
*/</span>
</code></pre><br>
После завершения фазы компиляции начинается фаза выполнения, когда переменным присваиваются значения и вызываются функции.<br>
<br>
Дополнительно о Hoisting можно почитать <a href="https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/%D0%9F%D0%BE%D0%B4%D0%BD%D1%8F%D1%82%D0%B8%D0%B5" rel="nofollow">здесь</a>.<br>
<br>
<a name="19"></a><h4>19. Что такое область видимости (Scope)?</h4><br>
Область видимости — это место, где (или откуда) мы имеем доступ к переменным или функциям. JS имеем три типа областей видимости: глобальная, функциональная и блочная (ES6).<br>
<br>
Глобальная область видимости — переменные и функции, объявленные в глобальном пространстве имен, имеют глобальную область видимости и доступны из любого места в коде.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-comment">// глобальное пространство имен</span>
<span class="hljs-keyword">var</span> g = <span class="hljs-string">'global'</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">globalFunc</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">innerFunc</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(g) <span class="hljs-comment">// имеет доступ к переменной g, поскольку она является глобальной</span>
    }
    innerFunc()
}
</code></pre><br>
Функциональная область видимости (область видимости функции) — переменные, функции и параметры, объявленные внутри функции, доступны только внутри этой функции.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myFavouriteFunc</span>(<span class="hljs-params">a</span>) </span>{
    <span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
        <span class="hljs-keyword">var</span> b = <span class="hljs-string">'Hello '</span> + a
    }
    <span class="hljs-keyword">return</span> b
}
myFavouriteFunc(<span class="hljs-string">'World'</span>)

<span class="hljs-built_in">console</span>.log(a) <span class="hljs-comment">// Uncaught ReferenceError: a is not defined</span>
<span class="hljs-built_in">console</span>.log(b) <span class="hljs-comment">// не выполнится</span>
</code></pre><br>
Блочная область видимости — переменные (объявленные с помощью ключевых слов «let» и «const») внутри блока ({ }), доступны только внутри него.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testBlock</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
        <span class="hljs-keyword">let</span> z = <span class="hljs-number">5</span>
    }
    <span class="hljs-keyword">return</span> z
}

testBlock() <span class="hljs-comment">// Uncaught ReferenceError: z is not defined</span>
</code></pre><br>
Область видимости — это также набор правил, по которым осуществляется поиск переменной. Если переменной не существует в текущей области видимости, ее поиск производится выше, во внешней по отношению к текущей области видимости. Если и во внешней области видимости переменная отсутствует, ее поиск продолжается вплоть до глобальной области видимости. Если в глобальной области видимости переменная обнаружена, поиск прекращается, если нет — выбрасывается исключение. Поиск осуществляется по ближайшим к текущей областям видимости и останавливается с нахождением переменной. Это называется цепочкой областей видимости (Scope Chain).<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-comment">// цепочка областей видимости</span>
<span class="hljs-comment">// внутренняя область видимости -&gt; внешняя область видимости -&gt; глобальная область видимости</span>

<span class="hljs-comment">// глобальная область видимости</span>
<span class="hljs-keyword">var</span> variable1 = <span class="hljs-string">'Comrades'</span>
<span class="hljs-keyword">var</span> variable2 = <span class="hljs-string">'Sayonara'</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">outer</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-comment">// внешняя область видимости</span>
    <span class="hljs-keyword">var</span> variable1 = <span class="hljs-string">'World'</span>

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">inner</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-comment">// внутренняя область видимости</span>
        <span class="hljs-keyword">var</span> variable2 = <span class="hljs-string">'Hello'</span>
        <span class="hljs-built_in">console</span>.log(variable2 + <span class="hljs-string">' '</span> + variable1)
    }
    inner()
}
outer()
<span class="hljs-comment">// в консоль выводится 'Hello World',</span>
<span class="hljs-comment">// потому что variable2 = 'Hello' и variable1 = 'World' являются ближайшими</span>
<span class="hljs-comment">// к внутренней области видимости переменными</span>
</code></pre><br>
<img src="https://habrastorage.org/r/w1560/webt/r6/07/q7/r607q7hehfjmuicf0_icntddk2s.png" data-src="https://habrastorage.org/webt/r6/07/q7/r607q7hehfjmuicf0_icntddk2s.png"><br>
<br>
<a name="20"></a><h4>20. Что такое замыкание (Closures)?</h4><br>
Наверное, это самый сложный вопрос из списка. Я постараюсь объяснить, как я понимаю замыкание.<br>
<br>
По сути, замыкание — это способность функции во время создания запоминать ссылки на переменные и параметры, находящиеся в текущей области видимости, в области видимости родительской функции, в области видимости родителя родительской функции и так до глобальной области видимости с помощью цепочки областей видимости. Обычно область видимости определяется при создании функции.<br>
<br>
Примеры — отличный способ объяснить замыкание:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-comment">// глобальная область видимости</span>
<span class="hljs-keyword">var</span> globalVar = <span class="hljs-string">'abc'</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-comment">// область видимости функции</span>
    <span class="hljs-built_in">console</span>.log(globalVar)
}

a() <span class="hljs-comment">// 'abc'</span>
<span class="hljs-comment">// цепочка областей видимости</span>
<span class="hljs-comment">// область видимости функции a -&gt; глобальная область видимости</span>
</code></pre><br>
В данном примере, когда мы объявляем функцию, глобальная область видимости является частью замыкания.<br>
<br>
<img src="https://habrastorage.org/r/w1560/webt/10/ke/qa/10keqaosrww0rntbyei1gx9f_k0.png" data-src="https://habrastorage.org/webt/10/ke/qa/10keqaosrww0rntbyei1gx9f_k0.png"><br>
<br>
Переменная «globalVar» не имеет значения на картинке, потому что ее значение может меняться в зависимости от того, где и когда будет вызвана функция. Но в примере выше globalVar будет иметь значение «abc».<br>
<br>
Теперь пример посложнее:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">var</span> globalVar = <span class="hljs-string">'global'</span>
<span class="hljs-keyword">var</span> outerVar = <span class="hljs-string">'outer'</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">outerFunc</span>(<span class="hljs-params">outerParam</span>) </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">innerFunc</span>(<span class="hljs-params">innerParam</span>) </span>{
        <span class="hljs-built_in">console</span>.log(globalVar, outerParam, innerParam)
    }
    <span class="hljs-keyword">return</span> innerFunc
}

<span class="hljs-keyword">const</span> x = outerFunc(outerVar)
outerVar = <span class="hljs-string">'outer-2'</span>
globalVar = <span class="hljs-string">'guess'</span>
x(<span class="hljs-string">'inner'</span>)
</code></pre><br>
<img src="https://habrastorage.org/r/w1560/webt/ms/dv/wx/msdvwxdxp5s3l4cquxnqgkdtyr0.png" data-src="https://habrastorage.org/webt/ms/dv/wx/msdvwxdxp5s3l4cquxnqgkdtyr0.png"><br>
<br>
В результате получаем «guess outer inner». Объяснение следующее: когда мы вызываем функцию outerFunc и присваиваем переменной «x» значение, возвращаемое функцией innerFunc, параметр «outerParam» равняется «outer». Несмотря на то, что мы присвоили переменной «outerVar» значение «outer-2», это произошло после вызова функции outerFunc, которая «успела» найти значение переменной «outerVar» в цепочке областей видимости, этим значением было «outer». Когда мы вызываем «x», которая ссылается на innerFunc, значением «innerParam» является «inner», потому что мы передаем это значение в качестве параметра при вызове «x». globalVar имеет значение «guess», потому что мы присвоили ей это значение перед вызовом «x».<br>
<br>
Пример неправильного понимания замыкания.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> arrFunc = []
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">5</span>; i++) {
    arrFunc.push(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">return</span> i
    })
}
<span class="hljs-built_in">console</span>.log(i) <span class="hljs-comment">// 5</span>

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; arrFunc.length; i++) {
    <span class="hljs-built_in">console</span>.log(arrFunc[i]()) <span class="hljs-comment">// все 5</span>
}
</code></pre><br>
Данный код работает не так, как ожидается. Объявление переменной с помощью ключевого слова «var» делает эту переменную глобальной. После добавления функций в массив «arrFunc» значением глобальной переменной «i» становится «5». Поэтому когда мы вызываем функцию, она возвращает значение глобальной переменной «i». Замыкание хранит ссылку на переменную, а не на ее значение во время создания. Эту проблему можно решить, используя IIFE или объявив переменную с помощью ключевого слова «let».<br>
<br>
Подробнее о замыкании можно почитать <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures" rel="nofollow">здесь</a> и <a href="https://learn.javascript.ru/closure" rel="nofollow">здесь</a>.<br>
<br>
<a name="21"></a><h4>21. Какие значения в JS являются ложными?</h4><br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> falsyValues = [<span class="hljs-string">''</span>, <span class="hljs-number">0</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">undefined</span>, <span class="hljs-literal">NaN</span>, <span class="hljs-literal">false</span>]
</code></pre><br>
Ложными являются значения, результатом преобразования которых в логическое значение является false.<br>
<br>
<a name="22"></a><h4>22. Как проверить, является ли значение ложным?</h4><br>
Следует использовать функцию Boolean или оператор "!!" (двойное отрицание).<br>
<br>
<a name="23"></a><h4>23. Для чего используется директива «use strict»?</h4><br>
«use strict» — это директива ES5, которая заставляет весь наш код или код отдельной функции выполняться в строгом режиме. Строгий режим вводит некоторые ограничения по написанию кода, тем самым позволяя избегать ошибок на ранних этапах.<br>
<br>
Вот какие ограничения накладывает строгий режим.<br>
<br>
Нельзя присваивать значения или обращаться к необъявленным переменным:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">returnY</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-string">'use strict'</span>
    y = <span class="hljs-number">123</span>
    <span class="hljs-keyword">return</span> y
}
returnY() <span class="hljs-comment">// Uncaught ReferenceError: y is not defined</span>
</code></pre><br>
Запрещено присваивать значения глобальный переменным, доступным только для чтения или записи:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-meta">'use strict'</span>
<span class="hljs-keyword">var</span> <span class="hljs-literal">NaN</span> = <span class="hljs-literal">NaN</span> <span class="hljs-comment">// Uncaught TypeError: Cannot assign to read only property 'NaN' of object '#&lt;Window&gt;'</span>
<span class="hljs-keyword">var</span> <span class="hljs-literal">undefined</span> = <span class="hljs-literal">undefined</span>
<span class="hljs-keyword">var</span> <span class="hljs-literal">Infinity</span> = <span class="hljs-string">'and beyond'</span>
</code></pre><br>
Нельзя удалить «неудаляемое» свойство объекта:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-meta">'use strict'</span>
<span class="hljs-keyword">const</span> obj = {}

<span class="hljs-built_in">Object</span>.defineProperties(obj, <span class="hljs-string">'x'</span>, {
    <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>
})

<span class="hljs-keyword">delete</span> obj.x <span class="hljs-comment">// Uncaught TypeError: Property description must be an object: x</span>
</code></pre><br>
Запрещено дублирование параметров:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-meta">'use strict'</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">someFunc</span>(<span class="hljs-params">a, b, b, c</span>) </span>{} <span class="hljs-comment">// Uncaught SyntaxError: Duplicate parameter name not allowed in this context</span>
</code></pre><br>
Нельзя создавать функции с помощью функции eval:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-meta">'use strict'</span>

<span class="hljs-built_in">eval</span>(<span class="hljs-string">'var x = 1'</span>)

<span class="hljs-built_in">console</span>.log(x) <span class="hljs-comment">// Uncaught ReferenceError: x is not defined</span>
</code></pre><br>
Значением «this» по умолчанию является undefined:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-meta">'use strict'</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">showMeThis</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>
}

showMeThis() <span class="hljs-comment">// undefined</span>
</code></pre><br>
… и т.д.<br>
<br>
<a name="24"></a><h4>24. Какое значение имеет this?</h4><br>
Обычно this ссылается на значение объекта, который в данный момент выполняет или вызывает функцию. «В данный момент» означает, что значение this меняется в зависимости от контекста выполнения, от того места, где мы используем this.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> carDetails = {
    <span class="hljs-attr">name</span>: <span class="hljs-string">'Ford Mustang'</span>,
    <span class="hljs-attr">yearBought</span>: <span class="hljs-number">2005</span>,
    getName() {
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name
    }
    <span class="hljs-attr">isRegistered</span>: <span class="hljs-literal">true</span>
}

<span class="hljs-built_in">console</span>.log(carDetails.getName()) <span class="hljs-comment">// Ford Mustang</span>
</code></pre><br>
В данном случае метод getName возвращает this.name, а this ссылается на carDetails, объект, в котором выполняется getName, который является ее «владельцем».<br>
<br>
Добавим после console.log три строчки:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">var</span> name = <span class="hljs-string">'Ford Ranger'</span>
<span class="hljs-keyword">var</span> getCarName = carDetails.getName

<span class="hljs-built_in">console</span>.log(getCarName()) <span class="hljs-comment">// Ford Ranger</span>
</code></pre><br>
Второй console.log выдает Ford Ranger, и это странно. Причина такого поведения заключается в том, что «владельцем» getCarName является объект window. Переменные, объявленные с помощью ключевого слова «var» в глобальной области видимости, записываются в свойства объекта window. this в глобальной области видимости ссылается на объект window (если речь не идет о строгом режиме).<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-built_in">console</span>.log(getCarName === <span class="hljs-built_in">window</span>.getCarName) <span class="hljs-comment">// true</span>
<span class="hljs-built_in">console</span>.log(getCarName === <span class="hljs-keyword">this</span>.getCarName) <span class="hljs-comment">// true</span>
</code></pre><br>
В этом примере this и window ссылаются на один объект.<br>
<br>
Одним из способов решения данной проблемы является использование методов call или apply:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-built_in">console</span>.log(getCarName.apply(carDetails)) <span class="hljs-comment">// Ford Mustang</span>
<span class="hljs-built_in">console</span>.log(getCarName.call(carDetails)) <span class="hljs-comment">// Ford Mustang</span>
</code></pre><br>
Call и apply принимают в качестве первого аргумента объект, который будет являться значением this внутри функции.<br>
<br>
В IIFE, функциях, которые создаются в глобальном области видимости, анонимных функциях и внутренних функциях методов объекта значением this по умолчанию является объект window.<br>
<br>
<pre><code class="javascript hljs">(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>)
})() <span class="hljs-comment">// window</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">iHateThis</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>)
}
iHateThis() <span class="hljs-comment">// window</span>

<span class="hljs-keyword">const</span> myFavouriteObj = {
    guessThis() {
        <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getName</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.name)
        }
        getName()
    },
    <span class="hljs-attr">name</span>: <span class="hljs-string">'Marko Polo'</span>,
    thisIsAnnoying(callback) {
        callback()
    }
}

myFavouriteObj.guessThis() <span class="hljs-comment">// window</span>
myFavouriteObj.thisIsAnnoying(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>) <span class="hljs-comment">// window</span>
})
</code></pre><br>
Существует два способа получить «Marko Polo».<br>
<br>
Во-первых, мы можем сохранить значение this в переменной:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> myFavoriteObj = {
    guessThis() {
        <span class="hljs-keyword">const</span> self = <span class="hljs-keyword">this</span> <span class="hljs-comment">// сохраняем значение this в переменной self</span>
        <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getName</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(self.name)
        }
        getName()
    },
    <span class="hljs-attr">name</span>: <span class="hljs-string">'Marko Polo'</span>,
    thisIsAnnoying(callback) {
        callback()
    }
}
</code></pre><br>
Во-вторых, мы можем использовать стрелочную функцию:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> myFavoriteObj = {
    guessThis() {
        <span class="hljs-keyword">const</span> getName = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
            <span class="hljs-comment">// копируем значение this из внешнего окружения</span>
            <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.name)
        }
        getName()
    },
    <span class="hljs-attr">name</span>: <span class="hljs-string">'Marko Polo'</span>,
    thisIsAnnoying(callback) {
        callback()
    }
}
</code></pre><br>
Стрелочные функции не имеют собственного значения this. Они копируют значение this из внешнего лексического окружения.<br>
<br>
<a name="25"></a><h4>25. Что такое прототип объекта?</h4><br>
В двух словах, прототип — это план (схема или проект) объекта. Он используется как запасной вариант для свойств и методов, существующих в данном объекте. Это также один из способов обмена свойствами и функциональностью между объектами. Это основная концепция прототипного наследования в JS.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> o = {}
<span class="hljs-built_in">console</span>.log(o.toString()) <span class="hljs-comment">// [object Object]</span>
</code></pre><br>
Несмотря на то, что объект «о» не имеет свойства toString, обращение к этому свойству не вызывает ошибки. Если определенного свойства нет в объекте, его поиск осуществляется сначала в прототипе объекта, затем в прототипе прототипа объекта и так до тех пор, пока свойство не будет найдено. Это называется цепочкой прототипов. На вершине цепочки прототипов находится Object.prototype.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-built_in">console</span>.log(o.toString === <span class="hljs-built_in">Object</span>.prototype.toString) <span class="hljs-comment">// true</span>
</code></pre><br>
Подробнее о прототипах и наследовании можно почитать <a href="https://learn.javascript.ru/prototype-inheritance" rel="nofollow">здесь</a> и <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain" rel="nofollow">здесь</a>.<br>
<br>
<a name="26"></a><h4>26. Что такое IIFE?</h4><br>
IIFE или Immediately Invoked Function Expression — это функция, которая вызывается или выполняется сразу же после создания или объявления. Для создания IIFE необходимо обернуть функцию в круглые скобки (оператор группировки), превратив ее в выражение, и затем вызвать ее с помощью еще одних круглых скобок. Это выглядит так: (function(){})().<br>
<br>
<pre><code class="javascript hljs">(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"> </span>) </span>{ }( ))

(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"> </span>) </span>{ })( )

(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">named</span>(<span class="hljs-params">params</span>) </span>{ })( )

(<span class="hljs-function"><span class="hljs-params">( )</span> =&gt;</span> { })

(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">global</span>) </span>{ })(<span class="hljs-built_in">window</span>)

<span class="hljs-keyword">const</span> utility = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"> </span>) </span>{
    <span class="hljs-keyword">return</span> {
        <span class="hljs-comment">// утилиты</span>
    }
})
</code></pre><br>
Все эти примеры являются валидными. Предпоследний пример показывает, что мы можем передавать параметры в IIFE. Последний пример показывает, что мы можем сохранить результат IIFE в переменной.<br>
<br>
Лучшее использование IIFE — это выполнение функций настройки инициализации и предотвращение конфликтов имен с другими переменными в глобальной области видимости (загрязнение глобального пространства имен). Приведем пример.<br>
<br>
<pre><code class="javascript hljs">&lt;script src=<span class="hljs-string">"https://cdnurl.com/somelibrary.js"</span>&gt;&lt;<span class="hljs-regexp">/script&gt;
</span></code></pre><br>
У нас есть ссылка на библиотеку somelibrary.js, которая предоставляет некоторые глобальные функции, которые мы можем использовать в нашем коде, но в этой библиотеке есть два метода, createGraph и drawGraph, которые мы не используем, потому что они содержат ошибки. И мы хотим реализовать эти функции самостоятельно.<br>
<br>
Одним из способов решить данную проблему является изменение структуры наших скриптов:<br>
<br>
<pre><code class="javascript hljs">&lt;script src=<span class="hljs-string">"https://cdnurl.com/somelibrary.js"</span>&gt;&lt;<span class="hljs-regexp">/script&gt;
&lt;script&gt;
    function createGraph() {
        /</span><span class="hljs-regexp">/ код
    }

    function drawGraph() {
        /</span><span class="hljs-regexp">/ код
    }
&lt;/</span>script&gt;
</code></pre><br>
Таким образом, мы переопределяем методы, предоставляемые библиотекой.<br>
<br>
Вторым способом является изменение имен наших функций:<br>
<br>
<pre><code class="javascript hljs">&lt;script src=<span class="hljs-string">"https://cdnurl.com/somelibrary.js"</span>&gt;&lt;<span class="hljs-regexp">/script&gt;
&lt;script&gt;
    function myCreateGraph() {
        /</span><span class="hljs-regexp">/ код
    }

    function myDrawGraph() {
        /</span><span class="hljs-regexp">/ код
    }
&lt;/</span>script&gt;
</code></pre><br>
Третий способ — использование IIFE:<br>
<br>
<pre><code class="javascript hljs">&lt;script&gt;
    <span class="hljs-keyword">const</span> graphUtility = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createGraph</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-comment">// код</span>
        }

        <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">drawGraph</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-comment">// код</span>
        }
        <span class="hljs-keyword">return</span> {
            createGraph,
            drawGraph
        }
    })
&lt;<span class="hljs-regexp">/script&gt;
</span></code></pre><br>
В этом примере мы создаем служебную переменную, которая содержит результат IIFE, возвращающий объект, содержащий методы createGraph и drawGraph.<br>
<br>
Вот еще одна проблема, которую можно решить с помощью IIFE:<br>
<br>
<pre><code class="javascript hljs">val li = <span class="hljs-built_in">document</span>.querySelectorAll(<span class="hljs-string">'.list-group &gt; li'</span>)
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i - <span class="hljs-number">0</span>, len = li.length; i &lt; len; i++) {
    li[i].addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{
        <span class="hljs-built_in">console</span>.log(i)
    })
}
</code></pre><br>
Допустим, у нас есть элемент «ul» с классом «list-group», содержащий 5 дочерних элементов «li». И мы хотим выводить в консоль значение «i» при клике по отдельному «li». Однако вместо этого в консоль всегда выводится 5. Виной всему замыкание.<br>
<br>
Одним из решений является IIFE:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">var</span> li = <span class="hljs-built_in">document</span>.querySelectorAll(<span class="hljs-string">'.list-group &gt; li'</span>)
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>, len = li.length; i &lt; len; i++) {
    (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">currentIndex</span>) </span>{
        li[currentIndex].addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{
            <span class="hljs-built_in">console</span>.log(currentIndex)
        })
    })(i)
}
</code></pre><br>
Причина, по которой этот код работает, как задумано, состоит в том, что IIFE создает новую область видимости на каждой итерации, и мы записываем значение «i» в currentIndex.<br>
<br>
<a name="27"></a><h4>27. Для чего используется метод Function.prototype.apply?</h4><br>
Apply используется для привязки определенного объекта к значению this вызываемой функции.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> details = {
    <span class="hljs-attr">message</span>: <span class="hljs-string">'Hello World!'</span>
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getMessage</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.message
}

getMessage.apply(details) <span class="hljs-comment">// Hello World!</span>
</code></pre><br>
Этот метод похож на Function.prototype.call. Единственное отличие состоит в том, что в apply аргументы передаются в виде массива.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> person = {
    <span class="hljs-attr">name</span>: <span class="hljs-string">'Marko Polo'</span>
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">greeting</span>(<span class="hljs-params">greetingMessage</span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-string">`<span class="hljs-subst">${greetingMessage}</span> <span class="hljs-subst">${<span class="hljs-keyword">this</span>.name}</span>`</span>
}

greeting.apply(person, [<span class="hljs-string">'Hello'</span>]) <span class="hljs-comment">// Hello Marko Polo</span>
</code></pre><br>
<a name="28"></a><h4>28. Для чего используется метод Function.prototype.call?</h4><br>
Call используется для привязки определенного объекта к значению this вызываемой функции.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> details = {
    <span class="hljs-attr">message</span>: <span class="hljs-string">'Hello World!'</span>
};

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getMessage</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.message;
}

getMessage.call(details); <span class="hljs-comment">// Hello World!</span>
</code></pre><br>
Этот метод похож на Function.prototype.apply. Отличие состоит в том, что в call аргументы передаются через запятую.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> person = {
    <span class="hljs-attr">name</span>: <span class="hljs-string">'Marko Polo'</span>
};

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">greeting</span>(<span class="hljs-params">greetingMessage</span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-string">`<span class="hljs-subst">${greetingMessage}</span> <span class="hljs-subst">${<span class="hljs-keyword">this</span>.name}</span>`</span>;
}

greeting.call(person, <span class="hljs-string">'Hello'</span>); <span class="hljs-comment">// Hello Marko Polo</span>
</code></pre><br>
<a name="29"></a><h4>29. В чем разница между методами call и apply?</h4><br>
Отличие между call и apply состоит в том, как мы передаем аргументы в вызываемой функции. В apply аргументы передаются в виде массива, в call — через запятую.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> obj1 = {
    <span class="hljs-attr">result</span>: <span class="hljs-number">0</span>
}

<span class="hljs-keyword">const</span> obj2 = {
    <span class="hljs-attr">result</span>: <span class="hljs-number">0</span>
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">reduceAdd</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">let</span> result = <span class="hljs-number">0</span>
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>, len = <span class="hljs-built_in">arguments</span>.length; i &lt; len; i++) {
        result += <span class="hljs-built_in">arguments</span>[i]
    }
    <span class="hljs-keyword">this</span>.result = result
}

reduceAdd.apply(obj1, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]) <span class="hljs-comment">// 15</span>
reduceAdd.call(obj2, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>) <span class="hljs-comment">// 15</span>
</code></pre><br>
<a name="30"></a><h4>30. Для чего используется метод Function.prototype.bind?</h4><br>
Bind возвращает новую функцию, значением this которой является объект, указанный в качестве первого параметра. В отличие от bind, call и apply сразу же вызывают функцию.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyComponent</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
    <span class="hljs-keyword">constructor</span>(props) {
        <span class="hljs-keyword">super</span>(props)
        <span class="hljs-keyword">this</span>.state = {
            <span class="hljs-attr">value</span>: <span class="hljs-string">''</span>
        }
        <span class="hljs-keyword">this</span>.handleChange = <span class="hljs-keyword">this</span>.handleChange.bind(<span class="hljs-keyword">this</span>)
        <span class="hljs-comment">// привязываем метод handleChange к компоненту MyComponent</span>
    }

    handleChange(e) {
        <span class="hljs-comment">// код</span>
    }

    render() {
        <span class="hljs-keyword">return</span> ( &lt; &gt;
            &lt;
            input type = {
                <span class="hljs-keyword">this</span>.props.type
            }
            value = {
                <span class="hljs-keyword">this</span>.state.value
            }
            onChange = {
                <span class="hljs-keyword">this</span>.handleChange
            }
            /&gt; &lt;<span class="hljs-regexp">/ &gt;
        )
    }
}
</span></code></pre><br>
<a name="31"></a><h4>31. Что такое функциональное программирование и какие особенности JS позволяют говорить о нем как о функциональном языке программирования?</h4><br>
Функциональное программирование — это декларативная концепция программирования или образец (паттерн) того, как строятся приложения, как используются функции, содержащие выражения, которые вычисляют значения без изменения аргументов, которые им передаются.<br>
<br>
Объект Array содержит методы map, filter и reduce, которые являются самыми известными функциями в мире функционального программирования из-за их полезности, а также потому, что они не изменяют массив, что делает эти функции «чистыми». Также в JS имеются замыкание и функции высшего порядка, которые являются характеристиками функционального языка программирования.<br>
<br>
Метод map возвращает новый массив с результатами вызова callback для каждого элемента массива:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> words = [<span class="hljs-string">'Functional'</span>, <span class="hljs-string">'Procedural'</span>, <span class="hljs-string">'Object-Oriented'</span>]

<span class="hljs-keyword">const</span> wordsLength = words.map(<span class="hljs-function"><span class="hljs-params">word</span> =&gt;</span> word.length)
</code></pre><br>
Метод filter создает новый массив со всеми элементами, которые удовлетворяют условию, указанному в callback:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> data = {
    {
        <span class="hljs-attr">name</span>: <span class="hljs-string">'Mark'</span>,
        <span class="hljs-attr">isRegistered</span>: <span class="hljs-literal">true</span>
    } {
        <span class="hljs-attr">name</span>: <span class="hljs-string">'Mary'</span>,
        <span class="hljs-attr">isRegistered</span>: <span class="hljs-literal">false</span>
    } {
        <span class="hljs-attr">name</span>: <span class="hljs-string">'Mae'</span>,
        <span class="hljs-attr">isRegistered</span>: <span class="hljs-literal">true</span>
    }
}

<span class="hljs-keyword">const</span> registeredUsers = data.filter(<span class="hljs-function"><span class="hljs-params">user</span> =&gt;</span> user.isRegistered)
</code></pre><br>
Метод reduce выполняет callback один раз для каждого элемента массива, за исключением пустот, принимая четыре аргумента: начальное значение (или значение от предыдущего callback), значение текущего элемента, текущий индекс и итерируемый массив:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> strs = [<span class="hljs-string">'I'</span>, <span class="hljs-string">' '</span>, <span class="hljs-string">'am'</span>, <span class="hljs-string">' '</span>, <span class="hljs-string">'Iron'</span>, <span class="hljs-string">' '</span>, <span class="hljs-string">'Man'</span>]

<span class="hljs-keyword">const</span> result = strs.reduce(<span class="hljs-function">(<span class="hljs-params">acc, currentStr</span>) =&gt;</span> acc + str, <span class="hljs-string">''</span>)
</code></pre><br>
<a name="32"></a><h4>32. Что такое функции высшего порядка (Higher Order Functions)?</h4><br>
Функция высшего порядка — это функция, возвращающая другую функцию или принимающая другую функцию в качестве аргумента.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">higherOrderFunction</span>(<span class="hljs-params">param, callback</span>) </span>{
    <span class="hljs-keyword">return</span> callback(param)
}
</code></pre><br>
<a name="33"></a><h4>33. Почему функции в JS называют объектами первого класса (First-class Objects)?</h4><br>
Функции называют объектами первого класса, потому что они обрабатываются также, как и любое другое значение в JS. Они могут присваиваться переменным, быть свойством объекта (методом), элементом массива, аргументом другой функции, значением, возвращаемым функцией. Единственным отличием функции от любого другого значения в JS является то, что функция может быть выполнена или вызвана.<br>
<br>
<a name="34"></a><h4>34. Как бы Вы реализовали метод Array.prototype.map?</h4><br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">map</span>(<span class="hljs-params">arr, mapCallback</span>) </span>{
    <span class="hljs-comment">// проверяем переданные параметры</span>
    <span class="hljs-keyword">if</span> (!<span class="hljs-built_in">Array</span>.isArray(arr) || !arr.length || <span class="hljs-keyword">typeof</span> mapCallback !== <span class="hljs-string">'function'</span>) {
        <span class="hljs-keyword">return</span> []
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">let</span> result = []
        <span class="hljs-comment">// мы создаем массив с результатами при каждом вызове функции</span>
        <span class="hljs-comment">// поскольку мы не хотим менять оригинальный массив</span>
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>, len = arr.length; i &lt; len; i++) {
            result.push(mapCallback(arr[i], i, arr))
            <span class="hljs-comment">// помещаем результаты mapCallback в result</span>
        }
        <span class="hljs-keyword">return</span> result
    }
}
</code></pre><br>
Метод map создает новый массив с результатом вызова указанной функции для каждого элемента массива.<br>
<br>
<a name="35"></a><h4>35. Как бы Вы реализовали метод Array.prototype.filter?</h4><br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">filter</span>(<span class="hljs-params">arr, filterCallback</span>) </span>{
    <span class="hljs-comment">// проверяем передаваемые параметры</span>
    <span class="hljs-keyword">if</span> (!<span class="hljs-built_in">Array</span>.isArray(arr) || !arr.length || <span class="hljs-keyword">typeof</span> filterCallback !== <span class="hljs-string">'function'</span>) {
        <span class="hljs-keyword">return</span> []
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">let</span> result = []
        <span class="hljs-comment">// ...</span>
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>, len = arr.length; i &lt; len; i++) {
            <span class="hljs-comment">// определяем соответствие возвращаемого результата заданному условию</span>
            <span class="hljs-keyword">if</span> (filterCallback(arr[i], i, arr)) {
                <span class="hljs-comment">// помещаем значение, прошедшее фильтр, в result</span>
                result.push(arr[i])
            }
        }
        <span class="hljs-keyword">return</span> result
    }
}
</code></pre><br>
Метод filter создает новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.<br>
<br>
<a name="36"></a><h4>36. Как бы Вы реализовали метод Array.prototype.reduce?</h4><br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">reduce</span>(<span class="hljs-params">arr, reduceCallbak, initialValue</span>) </span>{
    <span class="hljs-comment">// ..</span>
    <span class="hljs-keyword">if</span> (!<span class="hljs-built_in">Array</span>.isArray(arr) || !arr.length || <span class="hljs-keyword">typeof</span> filterCallback !== <span class="hljs-string">'function'</span>) {
        <span class="hljs-keyword">return</span> []
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-comment">// если в функцию не было передано значения initialValue, то</span>
        <span class="hljs-keyword">let</span> hasInitialValue = initialValue !== <span class="hljs-literal">undefined</span>
        <span class="hljs-keyword">let</span> value = hasInitialValue ? initialValue : arr[<span class="hljs-number">0</span>]
        <span class="hljs-comment">// мы будем использовать первый элемент initialValue</span>

        <span class="hljs-comment">// затем мы перебираем массив, начиная с 1, если в функцию не передавалось значения initialValue, либо с 0, если значение было передано</span>
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = hasInitialValue ? <span class="hljs-number">0</span> : <span class="hljs-number">1</span>, len = arr.length; i &lt; len; i++) {
            <span class="hljs-comment">// затем на каждой итерации мы присваиваем результат вызова reduceCallback переменной</span>
            value = reduceCallback(value, arr[i], i, arr)
        }
        <span class="hljs-keyword">return</span> value
    }
}
</code></pre><br>
Метод reduce применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.<br>
<br>
<a name="37"></a><h4>37. Что такое объект arguments?</h4><br>
Arguments — это коллекция аргументов, передаваемых функции. Это объект, подобный массиву, у него есть свойство length, мы можем получить доступ к определенному значению с помощью arguments[i], но у него отсутствуют методы forEach, reduce, filter и map. Он позволяет узнать количество параметров функции.<br>
<br>
Преобразовать arguments в массив можно с помощью Array.prototype.slice:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-built_in">Array</span>.prototype.slice.call(<span class="hljs-built_in">arguments</span>)
</code></pre><br>
Запомните: в стрелочных функциях объект arguments не работает.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">one</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-built_in">arguments</span>
}
<span class="hljs-keyword">const</span> two = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-built_in">arguments</span>
}
<span class="hljs-keyword">const</span> three = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">three</span>(<span class="hljs-params">{
    return arguments
}</span>)
<span class="hljs-title">const</span> <span class="hljs-title">four</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title">arguments</span>

<span class="hljs-title">four</span>(<span class="hljs-params"></span>) // <span class="hljs-title">arguments</span> <span class="hljs-title">is</span> <span class="hljs-title">not</span> <span class="hljs-title">defined</span>
</span></code></pre><br>
Вызов функции four приводит к ошибке ReferenceError: arguments is not defined. Эту проблему можно решить с помощью оператора rest:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> four = <span class="hljs-function">(<span class="hljs-params">...args</span>) =&gt;</span> args
</code></pre><br>
Это автоматически поместит все параметры в массив.<br>
<br>
<a name="38"></a><h4>38. Как создать объект, не имеющий прототипа?</h4><br>
Это можно сделать с помощью Object.create:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> o1 = {}
<span class="hljs-built_in">console</span>.log(o1.toString) <span class="hljs-comment">// [object Object]</span>

<span class="hljs-keyword">const</span> o2 = <span class="hljs-built_in">Object</span>.create(<span class="hljs-literal">null</span>) <span class="hljs-comment">// в качестве первого параметра методу Object-create передается объект-прототип</span>
<span class="hljs-comment">// нам не нужен объект-прототип, поэтому передаем null</span>
<span class="hljs-built_in">console</span>.log(o2.toString) <span class="hljs-comment">// o2.toString is not a function</span>
</code></pre><br>
<a name="39"></a><h4>39. Почему в представленном коде переменная b становится глобальной при вызове функции?</h4><br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myFunc</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">let</span> a = b = <span class="hljs-number">0</span>
}
myFunc()
</code></pre><br>
Так происходит, потому что оператор присваивания ("=") имеет правостороннюю ассоциативность, т.е. присваивает значения справа налево. Поэтому код принимает следующий вид:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myFunc</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">let</span> a = (b = <span class="hljs-number">0</span>)
}
myFunc()
</code></pre><br>
Сначала значение 0 присваивается переменной «b», которая не объявлена. Движок JS делает ее глобальной. Возвращаемое выражением b = 0 значение (0) затем присваивается локальной переменной «a».<br>
<br>
Эту проблему можно решить сначала объявив локальные переменные, а затем присвоив им значения:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myFunc</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">let</span> a, b
    a = b = <span class="hljs-number">0</span>
}
myFunc()
</code></pre><br>
<a name="40"></a><h4>40. Что такое ECMAScript?</h4><br>
ECMAScript — это спецификация, стандарт скриптовых языков программирования, он является основой JS, поэтому любые изменения ECMAScript отражаются на JS.<br>
<br>
Последний вариант спецификации ECMA-262 можно посмотреть <a href="https://www.ecma-international.org/publications/standards/Ecma-262.htm" rel="nofollow">здесь</a>.<br>
<br>
<a name="41"></a><h4>41. Что нового привнес в JS стандарт ES6 или ECMAScript2015?</h4><br>
<ul>
<li>Стрелочные функции (Arrow Functions).</li>
<li>Классы (Classes).</li>
<li>Шаблонные строки (Template Strings).</li>
<li>Расширенные объектные литералы (Enhanced Object literals).</li>
<li>Деструктуризация (Object Destructuring).</li>
<li>Промисы (Promises).</li>
<li>Генераторы (Generators).</li>
<li>Модули (Modules).</li>
<li>Symbol.</li>
<li>Прокси (Proxies).</li>
<li>Множества (Sets).</li>
<li>Параметры по умолчанию.</li>
<li>Операторы rest и spread.</li>
<li>Блочная область видимости (ключевые слова «let» и «const»).</li>
</ul><br>
<a name="42"></a><h4>42. В чем разница между ключевыми словами «var», «let» и «const»?</h4><br>
Переменные, объявленные с помощью ключевого слова «var», являются глобальными. Это означает, что они доступны из любого места в коде:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">giveMeX</span>(<span class="hljs-params">showX</span>)</span>{
    <span class="hljs-keyword">if</span>(showX){
        <span class="hljs-keyword">var</span> x = <span class="hljs-number">5</span>
    }
    <span class="hljs-keyword">return</span> x
}

<span class="hljs-built_in">console</span>.log(giveMeX(<span class="hljs-literal">false</span>))
<span class="hljs-built_in">console</span>.log(giveMeX(<span class="hljs-literal">true</span>))
</code></pre><br>
Результатом первого console.log будет undefined, второго — 5. Мы имеем доступ к переменной «x» из-за ее всплытия в глобальную область видимости. Код из примера выше интерпретируется следующим образом:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">giveMeX</span>(<span class="hljs-params">showX</span>)</span>{
    <span class="hljs-keyword">var</span> x <span class="hljs-comment">// имеет значение undefined</span>
    <span class="hljs-keyword">if</span>(showX){
        x = <span class="hljs-number">5</span>
    }
    <span class="hljs-keyword">return</span> x
}
</code></pre><br>
Результатом первого console.log является undefined, поскольку объявленные переменные, которым не присвоено значения, имеют значение undefined по умолчанию.<br>
<br>
Переменные, объявленные с помощью ключевых слов «let» и «const» имеют блочную область видимости. Это означает, что они доступны только внутри блока ({ }):<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">giveMeX</span>(<span class="hljs-params">showX</span>)</span>{
    <span class="hljs-keyword">if</span>(showX){
        <span class="hljs-keyword">let</span> x = <span class="hljs-number">5</span>
    }
    <span class="hljs-keyword">return</span> x
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">giveMeY</span>(<span class="hljs-params">showY</span>)</span>{
    <span class="hljs-keyword">if</span>(showY){
        <span class="hljs-keyword">let</span> y = <span class="hljs-number">5</span>
    }
    <span class="hljs-keyword">return</span> y
}
</code></pre><br>
Вызов этих функций с параметром false приведет к ошибке ReferenceError, потому что к переменным «x» и «y» нет доступа снаружи блока и их значения не возвращаются (не всплывают).<br>
<br>
Разница между «let» и «const» состоит в том, что в первом случае мы может менять значение переменной, а во втором — нет (константа). При этом, мы можем менять значение свойства объекта, объявленного с помощью const, но не само свойство (переменную).<br>
<br>
<a name="43"></a><h4>43. Что такое стрелочные функции (Arrow Functions)?</h4><br>
Стрелочная функция — это относительно новый способ создания функций в JS. Стрелочные функции создаются быстрее и имеют более читаемый синтаксис, чем функциональные выражения. В стрелочных функциях опускается слово «function»:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-comment">// ES5</span>
<span class="hljs-keyword">var</span> getCurrentDate = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()
}

<span class="hljs-comment">// ES6</span>
<span class="hljs-keyword">const</span> getCurrentDate = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()
</code></pre><br>
В функциональном выражении мы используем ключевое слово «return» для возврата значения. В стрелочной функции мы этого не делаем, поскольку стрелочные функции неявно возвращают значения при условии, что мы возвращаем одно выражение или значение:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-comment">// ES5</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">greet</span>(<span class="hljs-params">name</span>)</span>{
    <span class="hljs-keyword">return</span> <span class="hljs-string">'Hello '</span> + name + <span class="hljs-string">'!'</span> 
}

<span class="hljs-comment">// ES6</span>
<span class="hljs-keyword">const</span> greet = <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> <span class="hljs-string">`Hello <span class="hljs-subst">${name}</span>`</span>
<span class="hljs-keyword">const</span> greet2 = name = &gt; <span class="hljs-string">`Hello <span class="hljs-subst">${name}</span>`</span>
</code></pre><br>
Мы также можем передавать параметры стрелочным функциям. Если мы передаем один параметр, его можно не оборачивать в круглые скобки:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> getArgs = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">arguments</span>

<span class="hljs-keyword">const</span> getArgs2 = <span class="hljs-function">(<span class="hljs-params">...rest</span>) =&gt;</span> rest
</code></pre><br>
У стрелочных функций нет доступа к объекту arguments. Поэтому вызов первой функции приведет к ошибке. Для получения параметров, переданных функции, мы можем использовать оператор rest.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> data = {
    <span class="hljs-attr">result</span>: <span class="hljs-number">0</span>
    <span class="hljs-attr">nums</span>: [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]
    computeResult(){
        <span class="hljs-comment">// this ссылается на объект data</span>
        <span class="hljs-keyword">const</span> addAll = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
        <span class="hljs-comment">// стрелочные функции копируют значение this из лексического окружения</span>
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.nums.reduce(<span class="hljs-function">(<span class="hljs-params">total, cur</span>) =&gt;</span> total + cur, <span class="hljs-number">0</span>)
        }
    <span class="hljs-keyword">this</span>.result = addAll()
    }
}
</code></pre><br>
<a name="44"></a><h4>44. Что такое классы (Classes)?</h4><br>
Классы — это относительно новый способ написания функций-конструкторов в JS. Это синтаксический сахар для функций-конструкторов. В основе классов лежат те же прототипы и прототипное наследование:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-comment">// ES5</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Person</span>(<span class="hljs-params">firstName, lastName, age, address</span>)</span>{
    <span class="hljs-keyword">this</span>.firstName = firstName
    <span class="hljs-keyword">this</span>.lastName = lastName
    <span class="hljs-keyword">this</span>.age = age
    <span class="hljs-keyword">this</span>.address = address
}

Person.self = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>
}

Person.prototype.toString = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">return</span> <span class="hljs-string">'[object Person]'</span>
}

Person.prototype.getFullName = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.firstName + <span class="hljs-string">' '</span> + <span class="hljs-keyword">this</span>.lastName
}

<span class="hljs-comment">// ES6</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Person</span></span>{
    <span class="hljs-keyword">constructor</span>(firstName, lastName, age, address){
        <span class="hljs-keyword">this</span>.firstName = firstName
        <span class="hljs-keyword">this</span>.lastName = lastName
        <span class="hljs-keyword">this</span>.age = age
        <span class="hljs-keyword">this</span>.address = address
    }

    <span class="hljs-keyword">static</span> self(){
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>
    }

    toString(){
        <span class="hljs-keyword">return</span> <span class="hljs-string">'[object Person]'</span>
    }

    getFullName(){
        <span class="hljs-keyword">return</span> <span class="hljs-string">`<span class="hljs-subst">${<span class="hljs-keyword">this</span>.firstName}</span> <span class="hljs-subst">${<span class="hljs-keyword">this</span>.lastName}</span>`</span>
    }
}
</code></pre><br>
Переопределение методов и наследование от другого класса:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-comment">// ES5</span>
Employee.prototype = <span class="hljs-built_in">Object</span>.create(Person.prototype)

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Employee</span>(<span class="hljs-params">firstName, lastName, age, address, jobTitle, yearStarted</span>)</span>{
    Person.call(<span class="hljs-keyword">this</span>, firstName, lastName, age, address)
    <span class="hljs-keyword">this</span>.jobTitle = jobTitle
    <span class="hljs-keyword">this</span>.yearStarted = yearStarted
}

Employee.prototype.describe = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">return</span> <span class="hljs-string">`I am <span class="hljs-subst">${<span class="hljs-keyword">this</span>.getFullName()}</span> and I have a position of #{this.jobTitle} and I started at <span class="hljs-subst">${<span class="hljs-keyword">this</span>.yearStarted}</span>}`</span>
}

Employee.prototype.toString = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">return</span> <span class="hljs-string">'[object Employee]'</span>
}

<span class="hljs-comment">// ES6</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Employee</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Person</span></span>{ <span class="hljs-comment">// наследуемся от Person</span>
    <span class="hljs-keyword">constructor</span>(firstName, lastName, age, address, jobTitle, yearStarted){
        <span class="hljs-keyword">super</span>(firstName, lastName, age, address)
        <span class="hljs-keyword">this</span>.jobTitle = jobTitle
        <span class="hljs-keyword">this</span>.yearStarted = yearStarted
    }

    describe(){
       <span class="hljs-keyword">return</span> <span class="hljs-string">`I am <span class="hljs-subst">${<span class="hljs-keyword">this</span>.getFullName()}</span> and I have a position of #{this.jobTitle} and I started at <span class="hljs-subst">${<span class="hljs-keyword">this</span>.yearStarted}</span>}`</span> 
    }

    toString(){ <span class="hljs-comment">// переопределяем метод toString класса Person</span>
        <span class="hljs-keyword">return</span> <span class="hljs-string">'[object Employee]'</span>
    }
}
</code></pre><br>
Как узнать об использовании прототипов?<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Something</span></span>{ }

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">AnotherSomething</span>(<span class="hljs-params"></span>)</span>{ }

<span class="hljs-keyword">const</span> <span class="hljs-keyword">as</span> = <span class="hljs-keyword">new</span> AnotherSomething()
<span class="hljs-keyword">const</span> s = <span class="hljs-keyword">new</span> Something()

<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> Something) <span class="hljs-comment">// function</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> AnotherSomething) <span class="hljs-comment">// function</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">as</span>.toString()) <span class="hljs-comment">// [object Object]</span>
<span class="hljs-built_in">console</span>.log(a.toString()) <span class="hljs-comment">// [object Object]</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">as</span>.toString === <span class="hljs-built_in">Object</span>.prototype.toString)
<span class="hljs-built_in">console</span>.log(a.toString === <span class="hljs-built_in">Object</span>.prototype.toString)
<span class="hljs-comment">// в обоих случаях получаем true</span>
<span class="hljs-comment">// Object.prototype находится на вершине цепочки прототипов</span>
<span class="hljs-comment">// Something и AnotherSomething наследуют от Object.prototype</span>
</code></pre><br>
<a name="45"></a><h4>45. Что такое шаблонные литералы (Template Literals)?</h4><br>
Шаблонные литералы — относительно новый способ создания строк в JS. Шаблонные литералы создаются с помощью двойных обратных кавычек (``):<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-comment">// ES5</span>
<span class="hljs-keyword">var</span> greet = <span class="hljs-string">'Hi I\'m Mark'</span>

<span class="hljs-comment">// ES6</span>
<span class="hljs-keyword">let</span> greet = <span class="hljs-string">`Hi I'm Mark`</span>
</code></pre><br>
В шаблонных литералах нам не нужно экранировать одинарные кавычки.<br>
<pre><code class="javascript hljs"><span class="hljs-comment">// ES5</span>
<span class="hljs-keyword">var</span> lastWords = <span class="hljs-string">'\n'</span>
    + <span class="hljs-string">' I \n'</span>
    + <span class="hljs-string">' am \n'</span>
    + <span class="hljs-string">'Iron Man \n'</span>

<span class="hljs-comment">// ES6</span>
<span class="hljs-keyword">let</span> lastWords = <span class="hljs-string">`
    I
    am
    Iron Man
`</span>
</code></pre><br>
В ES6 нам не нужно использовать управляющую последовательность "\n" для перевода строки.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-comment">// ES5</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">greet</span>(<span class="hljs-params">name</span>)</span>{
    <span class="hljs-keyword">return</span> <span class="hljs-string">'Hello '</span> + name + <span class="hljs-string">'!'</span>
}

<span class="hljs-comment">// ES6</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">greet</span>(<span class="hljs-params">name</span>)</span>{
    <span class="hljs-keyword">return</span> <span class="hljs-string">`Hello <span class="hljs-subst">${name}</span>!`</span>
}
</code></pre><br>
В ES6 нам не нужно использовать конкатенацию строк для объединения текста с переменной: мы можем использовать выражение ${expr} для получения значения переменной.<br>
<br>
<a name="46"></a><h4>46. Что такое деструктуризация объекта (Object Destructuring)?</h4><br>
Деструктуризация — относительно новый способ получения (извлечения) значений объекта или массива.<br>
<br>
Допустим, у нас есть такой объект:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> employee = {
    <span class="hljs-attr">firstName</span>: <span class="hljs-string">'Marko'</span>,
    <span class="hljs-attr">lastName</span>: <span class="hljs-string">'Polo'</span>,
    <span class="hljs-attr">position</span>: <span class="hljs-string">'Software Developer'</span>,
    <span class="hljs-attr">yearHired</span>: <span class="hljs-number">2017</span>
}
</code></pre><br>
Раньше для получения свойств объекта мы создавали переменные для каждого свойства. Это было очень скучно и сильно раздражало:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">var</span> firstName = employee.firstName
<span class="hljs-keyword">var</span> lastName = employee.lastName
<span class="hljs-keyword">var</span> position = employee.position
<span class="hljs-keyword">var</span> yearHired = employee.yearHired
</code></pre><br>
Использование деструктуризации позволяет сделать код чище и отнимает меньше времени. Синтаксис деструктуризации следующий: заключаем свойства объекта, которые хотим получить, в фигурные скобки ({ }), а если речь идет о массиве — в квадратные скобки ([ ]):<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">let</span> { firstName, lastName, position, yearHired } = employee
</code></pre><br>
Для изменения имени переменной следует использовать «propertyName: newName»:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">let</span> { <span class="hljs-attr">firstName</span>: fName, <span class="hljs-attr">lastName</span>: lName, position, yearHired } = employee
</code></pre><br>
Для присвоения переменным значения по умолчанию следует использовать «propertyName = 'defaultValue'»:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">let</span> { firstName = <span class="hljs-string">'Mark'</span>, <span class="hljs-attr">lastName</span>: lName, position, yearHired } = employee
</code></pre><br>
<a name="47"></a><h4>47. Что такое модули (Modules)?</h4><br>
Модули позволяют объединять (использовать) код из разных файлов и избавляют нас от необходимости держать весь код в одном большом файле. До появления модулей в JS существовало две популярные системы модулей для поддержки кода:<br>
<br>
<ul>
<li>CommonJS — Nodejs</li>
<li>AMD (AsyncronousModuleDefinition) — Browsers</li>
</ul><br>
Синтаксис модулей очень простой: мы используем import для импорта функциональности или значений из другого файла или файлов и export для экспорта.<br>
<br>
Экспорт функциональности в другой файл (именной экспорт):<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-comment">// ES5 CommonJS - helpers.js</span>
exports.isNull = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">val</span>)</span>{
    <span class="hljs-keyword">return</span> val === <span class="hljs-literal">null</span>
}

exports.isUndefined = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">val</span>)</span>{
    <span class="hljs-keyword">return</span> val === <span class="hljs-literal">undefined</span>
}

exports.isNullOrUndefined = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">val</span>)</span>{
    <span class="hljs-keyword">return</span> exports.isNull(val) || exports.isUndefined(val)
}

<span class="hljs-comment">// ES6 модули</span>
<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isNull</span>(<span class="hljs-params">val</span>)</span>{
    <span class="hljs-keyword">return</span> val === <span class="hljs-literal">null</span>;
}

<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isUndefined</span>(<span class="hljs-params">val</span>) </span>{
    <span class="hljs-keyword">return</span> val === <span class="hljs-literal">undefined</span>;
}

<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isNullOrUndefined</span>(<span class="hljs-params">val</span>) </span>{
    <span class="hljs-keyword">return</span> isNull(val) || isUndefined(val);
}
</code></pre><br>
Импорт функциональности в другой файл:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-comment">// ES5 CommonJS - index.js</span>
<span class="hljs-keyword">const</span> helpers = <span class="hljs-built_in">require</span>(<span class="hljs-string">'./helpers.js'</span>)
<span class="hljs-keyword">const</span> isNull = helpers.isNull
<span class="hljs-keyword">const</span> isUndefined = helpers.isUndefined
<span class="hljs-keyword">const</span> isNullOrUndefined = helpers.isNullOrUndefined

<span class="hljs-comment">// либо с помощью деструктуризации</span>
<span class="hljs-keyword">const</span> { isNull, isUndefined, isNullOrUndefined } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'./helpers.js'</span>)

<span class="hljs-comment">// ES6 модули</span>
<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> helpers <span class="hljs-keyword">from</span> <span class="hljs-string">'./helpers.js'</span> <span class="hljs-comment">// helpers - это объект</span>

<span class="hljs-comment">// либо</span>
<span class="hljs-keyword">import</span> { isNull, isUndefined, isNullOrUndefined <span class="hljs-keyword">as</span> isValid} <span class="hljs-keyword">from</span> <span class="hljs-string">'./helpers.js'</span> <span class="hljs-comment">// используем "as" для переименовывания</span>
</code></pre><br>
Экспорт по умолчанию:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-comment">// ES5 CommonJS - index.js</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Helpers</span> </span>{
    <span class="hljs-keyword">static</span> isNull(val){
        <span class="hljs-keyword">return</span> val === <span class="hljs-literal">null</span>
    }

    <span class="hljs-keyword">static</span> isUndefined(val){
        <span class="hljs-keyword">return</span> val === <span class="hljs-literal">undefined</span>
    }

    <span class="hljs-keyword">static</span> isNullOrUndefined(val){
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.isNull(val) || <span class="hljs-keyword">this</span>.isUndefined(val)
    }
}

<span class="hljs-built_in">module</span>.exports = Helpers

<span class="hljs-comment">// ES6 модули</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Helpers</span> </span>{
    <span class="hljs-keyword">static</span> isNull(val){
        <span class="hljs-keyword">return</span> val === <span class="hljs-literal">null</span>
    }

    <span class="hljs-keyword">static</span> isUndefined(val){
        <span class="hljs-keyword">return</span> val === <span class="hljs-literal">undefined</span>
    }

    <span class="hljs-keyword">static</span> isNullOrUndefined(val){
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.isNull(val) || <span class="hljs-keyword">this</span>.isUndefined(val)
    }
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> Helpers
</code></pre><br>
Импорт:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-comment">// ES5 CommonJS - index.js</span>
<span class="hljs-keyword">const</span> Helpers = <span class="hljs-built_in">require</span>(<span class="hljs-string">'./helpers.js'</span>)
<span class="hljs-built_in">console</span>.log(Helpers.isNull(<span class="hljs-literal">null</span>))

<span class="hljs-comment">// ES6 модули</span>
<span class="hljs-keyword">import</span> Helpers <span class="hljs-keyword">from</span> <span class="hljs-string">'./helpers.js'</span>
<span class="hljs-built_in">console</span>.log(Helpers.isNull(<span class="hljs-literal">null</span>))
</code></pre><br>
Это базовое использование модулей. Я не стал вдаваться в подробности, поскольку мой пост и без того получается слишком большим.<br>
<br>
<a name="48"></a><h4>48. Что такое объект Set?</h4><br>
Объект Set позволяет хранить уникальные значения, примитивы и ссылки на объекты. Еще раз: в Set можно добавлять только уникальные значения. Он проверяет хранящиеся в нем значения с помощью алгоритма SameZeroValue.<br>
<br>
Экземпляр Set создается с помощью конструктора Set. Мы также можем передать ему некоторые значения при создании:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> set1 = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Set</span>()
<span class="hljs-keyword">const</span> set2 = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Set</span>([<span class="hljs-string">'a'</span>,<span class="hljs-string">'b'</span>,<span class="hljs-string">'c'</span>,<span class="hljs-string">'d'</span>,<span class="hljs-string">'d'</span>,<span class="hljs-string">'e'</span>]) <span class="hljs-comment">// вторая "d" не добавится</span>
</code></pre><br>
Мы можем добавлять значения в Set, используя метод add. Поскольку метод add является возвращаемым, мы может использовать цепочку вызовов:<br>
<br>
<pre><code class="javascript hljs">set2.add(<span class="hljs-string">'f'</span>)
set2.add(<span class="hljs-string">'g'</span>).add(<span class="hljs-string">'h'</span>).add(<span class="hljs-string">'i'</span>).add(<span class="hljs-string">'j'</span>).add(<span class="hljs-string">'k'</span>).add(<span class="hljs-string">'k'</span>) <span class="hljs-comment">// вторая "k" не добавится</span>
</code></pre><br>
Мы можем удалять значения из Set, используя метод delete:<br>
<br>
<pre><code class="javascript hljs">set2.delete(<span class="hljs-string">'k'</span>) <span class="hljs-comment">// true</span>
set2.delete(<span class="hljs-string">'z'</span>) <span class="hljs-comment">// false, потому что в set2 нет такого значения</span>
</code></pre><br>
Мы можем проверить наличие свойства в Set, используя метод has:<br>
<br>
<pre><code class="javascript hljs">set2.has(<span class="hljs-string">'a'</span>) <span class="hljs-comment">// true</span>
set2.has(<span class="hljs-string">'z'</span>) <span class="hljs-comment">// false</span>
</code></pre><br>
Для получения длины Set используется метод size:<br>
<br>
<pre><code class="javascript hljs">set2.size <span class="hljs-comment">// 10</span>
</code></pre><br>
Метод clear очищает Set:<br>
<br>
<pre><code class="javascript hljs">set2.clear() <span class="hljs-comment">// пусто</span>
</code></pre><br>
Мы можем использовать Set для удаления повторяющихся значений в массиве:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> nums = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>,<span class="hljs-number">6</span>,<span class="hljs-number">7</span>,<span class="hljs-number">8</span>,<span class="hljs-number">8</span>,<span class="hljs-number">5</span>]
<span class="hljs-keyword">const</span> uniqNums = [...new <span class="hljs-built_in">Set</span>(nums)] <span class="hljs-comment">// [1,2,3,4,5,6,7,8]</span>
</code></pre><br>
<a name="49"></a><h4>49. Что такое функция обратного вызова (Callback Function)?</h4><br>
Функция обратного вызова — это функция, вызов которой отложен на будущее (происходит при некоторых условиях, например, при наступлении события).<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> btnAdd = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">'btnAdd'</span>)

btnAdd.addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">clickCallback</span>(<span class="hljs-params">e</span>))</span>{
    <span class="hljs-comment">// делаем нечто полезное</span>
}
</code></pre><br>
В примере мы ждем события «клик» на элементе с идентификатором «btnAdd». По клику вызывается функция clickCallback. Функция обратного вызова добавляет некоторый функционал данным или событию. Методам reduce, filter и map в качестве второго аргумента передается функция обратного вызова. Хорошей аналогией callback является следующая ситуация: Вы звоните кому-то, он не отвечает, Вы оставляете ему сообщение и ждете, когда он перезвонит. Звонок или сообщение — это событие или данные, а callback — это ожидание (предвосхищение) встречного звонка.<br>
<br>
<a name="50"></a><h4>50. Что такое промисы (Promises)?</h4><br>
Промисы — это один из приемов работы с асинхронным кодом в JS. Они возвращают результат асинхронной операции. Промисы были придуманы для решения проблемы так называемого «ада функций обратного вызова».<br>
<br>
<pre><code class="javascript hljs">fs.readFile(<span class="hljs-string">'somefile.txt'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e, data</span>)</span>{
    <span class="hljs-keyword">if</span>(e){
        <span class="hljs-built_in">console</span>.log(e)
    }
    <span class="hljs-built_in">console</span>.log(data)
})
</code></pre><br>
Проблемы при таком подходе начинаются, когда нам необходимо добавить еще одну асинхронную операцию в первую (внутрь первой), затем еще одну и т.д. В результате мы получаем беспорядочный и нечитаемый код:<br>
<br>
<pre><code class="javascript hljs">fs.readFile(<span class="hljs-string">'somefile.txt'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e,data</span>)</span>{
    <span class="hljs-comment">// код</span>
    fs.readFile(<span class="hljs-string">'directory'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e, files</span>)</span>{
        <span class="hljs-comment">// код</span>
        fs.mkdir(<span class="hljs-string">'directory'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{
            <span class="hljs-comment">// код</span>
        })
    })
})
</code></pre><br>
А вот как это выглядит с промисами:<br>
<br>
<pre><code class="javascript hljs">promReadFile(<span class="hljs-string">'file/path'</span>)
.then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
    <span class="hljs-keyword">return</span> promReaddir(<span class="hljs-string">'directory'</span>)
})
.then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
    <span class="hljs-keyword">return</span> promMkdir(<span class="hljs-string">'directory'</span>)
})
.catch(<span class="hljs-function"><span class="hljs-params">e</span> =&gt;</span> {
    <span class="hljs-built_in">console</span>.error(e)
})
</code></pre><br>
У промиса есть четыре состояния:<br>
<br>
<ul>
<li>Ожидание — начальное состояние промиса. Результата промиса неизвестен, поскольку операция не завершена.</li>
<li>Выполнено — асинхронная операция выполнена, имеется результат.</li>
<li>Отклонено — асинхронная операция не выполнена, имеется причина.</li>
<li>Завершено — выполнено или отклонено.</li>
</ul><br>
В качестве параметров конструктор промиса принимает resolve и reject. В resolve записывается результат выполнения операции, в reject — причина невыполнения операции. Результат может быть обработан в методе .then, ошибка — в методе .catch. Метод .then также возвращает промис, поэтому мы можем использовать цепочку, состоящую из нескольких .then.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> myPromiseAsync = <span class="hljs-function">(<span class="hljs-params">...args</span>) =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
        doSomeAsync(...args, (error, data) =&gt; {
            <span class="hljs-keyword">if</span>(error){
                reject(error)
            } <span class="hljs-keyword">else</span>{
                resolve(data)
            }
        })
    })
}

myPromiseAsync()
.then(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(result)
})
.catch(<span class="hljs-function"><span class="hljs-params">reason</span> =&gt;</span> {
    <span class="hljs-built_in">console</span>.error(reason)
})
</code></pre><br>
Мы можем создать вспомогательную функцию для преобразования асинхронной операции с callback в промис. Она будет работать наподобие util из Node.js («промисификация»):<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> toPromise = <span class="hljs-function">(<span class="hljs-params">asyncFuncWithCallback</span>) =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params">...args</span>) =&gt;</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">res, rej</span>) =&gt;</span> {
            asyncFuncWithCallback(...args, (e, result) =&gt; {
                <span class="hljs-keyword">return</span> e ? rej(e) : res(result)
            })
        })
    }
}

<span class="hljs-keyword">const</span> promiseReadFile = toPromise(fs.readFile)

promiseReadFile(<span class="hljs-string">'file/path'</span>)
.then(<span class="hljs-function">(<span class="hljs-params">data</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(data)
})
.catch(<span class="hljs-function"><span class="hljs-params">e</span> =&gt;</span> <span class="hljs-built_in">console</span>.error(e))
</code></pre><br>
Подробнее о промисах можно почитать <a href="https://learn.javascript.ru/promise-basics" rel="nofollow">здесь</a> и <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise" rel="nofollow">здесь</a>.<br>
<br>
<a name="51"></a><h4>51. Что такое async/await?</h4><br>
Async/await — относительно новый способ написания асинхронного (неблокирующего) кода в JS. Им оборачивают промис. Он делает код более читаемым и чистым, чем промисы и функции обратного вызова. Однако для использования async/await необходимо хорошо знать промисы.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-comment">// промис</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">callApi</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">return</span> fetch(<span class="hljs-string">'url/to/api/endpoint'</span>)
    .then(<span class="hljs-function"><span class="hljs-params">resp</span> =&gt;</span> resp.json())
    .then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
        <span class="hljs-comment">// работаем с данными</span>
    }).catch(<span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {
        <span class="hljs-comment">// работаем с ошибкой</span>
    })
}

<span class="hljs-comment">// async/await</span>
<span class="hljs-comment">// для перехвата ошибок используется try/catch</span>
<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">callApi</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">try</span>{
        <span class="hljs-keyword">const</span> resp = <span class="hljs-keyword">await</span> fetch(<span class="hljs-string">'url/to/api/endpoint'</span>)
        <span class="hljs-keyword">const</span> data = <span class="hljs-keyword">await</span> res.json()
        <span class="hljs-comment">// работаем с данными</span>
    } <span class="hljs-keyword">catch</span>(e){
        <span class="hljs-comment">// работаем с ошибкой</span>
    }
}
</code></pre><br>
Запомните: использование ключевого слова «async» перед функцией заставляет ее возвращать промис:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> giveMeOne = <span class="hljs-keyword">async</span> () = <span class="hljs-number">1</span>

giveMeOne()
.then(<span class="hljs-function">(<span class="hljs-params">num</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(num) <span class="hljs-comment">// 1</span>
})
</code></pre><br>
Ключевое слово «await» можно использовать только внутри асинхронной функции. Использование «await» внутри другой функции приведет к ошибке. Await ожидает завершения выражения справа, чтобы вернуть его значение перед выполнением следующей строчки кода.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> giveMeOne = <span class="hljs-keyword">async</span>() =&gt; <span class="hljs-number">1</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getOne</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">try</span>{
        <span class="hljs-keyword">const</span> num = <span class="hljs-keyword">await</span> giveMeOne()
        <span class="hljs-built_in">console</span>.log(num)
    } <span class="hljs-keyword">catch</span>(e){
        <span class="hljs-built_in">console</span>.log(e)
    }
}
<span class="hljs-comment">// Uncaught SyntaxError: await is only valid in an async function</span>

<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTwo</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">try</span>{
        <span class="hljs-keyword">const</span> num1 = <span class="hljs-keyword">await</span> giveMeOne()
        <span class="hljs-keyword">const</span> nm2 = <span class="hljs-keyword">await</span> giveMeOne()
        <span class="hljs-keyword">return</span> num1 + num2
    } <span class="hljs-keyword">catch</span>(e){
        <span class="hljs-built_in">console</span>.log(e)
    }
}

<span class="hljs-keyword">await</span> getTwo() <span class="hljs-comment">// 2</span>
</code></pre><br>
Подробнее об async/await можно почитать <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/async_function" rel="nofollow">здесь</a> и <a href="https://learn.javascript.ru/async-await" rel="nofollow">здесь</a>.<br>
<br>
<a name="52"></a><h4>52. В чем разница между spread-оператором и rest-оператором?</h4><br>
Операторы spread и rest имеют одинаковый синтаксис ("..."). Разница состоит в том, что с помощью spread мы передаем или распространяем данные массива на другие данные, а с помощью rest — получаем все параметры функции и помещаем их в массив (или извлекаем часть параметров).<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params">a, b</span>)</span>{
    <span class="hljs-keyword">return</span> a + b
}

<span class="hljs-keyword">const</span> nums = [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>]
<span class="hljs-keyword">const</span> sum = add(...nums)
<span class="hljs-built_in">console</span>.log(sum) <span class="hljs-comment">// 11</span>
</code></pre><br>
В этом примере мы используем spread при вызове функции add с данными массива nums. Значением переменной «a» будет 5, b = 6, sum = 11.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params">...rest</span>)</span>{
    <span class="hljs-keyword">return</span> rest.reduce(<span class="hljs-function">(<span class="hljs-params">total, current</span>) =&gt;</span> total + current)
}

<span class="hljs-built_in">console</span>.log(add(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>)) <span class="hljs-comment">// 3</span>
<span class="hljs-built_in">console</span>.log(add(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>)) <span class="hljs-comment">// 15</span>
</code></pre><br>
Здесь мы вызываем функцию add с любым количеством аргументов. Add возвращает сумму этих аргументов.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> [first, ...others] = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]
<span class="hljs-built_in">console</span>.log(first) <span class="hljs-comment">// 1</span>
<span class="hljs-built_in">console</span>.log(others) <span class="hljs-comment">// [2, 3, 4, 5]</span>
</code></pre><br>
В этом примере мы используем rest для помещения любого количества параметров, кроме первого, в массив others.<br>
<br>
<a name="53"></a><h4>53. Что такое параметры по умолчанию (Default Parameters)?</h4><br>
Это относительно новый способ определения значений переменных по умолчанию.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-comment">// ES5</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params">a,b</span>)</span>{
    a = a || <span class="hljs-number">0</span>
    b = b || <span class="hljs-number">0</span>
    <span class="hljs-keyword">return</span> a + b
}

<span class="hljs-comment">// ES6</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params">a = <span class="hljs-number">0</span>, b = <span class="hljs-number">0</span></span>)</span>{
    <span class="hljs-keyword">return</span> a + b
}
<span class="hljs-comment">// если мы не присвоим переменным "a" и "b" какие-нибудь значения, они будут равняться 0</span>
add(<span class="hljs-number">1</span>) <span class="hljs-comment">// 1</span>
</code></pre><br>
Можно использовать деструктуризацию:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getFirst</span>(<span class="hljs-params">[first, ...rest] = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]</span>)</span>{
    <span class="hljs-keyword">return</span> first
}

getFirst() <span class="hljs-comment">// 0</span>
getFirst([<span class="hljs-number">10</span>,<span class="hljs-number">20</span>,<span class="hljs-number">30</span>]) <span class="hljs-comment">// 10</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getArr</span>(<span class="hljs-params">{ nums } = { nums: [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>] }</span>)</span>{
    <span class="hljs-keyword">return</span> nums
}

getArr <span class="hljs-comment">// [1,2,3,4]</span>
getArr({<span class="hljs-attr">nums</span>:[<span class="hljs-number">5</span>,<span class="hljs-number">4</span>,<span class="hljs-number">3</span>,<span class="hljs-number">2</span>,<span class="hljs-number">1</span>]}) <span class="hljs-comment">// [5,4,3,2,1]</span>
</code></pre><br>
Мы даже можем использовать по умолчанию параметры, объявленные в том же месте:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">doSomethingWithValue</span>(<span class="hljs-params">value = <span class="hljs-string">'Hello World'</span>, callback = (</span>) =&gt; </span>{ <span class="hljs-built_in">console</span>.log(value) }){
    callback()
}
doSomethingWithValue() <span class="hljs-comment">// Hello World</span>
</code></pre><br>
<a name="54"></a><h4>54. Что такое объектная обертка (Wrapper Objects)?</h4><br>
Примитивы строка, число и boolean имеют свойства и методы, несмотря на то, что они не являются объектами:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">let</span> name = <span class="hljs-string">'marko'</span>

<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> name) <span class="hljs-comment">// string</span>
<span class="hljs-built_in">console</span>.log(name.toUpperCase()) <span class="hljs-comment">// MARKO</span>
</code></pre><br>
Name — это строка (примитивный тип), у которого нет свойств и методов, но когда мы вызываем метод toUpperCase(), это приводит не к ошибке, а к «MARKO».<br>
<br>
Причина такого поведения заключается в том, что name временно преобразуется в объект. У каждого примитива, кроме null и undefined, есть объект-обертка. Такими объектами являются String, Number, Boolean, Symbol и BigInt. В нашем случае код принимает следующий вид:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">new</span> <span class="hljs-built_in">String</span>(name).toUpperCase()) <span class="hljs-comment">// MARKO</span>
</code></pre><br>
Временный объект отбрасывается по завершении работы со свойством или методом.<br>
<br>
<a name="55"></a><h4>55. В чем разница между явным и неявным преобразованием или приведением к типу (Implicit and Explicit Coercion)?</h4><br>
Неявное преобразование — это способ приведения значения к другому типу без нашего ведома (участия).<br>
<br>
Предположим, у нас есть следующее:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-built_in">console</span>.log(<span class="hljs-number">1</span> + <span class="hljs-string">'6'</span>)
<span class="hljs-built_in">console</span>.log(<span class="hljs-literal">false</span> + <span class="hljs-literal">true</span>)
<span class="hljs-built_in">console</span>.log(<span class="hljs-number">6</span> * <span class="hljs-string">'2'</span>)
</code></pre><br>
Результатом первого console.log будет 16. В других языках это привело бы к ошибке, но в JS 1 конвертируется в строку и конкатенируется (присоединяется) c 6. Мы ничего не делали, преобразование произошло автоматически.<br>
<br>
Результатом второго console.log будет 1. False было преобразовано в 0, true — в 1. 0 + 1 = 1.<br>
<br>
Результатом третьего console.log будет 12. Строка 2 была преобразована в число перед умножением на 6.<br>
<br>
Явное преобразование предполагает наше участие в приведении значения к другому типу:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-built_in">console</span>.log(<span class="hljs-number">1</span> + <span class="hljs-built_in">parseInt</span>(<span class="hljs-string">'6'</span>))
</code></pre><br>
В этом примере мы используем parseInt для приведения строки 6 к числу, затем складываем два числа и получаем 7.<br>
<br>
<a name="56"></a><h4>56. Что такое NaN? Как проверить, является ли значение NaN?</h4><br>
NaN или Not A Number (не число) — это значение, получаемое в результате выполнения числовой операции над нечисловым значением:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">let</span> a

<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">parseInt</span>(<span class="hljs-string">'abc'</span>))
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">parseInt</span>(<span class="hljs-literal">null</span>))
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">parseInt</span>(<span class="hljs-literal">undefined</span>))
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">parseInt</span>(++a))
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">parseInt</span>({} * <span class="hljs-number">10</span>))
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">parseInt</span>(<span class="hljs-string">'abc'</span> - <span class="hljs-number">2</span>))
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">parseInt</span>(<span class="hljs-number">0</span> / <span class="hljs-number">0</span>))
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">parseInt</span>(<span class="hljs-string">'10a'</span> * <span class="hljs-number">10</span>))
</code></pre><br>
В JS есть встроенный метод isNaN, позволяющий проверять, является ли значение NaN, но он ведет себя довольно странно:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">isNaN</span>()) <span class="hljs-comment">// true</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">isNaN</span>(<span class="hljs-literal">undefined</span>)) <span class="hljs-comment">// true</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">isNaN</span>({})) <span class="hljs-comment">// true</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">isNaN</span>(<span class="hljs-built_in">String</span>(<span class="hljs-string">'a'</span>))) <span class="hljs-comment">// true</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">isNaN</span>(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> { })) <span class="hljs-comment">// true</span>
</code></pre><br>
Результатом всех console.log является true, несмотря на то, что ни одно из значений не является NaN.<br>
<br>
ES6 для проверки, является ли значение NaN, рекомендует использовать метод Number.isNaN. Мы также можем написать вспомогательную функцию для решения проблемы «неравенства NaN самому себе»:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">checkIsNan</span>(<span class="hljs-params">value</span>)</span>{
    <span class="hljs-keyword">return</span> value !== value
}
</code></pre><br>
<a name="57"></a><h4>57. Как проверить, является ли значение массивом?</h4><br>
Для этого следует использовать метод Array.isArray:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Array</span>.isArray(<span class="hljs-number">5</span>)) <span class="hljs-comment">// false</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Array</span>.isArray(<span class="hljs-string">''</span>)) <span class="hljs-comment">// false</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Array</span>.isArray()) <span class="hljs-comment">// false</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Array</span>.isArray(<span class="hljs-literal">null</span>)) <span class="hljs-comment">// false</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Array</span>.isArray( {<span class="hljs-attr">length</span>: <span class="hljs-number">5</span> })) <span class="hljs-comment">// false</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Array</span>.isArray([])) <span class="hljs-comment">// true</span>
</code></pre><br>
Если среда, в которой Вы работаете, не поддерживает данный метод, можете использовать такой полифил:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isArray</span>(<span class="hljs-params">value</span>)</span>{
    <span class="hljs-keyword">return</span> <span class="hljs-built_in">Object</span>.prototype.toString.call(value) === <span class="hljs-string">'[object Array]'</span>
}
</code></pre><br>
<a name="58"></a><h4>58. Как проверить, что число является четным, без использования деления по модулю или деления с остатком (оператора "%")?</h4><br>
Для решения данной задачи можно использовать оператор "&amp;" (бинарное и). Оператор "&amp;" сравнивает операнды как бинарные значения.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isEven</span>(<span class="hljs-params">num</span>)</span>{
    <span class="hljs-keyword">if</span>(num &amp; <span class="hljs-number">1</span>){
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
    } <span class="hljs-keyword">else</span>{
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>
    }
}
</code></pre><br>
0 в бинарной системе счисления это 000<br>
1 — это 001<br>
2 — 010<br>
3 — 011<br>
4 — 100<br>
5 — 101<br>
6 — 110<br>
7 — 111<br>
и т.д.<br>
<br>
<img src="https://habrastorage.org/r/w1560/webt/y8/zo/m2/y8zom220osynreetfh8fp-dkuog.png" data-src="https://habrastorage.org/webt/y8/zo/m2/y8zom220osynreetfh8fp-dkuog.png"><br>
<br>
Console.log(5 &amp; 1) вернет 1. Сначала оператор "&amp;" конвертирует оба числа в бинарные значения, 5 превращается в 101, 1 — в 001. Затем производится побитовое сравнение:<br>
<br>
<img src="https://habrastorage.org/r/w1560/webt/vy/4k/em/vy4kemefvzxgjlwdp3dmsh64ae8.png" data-src="https://habrastorage.org/webt/vy/4k/em/vy4kemefvzxgjlwdp3dmsh64ae8.png"><br>
<br>
Сравниваем 1 и 0, получаем 0.<br>
Сравниваем 0 и 0, получаем 0.<br>
Сравниваем 1 и 1, получаем 1.<br>
Преобразуем бинарное значение в целое число, получаем 1.<br>
<br>
Если эта информация кажется Вам слишком сложной, мы можем решить поставленную задачу с помощью рекурсивной функции:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isEven</span>(<span class="hljs-params">num</span>)</span>{
    <span class="hljs-keyword">if</span>(num &lt; <span class="hljs-number">0</span> || num === <span class="hljs-number">1</span>) <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
    <span class="hljs-keyword">if</span>(num == <span class="hljs-number">0</span>) <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>
    <span class="hljs-keyword">return</span> isEven(num - <span class="hljs-number">2</span>)
}
</code></pre><br>
<a name="59"></a><h4>59. Как определить наличие свойства в объекте?</h4><br>
Существует три способа это сделать.<br>
<br>
Первый способ состоит в использовании оператора «in»:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> o = {
    <span class="hljs-string">'prop'</span>: <span class="hljs-string">'bwahahah'</span>,
    <span class="hljs-string">'prop2'</span>: <span class="hljs-string">'hweasa'</span>
}

<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'prop'</span> <span class="hljs-keyword">in</span> o) <span class="hljs-comment">// true</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'prop1'</span> <span class="hljs-keyword">in</span> o) <span class="hljs-comment">// false</span>
</code></pre><br>
Второй — использовать метод hasOwnProperty:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-built_in">console</span>.log(o.hasOwnProperty(<span class="hljs-string">'prop2'</span>)) <span class="hljs-comment">// true</span>
<span class="hljs-built_in">console</span>.log(o.hasOwnProperty(<span class="hljs-string">'prop1'</span>)) <span class="hljs-comment">// false</span>
</code></pre><br>
Третий — индексная нотация массива:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-built_in">console</span>.log(o[<span class="hljs-string">'prop'</span>]) <span class="hljs-comment">// bwahahah</span>
<span class="hljs-built_in">console</span>.log(o[<span class="hljs-string">'prop1'</span>]) <span class="hljs-comment">// undefined</span>
</code></pre><br>
<a name="60"></a><h4>60. Что такое AJAX?</h4><br>
AJAX или Asyncronous JavaScript and XML — это набор взаимосвязанных технологий, которые позволяют работать с данными в асинхронном режиме. Это означает, что мы можем отправлять данные на сервер и получать данные с него без перезагрузки веб-страницы.<br>
<br>
AJAX использует следующие технологии:<br>
HTML — структура веб-страницы.<br>
CSS — стили веб-страницы.<br>
JavaScript — поведение страницы и работа с DOM.<br>
XMLHttpRequest API — отправка и получение данных с сервера.<br>
PHP, Python, Nodejs — какой-нибудь серверный язык.<br>
<br>
<a name="61"></a><h4>61. Как в JS создать объект?</h4><br>
Объектный литерал:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> o = {
    <span class="hljs-attr">name</span>: <span class="hljs-string">'Mark'</span>,
    greeting(){
        <span class="hljs-keyword">return</span> <span class="hljs-string">`Hi, I'm <span class="hljs-subst">${<span class="hljs-keyword">this</span>.name}</span>`</span>
    }
}

o.greeting <span class="hljs-comment">// Hi, I'm Mark</span>
</code></pre><br>
Функция-конструктор:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Person</span>(<span class="hljs-params">name</span>)</span>{
    <span class="hljs-keyword">this</span>.name = name
}

Person.prototype.greeting = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">return</span> <span class="hljs-string">`Hi, I'm <span class="hljs-subst">${<span class="hljs-keyword">this</span>.name}</span>`</span>
}

<span class="hljs-keyword">const</span> mark = <span class="hljs-keyword">new</span> Person(<span class="hljs-string">'Mark'</span>)

mark.greeting() <span class="hljs-comment">// Hi, I'm Mark</span>
</code></pre><br>
Метод Object.create:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> n = {
    greeting(){
        <span class="hljs-keyword">return</span> <span class="hljs-string">`Hi, I'm <span class="hljs-subst">${<span class="hljs-keyword">this</span>.name}</span>`</span>
    }
}

<span class="hljs-keyword">const</span> o = <span class="hljs-built_in">Object</span>.create(n)

o.name = <span class="hljs-string">'Mark'</span>

<span class="hljs-built_in">console</span>.log(o.greeting) <span class="hljs-comment">// Hi, I'm Mark</span>
</code></pre><br>
<a name="62"></a><h4>62. В чем разница между методами Object.freeze и Object.seal?</h4><br>
Разница заключается в том, что при использовании метода Object.freeze мы не можем менять или редактировать свойства объекта, а при использовании Object.seal у нас такая возможность имеется.<br>
<br>
<a name="63"></a><h4>63. В чем разница между оператором «in» и методом hasOwnProperty?</h4><br>
Отличие состоит в том, что оператор «in» проверяет наличие свойства не только в самом объекте, но и в его прототипах, а метод hasOwnProperty — только в объекте.<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-built_in">console</span>.log(<span class="hljs-string">'prop'</span> <span class="hljs-keyword">in</span> o) <span class="hljs-comment">// true</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'toString'</span> <span class="hljs-keyword">in</span> o) <span class="hljs-comment">// true</span>

<span class="hljs-built_in">console</span>.log(o.hasOwnProperty(<span class="hljs-string">'prop'</span>)) <span class="hljs-comment">// true</span>
<span class="hljs-built_in">console</span>.log(o.hasOwnProperty(<span class="hljs-string">'toString'</span>)) <span class="hljs-comment">// false</span>
</code></pre><br>
<a name="64"></a><h4>64. Какие приемы работы с асинхронным кодом в JS Вы знаете?</h4><br>
<ul>
<li>Функции обратного вызова (Callbacks).</li>
<li>Промисы (Promises).</li>
<li>Async/await.</li>
<li>Библиотеки вроде async.js, blueprint, q, co.</li>
</ul><br>
<a name="65"></a><h4>65. В чем разница между обычной функцией и функциональным выражением?</h4><br>
Допустим, у нас есть следующее:<br>
<br>
<pre><code class="javascript hljs">hoistedFunc()
notHoistedFunc()

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">hoistedFunc</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'I am hoisted'</span>)
}

<span class="hljs-keyword">var</span> notHoistedFunc = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'I will not be hoisted!'</span>)
}
</code></pre><br>
Вызов notHoistedFunc приведет к ошибке, а вызов hoistedFunc нет, потому что hoistedFunc «всплывает», поднимается в глобальную область видимости, а notHoistedFunc нет.<br>
<br>
<a name="66"></a><h4>66. Как в JS вызвать функцию?</h4><br>
В JS существует 4 способа вызвать функцию. Вызов определяет значение this или «владельца» функции.<br>
<br>
Вызов в качестве функции. Если функция вызывается как метод, конструктор или с помощью методов apply или call, значит она вызывается как функция. Владельцем такой функции является объект window:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params">a,b</span>)</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>)
    <span class="hljs-keyword">return</span> a + b
}

add(<span class="hljs-number">1</span>,<span class="hljs-number">5</span>) <span class="hljs-comment">// window, 6</span>

<span class="hljs-keyword">const</span> o = {
    method(callback){
        callback()
    }
}

o.method(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>) <span class="hljs-comment">// window</span>
})
</code></pre><br>
Вызов в качестве метода. Когда функция является свойством объекта, мы называем ее методом. Когда вызывается метод, значением this становится объект этого метода:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> details = {
    <span class="hljs-attr">name</span>: <span class="hljs-string">'Marko'</span>,
    getName(){
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name
    }
}

details.getName() <span class="hljs-comment">// Marko, значением this является объект details</span>
</code></pre><br>
Вызов в качестве конструктора. Когда функция вызывается с использованием ключевого слова «new», мы называем такую функцию конструктором. При этом создается пустой объект, являющийся значением this:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Employee</span>(<span class="hljs-params">name, position, yearHired</span>)</span>{
    <span class="hljs-comment">// создается пустой объект, являющийся значением this</span>
    <span class="hljs-comment">// this = {}</span>
    <span class="hljs-keyword">this</span>.name = name
    <span class="hljs-keyword">this</span>.position = position
    <span class="hljs-keyword">this</span>.yearHired = yearHired
    <span class="hljs-comment">// наследование от Employee.prototype неявно возвращает this, если не указано иное</span>
}

<span class="hljs-keyword">const</span> emp = <span class="hljs-keyword">new</span> Employee(<span class="hljs-string">'Marko Polo'</span>, <span class="hljs-string">'Software Development'</span>, <span class="hljs-number">2017</span>)
</code></pre><br>
Вызов с помощью методов apply или call. Мы используем эти методы, когда хотим явно определить значение this или владельца функции:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> obj1 = {
    <span class="hljs-attr">result</span>: <span class="hljs-number">0</span>
}

<span class="hljs-keyword">const</span> obj2 = {
    <span class="hljs-attr">result</span>: <span class="hljs-number">0</span>
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">reduceAdd</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">let</span> result = <span class="hljs-number">0</span>
    <span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>, len = <span class="hljs-built_in">arguments</span>.length; i &lt; len; i++){
        result += <span class="hljs-built_in">arguments</span>[i]
    }
    <span class="hljs-keyword">this</span>.result = result
}

reduceAdd.apply(obj1, [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]) <span class="hljs-comment">// значением this является obj1</span>
reduceAdd.call(obj2, <span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>) <span class="hljs-comment">// значением this является obj2</span>
</code></pre><br>
<a name="67"></a><h4>67. Что такое запоминание или мемоизация (Memoization)?</h4><br>
Мемоизация — это прием создания функции, способной запоминать ранее вычисленные результаты или значения. Преимущество мемоизации заключается в том, что мы избегаем повторного выполнения функции с одинаковыми аргументами. Недостатком является то, что мы вынуждены выделять дополнительную память для сохранения результатов.<br>
<br>
<a name="68"></a><h4>68. Как бы Вы реализовали вспомогательную функцию запоминания?</h4><br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">memoize</span>(<span class="hljs-params">fn</span>)</span>{
    <span class="hljs-keyword">const</span> cache = {}
    <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">param</span>)</span>{
        <span class="hljs-keyword">if</span>(cache[param]){
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'cached'</span>)
            <span class="hljs-keyword">return</span> cache[param]
        } <span class="hljs-keyword">else</span>{
            <span class="hljs-keyword">let</span> result = fn(param)
            cache[param] = result
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'not cached'</span>)
            <span class="hljs-keyword">return</span> result
        }
    }
}

<span class="hljs-keyword">const</span> toUpper = <span class="hljs-function">(<span class="hljs-params">str = <span class="hljs-string">''</span></span>) =&gt;</span> str.toUpperCase()

<span class="hljs-keyword">const</span> toUpperMemoized = memoize(toUpper)

toUpperMemoized(<span class="hljs-string">'abcdef'</span>)
toUpperMemoized(<span class="hljs-string">'abcdef'</span>) <span class="hljs-comment">// не выполнится</span>
</code></pre><br>
Мы реализовали функцию мемоизации с одним аргументом. Сделаем ее «мультиаргументной»:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> slice = <span class="hljs-built_in">Array</span>.prototype.slice
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">memoize</span>(<span class="hljs-params">fn</span>)</span>{
    <span class="hljs-keyword">const</span> cache = {}
    <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params">...args</span>) =&gt;</span> {
        <span class="hljs-keyword">const</span> params = slice.call(args)
        <span class="hljs-built_in">console</span>.log(params)
        <span class="hljs-keyword">if</span>(cache[params]){
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'cached'</span>)
            <span class="hljs-keyword">return</span> cache[params]
        } <span class="hljs-keyword">else</span>{
            <span class="hljs-keyword">let</span> result = fn(...args)
            cache[params] = result
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'not cached'</span>)
            <span class="hljs-keyword">return</span> result
        }
    }
}
<span class="hljs-keyword">const</span> makeFullName = <span class="hljs-function">(<span class="hljs-params">fName, lName</span>) =&gt;</span> <span class="hljs-string">`<span class="hljs-subst">${fName}</span> <span class="hljs-subst">${lName}</span>`</span>
<span class="hljs-keyword">const</span> reduceAdd = <span class="hljs-function">(<span class="hljs-params">numbers, startValue = <span class="hljs-number">0</span></span>) =&gt;</span> numbers.reduce(<span class="hljs-function">(<span class="hljs-params">total, cur</span>) =&gt;</span> total + cur, startValue)

<span class="hljs-keyword">const</span> memoizedFullName = memoize(makeFullName)
<span class="hljs-keyword">const</span> memoizeReduceAdd = memoize(reduceAdd)

memoizedFullName(<span class="hljs-string">'Marko'</span>, <span class="hljs-string">'Polo'</span>)
memoizedFullName(<span class="hljs-string">'Marko'</span>, <span class="hljs-string">'Polo'</span>) <span class="hljs-comment">// не выполнится</span>

memoizeReduceAdd([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>],<span class="hljs-number">5</span>)
memoizeReduceAdd([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>],<span class="hljs-number">5</span>) <span class="hljs-comment">// не выполнится</span>
</code></pre><br>
<a name="69"></a><h4>69. Почему typeof null возвращает object? Как проверить, является ли значение null?</h4><br>
typeof null == 'object' всегда будет возвращать true по историческим причинам. Поступало предложение исправить эту ошибку, изменив typeof null = 'object' на typeof null = 'null', но оно было отклонено в интересах сохранения обратной совместимости (такое изменение повлекло бы за собой большое количество ошибок).<br>
<br>
Для проверки, является ли значение null можно использовать оператор строгого равенства (===):<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isNull</span>(<span class="hljs-params">value</span>)</span>{
    <span class="hljs-keyword">return</span> value === <span class="hljs-literal">null</span>
}
</code></pre><br>
<a name="70"></a><h4>70. Для чего используется ключевое слово «new»?</h4><br>
Ключевое слово «new» используется в функциях-конструкторах для создания нового объекта (нового экземпляра класса).<br>
<br>
Допустим, у нас есть такой код:<br>
<br>
<pre><code class="javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Employee</span>(<span class="hljs-params">name, position, yearHired</span>)</span>{
    <span class="hljs-keyword">this</span>.name = name
    <span class="hljs-keyword">this</span>.position = position
    <span class="hljs-keyword">this</span>.yearHired = yearHired
}

<span class="hljs-keyword">const</span> emp = <span class="hljs-keyword">new</span> Employee(<span class="hljs-string">'Marko Polo'</span>, <span class="hljs-string">'Software Development'</span>, <span class="hljs-number">2017</span>)
</code></pre><br>
Ключевое слово «new» делает 4 вещи:<br>
<br>
<ol>
<li>Создает пустой объект.</li>
<li>Привязывает к нему значение this.</li>
<li>Функция наследует от functionName.prototype.</li>
<li>Возвращает значение this, если не указано иное.</li>
</ol></div></div></div> <div class="v-portal" style="display:none;"></div></div> <div aria-hidden="true" role="dialog" tabindex="-1" class="pswp"><div class="pswp__bg"></div> <div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div> <div class="pswp__item"></div> <div class="pswp__item"></div></div> <div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><span class="tm-svg-icon__wrapper pswp__button pswp__button--close"><svg height="16" width="16" class="tm-svg-img tm-svg-icon"><title>Закрыть</title> <use xlink:href="/img/megazord-v25.9b4a34a5.svg#close"></use></svg></span> <div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div> <button class="pswp__button pswp__button--arrow--left"><svg viewBox="0 0 24 24" class="pswp__button-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414L9.414 12l6.293 6.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z"></path></svg></button> <button class="pswp__button pswp__button--arrow--right"><svg viewBox="0 0 24 24" class="pswp__button-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414L9.414 12l6.293 6.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z"></path></svg></button></div></div></div> <!----></div> <div data-test-id="article-meta-links" class="tm-article-presenter__meta"><div class="tm-separated-list tm-article-presenter__meta-list"><span class="tm-separated-list__title">Теги:</span> <ul class="tm-separated-list__list"><li class="tm-separated-list__item"><a href="/ru/search/?target_type=posts&amp;order=relevance&amp;q=%5Bjavascript%5D" class="tm-tags-list__link">javascript</a></li><li class="tm-separated-list__item"><a href="/ru/search/?target_type=posts&amp;order=relevance&amp;q=%5B%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%5D" class="tm-tags-list__link">программирование</a></li><li class="tm-separated-list__item"><a href="/ru/search/?target_type=posts&amp;order=relevance&amp;q=%5B%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0%5D" class="tm-tags-list__link">разработка</a></li></ul></div> <div class="tm-separated-list tm-article-presenter__meta-list"><span class="tm-separated-list__title">Хабы:</span> <ul class="tm-separated-list__list"><li class="tm-separated-list__item"><a href="/ru/hub/webdev/" class="tm-hubs-list__link">
    Разработка веб-сайтов
  </a></li><li class="tm-separated-list__item"><a href="/ru/hub/javascript/" class="tm-hubs-list__link">
    JavaScript
  </a></li><li class="tm-separated-list__item"><a href="/ru/hub/programming/" class="tm-hubs-list__link">
    Программирование
  </a></li></ul></div></div></article>
