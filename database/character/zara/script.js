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
            imageElement.src = 'https://sun9-81.userapi.com/s/v1/ig2/oXEVwBXmLT0FMeXQHqJYc6ycSIlJM8lSvd4CohH-rwGAnMCoL6UTo1x4vLZJfwyBWh-zJmGxSzXwUaljReXrvILf.jpg?quality=96&as=32x51,48x76,72x114,108x171,160x254,240x381,360x571,480x761,540x856,640x1015,681x1080&from=bu&cs=681x0'; // Замени на реальный URL
            titleElement.textContent = 'Zara';
            descriptionElement.textContent = 'Описание первой картины...';
            break;
        case 'image2':
            imageElement.src = 'https://sun9-37.userapi.com/s/v1/ig2/1XFIpIOrQiIg7S6D247PCHL1bvLCO_7OreYiN30eqxwPzE5EUq9bDe6fmEMPOwD2TgTC_vKgxiX5E2hXXbK4Fpgx.jpg?quality=96&as=32x61,48x92,72x138,108x207,160x307,240x461,360x691,480x921,540x1037,640x1229,720x1382,798x1532&from=bu&cs=798x0'; // Замени на реальный URL
            titleElement.textContent = 'Zara: Poolside Coincidence';
            descriptionElement.textContent = 'Описание второй картины...';
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