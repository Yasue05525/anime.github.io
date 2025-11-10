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
            imageElement.src = 'https://sun9-85.userapi.com/s/v1/ig2/Ms10iGGmAl6_z5GsR7NndMp1gjO97w_rOIKNDruRIDNxZG15-gu7XL0gs2ak-xGwXMEIa03ADZGVvVKckOW-k_ME.jpg?quality=95&as=32x52,48x79,72x118,108x177,160x262,240x393,360x589,480x786,540x884,640x1048,720x1179,733x1200&from=bu&cs=733x0'; // Замени на реальный URL
            titleElement.textContent = 'Honolulu';
            descriptionElement.textContent = 'Легкий крейсер класса «Бруклин» – Гонолулу, бортовой номер CL-48!';
            break;
        case 'image2':
            imageElement.src = 'https://sun9-73.userapi.com/s/v1/ig2/uPg2k8Y9SYwwESMFYjVnZB5N7nVFShh5yAxk_M12U8a4rXlSlzoolWzxWZ1zqvFiEPIeq2I11hhdrVZEIXS-SQcL.jpg?quality=95&as=32x55,48x82,72x123,108x184,160x273,240x409,360x614,469x800&from=bu&cs=469x0'; // Замени на реальный URL
            titleElement.textContent = 'Honolulu: Umbrella Girl';
            descriptionElement.textContent = 'Если все будут смотреть на учителя, то, скорее всего, они не будут смотреть на меня спереди... Что касается зонтика, то он... Я знаю, что он выделяет меня, но я также не хочу, чтобы люди смотрели на меня сзади...';
            break;
        case 'image3':
            imageElement.src = 'https://sun9-20.userapi.com/s/v1/ig2/viKVT_T1bAd7YRSTACNhCamx2s3YBzTCVBs6WqRzKCIWOMIwk_NDx-Iy0k4htZVcM9ahfmSyXFX33b1luHUwz18E.jpg?quality=95&as=32x55,48x83,72x125,108x187,160x277,240x416,360x624,480x832,540x936,640x1109,720x1247,811x1405&from=bu&cs=811x0'; // Замени на реальный URL
            titleElement.textContent = 'Dido: Summer Accident';
            descriptionElement.textContent = 'Аааах! Моё мороженое! Что с этим дурацким шлангом?! Командир, не стой просто так, помоги мне!';
            break;
        case 'image4':
            imageElement.src = 'https://sun9-16.userapi.com/s/v1/ig2/CW_u6rCxllWJmL9gR0LZO7h7I8dObqJpYkfbMIouzaujtgwkWHaB8BS8ff5-mVNQAVxp8Q5Fm8aqDRbX7v_AWPVZ.jpg?quality=95&as=32x44,48x66,72x99,108x149,160x221,240x331,360x497,480x663,540x746,640x884,720x994,850x1174&from=bu&cs=850x0'; // Замени на реальный URL
            titleElement.textContent = 'Dido: Manjuu Mischief';
            descriptionElement.textContent = 'Где только Сент-Луис нашёл такое... такое бесстыдное нижнее бельё, если кто-то узнает... Ага-ага! Командир, что вы здесь делаете? Убирайтесь немедленно!';
            break;
        // Добавь остальные case для других кнопок
        case 'image5':
            imageElement.src = 'https://sun9-40.userapi.com/s/v1/ig2/oUDJFobBjyhWE3LOfBPTGYJRQdkVkKC61OjxS42OVbbPT_7bXMMgJxpe3C1CRp0M6mMhVTSuoY58sM7yMdJqVzIf.jpg?quality=95&as=32x49,48x74,72x111,108x167,160x248,240x371,360x557,480x743,540x835,640x990,720x1114,850x1315&from=bu&cs=850x0';
            titleElement.textContent = 'Dido: Among the Stalls';
            descriptionElement.textContent = 'Пойдём, Луис, ларёк с золотыми рыбками вон там! ... П-почему ты на меня так странно смотришь, как будто... Подожди... Иииик! К-командир?! Когда ты здесь успел?!';
            break;
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