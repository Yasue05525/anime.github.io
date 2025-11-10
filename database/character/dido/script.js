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
            imageElement.src = 'https://sun9-10.userapi.com/s/v1/ig2/vGT1lhe_O9dOwxm318GR9mAM7Q6pPK_mbKUZDB0S0lN3sZzpsO9IP1SLO-k1Rs-PisSDzbempmgtL4I__H1aasL-.jpg?quality=96&as=32x46,48x70,72x105,108x157,160x232,240x349,360x523,480x697,540x784,640x930,720x1046,736x1069&from=bu&cs=736x0'; // Замени на реальный URL
            titleElement.textContent = 'Dido';
            descriptionElement.textContent = 'Лёгкий крейсер типа Dido – Dido (HMS Dido.)';
            break;
        case 'image2':
            imageElement.src = 'https://sun9-79.userapi.com/s/v1/ig2/yoy_Ddlo7g9lO4KqLRXWENjQimUAjp-uF7VQ0mfNZyxun4vzSHl8TX6MiO0ERgnTVkSGdz-bsOJb7jckG_nVxCY0.jpg?quality=95&as=32x45,48x67,72x101,108x151,160x224,240x336,360x504,480x672,540x757,571x800&from=bu&cs=571x0'; // Замени на реальный URL
            titleElement.textContent = 'Dido: Anxious Bisque Doll';
            descriptionElement.textContent = 'Это так дерзко для скромной служанки наряжаться в такие наряды и стоять рядом со своим господином... И все же я пойду к своему господину и... М-м-господин...?!';
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
