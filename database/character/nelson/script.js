function showImage(imageType) {
    const imageElement = document.getElementById('dynamicImage');
    const titleElement = document.getElementById('imageTitle');
    const descriptionElement = document.getElementById('imageDescription');
    
    // Показываем контейнер с изображением
    document.getElementById('contentBlock').style.display = 'block';
    imageElement.style.display = 'block';
    
    // В зависимости от типа изображения устанавливаем разные картинки и описания
    switch(imageType) {
        case 'image1':
            imageElement.src = 'https://sun9-42.userapi.com/s/v1/ig2/--KfyFZtcmA6AoqI9bLtceXnMrMVBmRkiaxyYiyaaxEhY3nmL9LQxdN3vRsjLxCu_DIMca9_xc3Q5GaGySqnOJ1J.jpg?quality=95&as=32x44,48x66,72x100,108x149,160x221,240x332,360x498,480x663,540x746,640x885,720x995,811x1121&from=bu&cs=811x0'; // Замени на реальный URL
            titleElement.textContent = 'Nelson';
            descriptionElement.textContent = 'Линейный корабль класса «Нельсон» – «Нельсон», бортовой номер 28!';
            break;
        case 'image2':
            imageElement.src = 'https://sun9-73.userapi.com/s/v1/ig2/zNq1lcW7YdRKBt1avtgrMazShjdSFcmeAfSIAHMb1mKw1MS9gICkos4ZO_m8CIEfmTv7bVOt5Ztr-joE7mDBPX-q.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,533x800&from=bu&cs=533x0'; // Замени на реальный URL
            titleElement.textContent = 'Nelson: Luna Witch';
            descriptionElement.textContent = 'Какой странный костюм… ну и ладно, Хэллоуин же. Не может же быть всё так плохо, это же весёлое занятие. Во-первых, я же не обещала, что присоединюсь с самого начала!';
            break;
        case 'image3':
            imageElement.src = 'https://sun9-10.userapi.com/s/v1/ig2/cLWUZ0eBPmVyjshqrxgNhZrWIk3THH13XTOf57uqO-Y1X4L0rRIIjMCGCJLqjGiI1Tsjb_UEWgnfmC-bl8Wr6Kx3.jpg?quality=95&as=32x45,48x68,72x102,108x153,160x226,240x339,360x509,480x679,540x764,640x905,720x1018,850x1202&from=bu&cs=850x0'; // Замени на реальный URL
            titleElement.textContent = 'Nelson: Azure & Gold Summer Night';
            descriptionElement.textContent = 'Нету описание';
            break;
        case 'image4':
            imageElement.src = 'https://sun9-83.userapi.com/s/v1/ig2/SiXCVXQmmG0xZn68R0JBPU1NDyEVAN5ZhSVYO5E7tnqxafn26XjiwDbOMLII5o6HiNxyUXhCtlpNHXiZg6Mkt3rD.jpg?quality=95&as=32x45,48x68,72x102,108x153,160x226,240x339,360x509,480x679,540x764,640x905,720x1018,850x1202&from=bu&cs=850x0'; // Замени на реальный URL
            titleElement.textContent = 'Nelson: Retrofit';
            descriptionElement.textContent = 'Нету описание';
            break;
        // Добавь остальные case для других кнопок
        default:
            imageElement.src = 'https://example.com/default.jpg';
            titleElement.textContent = 'Картина';
            descriptionElement.textContent = 'Описание картины...';
    }
}

// Инициализация - скрываем контент при загрузке
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contentBlock').style.display = 'none';
});
