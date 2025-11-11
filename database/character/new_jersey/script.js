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
            imageElement.src = 'https://sun9-8.userapi.com/s/v1/ig2/ZNdb26jNbtGY2w7dQFq9IqKoHDWAETEuJ42JA4yMgsc2_VHGawCZcLpqiUsP6_mBjGJuCdDDG6SxRtKme1DZ3cLl.jpg?quality=95&as=32x46,48x70,72x104,108x157,160x232,240x348,360x522,480x696,540x783,552x800&from=bu&cs=552x0'; // Замени на реальный URL
            titleElement.textContent = 'New Jersey';
            descriptionElement.textContent = 'Нету описание';
            break;
        case 'image2':
            imageElement.src = 'https://sun9-63.userapi.com/s/v1/ig2/cZuzrF-Hx_4x4-7WS6TXwt8mhGxzKM8au4wl5IdDHl5krbu87NrmYQuIT9nB8FiuLJgDVgIr867PcvNb1M6Ddn36.jpg?quality=95&as=32x60,48x90,72x135,108x202,160x299,240x449,360x673,428x800&from=bu&cs=428x0'; // Замени на реальный URL
            titleElement.textContent = 'New Jersey: Exhilarating Steps!';
            descriptionElement.textContent = 'Нету описание';
            break;
        case 'image3':
            imageElement.src = 'https://sun9-65.userapi.com/s/v1/ig2/w15GtiAvD2jJakb8UgKLwrgOEdlwEWNv4aYTqDefG-2dOqKb-S2O_xLTPntLPJyG0XgooX61LAeDLgk3TB9gmlma.jpg?quality=95&as=32x50,48x75,72x112,108x168,160x249,240x374,360x560,480x747,514x800&from=bu&cs=514x0'; // Замени на реальный URL
            titleElement.textContent = 'New Jersey: Midsummer Leisure';
            descriptionElement.textContent = 'Нету описание';
            break;
        case 'image4':
            imageElement.src = 'https://sun9-52.userapi.com/s/v1/ig2/BAP_oAExyRbgJsdvuNXEXQ_sUGWDWZv3HTRAhizFMEFKGP3oZT-kjZIQxlCYsWlnlfXghC8TtLsvPqy3WrdYe2ZS.jpg?quality=95&as=32x56,48x84,72x126,108x189,160x280,240x420,360x630,457x800&from=bu&cs=457x0'; // Замени на реальный URL
            titleElement.textContent = 'New Jersey: Dancing in the Moonlight';
            descriptionElement.textContent = 'Нету описание';
            break;
        // Добавь остальные case для других кнопок
        case 'image5':
            imageElement.src = 'https://sun9-43.userapi.com/s/v1/ig2/INCX8Rb-jA7vPWen6h4AMvYRmENWzEh25OIPIPlwjn_4n36AonH-f0hlAC3wpeqzNw89l9BVYlJBdPcJ5tN3jLbU.jpg?quality=96&as=32x63,48x94,72x141,108x212,160x314,240x471,360x706,480x942,540x1060,640x1256&from=bu&cs=640x0';
            titleElement.textContent = 'New Jersey: Wedding';
            descriptionElement.textContent = 'Нету описание';
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
