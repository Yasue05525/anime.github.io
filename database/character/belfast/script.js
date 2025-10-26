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
            imageElement.src = 'https://sun9-40.userapi.com/s/v1/ig2/TxJzV1-Ug5GmXFzrctq0qS82jQmBgC1EavK2cccfVa5R-bAKEgILjyMM5dXj31cyrQhBqWi6cXyOkcpDY782FZad.jpg?quality=96&as=32x47,48x70,72x105,108x158,160x234,240x351,360x526,480x702,540x789,640x935,720x1052,1080x1578,1248x1824&from=bu&cs=1248x0'; // Замени на реальный URL
            titleElement.textContent = 'Belfast';
            descriptionElement.textContent = 'Описание первой картины...';
            break;
        case 'image2':
            imageElement.src = 'https://sun9-14.userapi.com/s/v1/ig2/4J4QEUD0ueAosQe_ckcfPp4rB4J9K6hHCT9tjvNvADq0k4EAZxN5iJoy85zzSUG-KKS5xeZ6u0FsaqI8Hch1Z1kN.jpg?quality=95&as=32x45,48x68,72x102,108x153,160x227,240x340,360x510,480x680,540x765,640x906,720x1019,1080x1529,1280x1812,1440x2039,1808x2560&from=bu&cs=1280x0'; // Замени на реальный URL
            titleElement.textContent = 'Belfast: Iridescent Rosa';
            descriptionElement.textContent = 'Описание второй картины...';
            break;
        case 'image3':
            imageElement.src = 'https://sun9-55.userapi.com/s/v1/ig2/NYaK8Ct-_AMSjHNbNMFHKLIT6bDmLQZSq1E3S8k4vbOeYJy-iQw4Oa0rI_a103P_XPLugctdTUQLCgi6bxWNz9bQ.jpg?quality=95&as=32x45,48x68,72x102,108x153,160x226,240x339,360x509,480x679,540x764,640x905,720x1018,990x1400&from=bu&cs=990x0';
            titleElement.textContent = 'Belfast: The Noble Attendant';
            descriptionElement.textContent = 'Описание третьей картины...';
            break;
        case 'image4':
            imageElement.src = 'https://sun2-17.userapi.com/s/v1/ig2/vIkRm1werAWgA8tjJUq2QIIjaYIEPQvkLMgoNH6CRxp7g7K7Z35qFF5Wvue1pVbx93U7MlKk5Fu6Mql_o1TQ4B0a.jpg?quality=96&as=32x52,48x78,72x117,108x176,160x261,240x391,360x586,480x782,540x880,640x1042,720x1173,811x1321&from=bu&cs=811x0';
            titleElement.textContent = 'Belfast: Shopping with the Head Maid';
            descriptionElement.textContent = 'Описание третьей картины...';
            break;
        case 'image5':
            imageElement.src = 'https://sun9-59.userapi.com/s/v1/ig2/NKh_-pWcLaoLIZDC2WPAAbuGbWqFH0luMfbOs7FNUDoDXUB88MaJrM9LezLKXIpn95KNvJwTb7oLKOiPMv_Vt2IE.jpg?quality=95&as=32x53,48x80,72x120,108x180,160x267,240x400,360x600,480x800,540x900,640x1067,720x1200,1080x1800,1200x2000&from=bu&cs=1200x0';
            titleElement.textContent = 'Belfast: Serene Steel';
            descriptionElement.textContent = 'Описание третьей картины...';
            break;
        case 'image6':
            imageElement.src = 'https://sun9-30.userapi.com/s/v1/ig2/aNERiOPlRb7ht6PcQE50Y3ALVQq6umqpWonfZWJEOVPPuQ7iQ0rNzBvHRG6PfYFsNo3Eb73Zbkeqj-nt_WTRjU9L.jpg?quality=95&as=32x45,48x68,72x102,108x153,160x227,240x340,360x510,480x680,540x765,565x800&from=bu&cs=565x0';
            titleElement.textContent = 'Belfast: Piping-Hot Perfection';
            descriptionElement.textContent = 'Описание третьей картины...';
            break;
        case 'image7':
            imageElement.src = 'https://sun9-55.userapi.com/s/v1/ig2/tyP07YBU821rpsEzllFNhY93WR_NenGYR1W1olh5DU8OfFk_ajRQIzs1OgWQeMiYuY0-1E4OggKV-rPcqR99Dwmh.jpg?quality=96&as=32x45,48x68,72x102,108x153,160x226,240x339,360x509,480x679,540x764,640x905,720x1018,850x1202&from=bu&cs=850x0';
            titleElement.textContent = 'Belfast: The Pledge of Claddagh';
            descriptionElement.textContent = 'Описание третьей картины...';
            break;
        case 'image8':
            imageElement.src = 'https://sun9-71.userapi.com/s/v1/ig2/WobPDy_-SWyifsmtpVlf78f_5xDL37SeZn4Xx18JhzKVGWbXria_QZVs_vc43YVfunjh0H753wdfJGQh0kjetrjf.jpg?quality=96&as=32x76,48x114,72x171,108x256,160x379,240x569,360x853,480x1138,540x1280,600x1422&from=bu&cs=600x0';
            titleElement.textContent = 'Belfast: Folded Fascination';
            descriptionElement.textContent = 'Описание третьей картины...';
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