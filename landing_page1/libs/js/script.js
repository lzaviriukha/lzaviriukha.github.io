window.onload = function () {

 // Инициализация плавного скролла
    var scroll = new SmoothScroll('a[href*="#"]');


    // Переключение фона меню при скролле
    window.addEventListener('scroll', function (e) {
        var header = document.querySelector('#header');

         if (window.scrollY > 100) {
            header.style.backgroundColor = 'white';
        } else {
            header.style.backgroundColor = null;
        }
    });


    /**
     * Функция добавляет классс к элементу, когда пользователь до него доскролливает.
     */
    function addClassWhenScrolledTo(elemSelector, addedClass, elemTopShift) {
        window.addEventListener('scroll', function (e) {   

            (document.querySelectorAll(elemSelector) || []).forEach(function (elem) {
                var elemTop = elem.getBoundingClientRect().top + document.body.scrollTop;
                var windowTop = window.scrollY;


                if (elemTop < windowTop + elemTopShift ) { 
                   elem.classList.add(addedClass);
               }
           });
        });
    }

    // "Всплытие" карточки Photoshop
    addClassWhenScrolledTo('.cardwrapper__container--background', 'cardwrapper__container--scale', 600);

    // Заполнение прогрессбаров скиллов
    addClassWhenScrolledTo('.progress-box', 'progress-box--width', 600);
};