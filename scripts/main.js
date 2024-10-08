// настраиваем скрипт на выпадение навигационного меню при нажатии на бургер
// прописываем три переменные
// Document метод querySelector() возвращает первый элемент (Element) документа, который соответствует 
// указанному селектору или группе селекторов. Если совпадений не найдено, возвращает значение null.
// переменная для нахождения бургера (menu__btn)
const menuBtn = document.querySelector('.menu__btn');
// переменная для нахождения символа закрытия навигационного меню(крестик)
const menuClose = document.querySelector('.menu__close');
// переменная для нахождения навигационного меню и его элементов
const menuList = document.querySelector('.menu__list');
// переменная для нахождения затемнённого фона
const menuShadow = document.querySelector('.menu--close');

// addEventListener добавляет элементу действие, которое будет выполнено после срабатывания события
// например, на клик мышки(click)
// () => {событие} - анонимная функция(стрелочная запись)
// при нажатии(клике) на бургер появиться навигационного меню
menuBtn.addEventListener('click', () => {
    // cвойство classList даёт возможность просматривать и манипулировать классами элемента
    // classList.add() - этот метод используется для добавления класса
    // класса к элементу. В качестве аргументов нужно передавать строку с именем класса
    // menuList добавляем класс menu__list--open
    // classList.toggle() - метод добавляет класс, если его нет и удаляет, если есть
    menuList.classList.toggle('menu__list--open')
    // скрипт для затемнённого фона
    menuShadow.classList.toggle('menu--open')
})

// при клике по закрывающему символу навигационное меню закроется
menuClose.addEventListener('click', () => {
    // classList.remove - метод для удаления класса
    menuList.classList.remove('menu__list--open')
    // удаляем затемнение
    menuShadow.classList.remove('menu--open')
})

