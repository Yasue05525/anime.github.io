// Полный список 88 официальных созвездий
const constellations = [
    // Список всех созвездий с описаниями
    { name: "Андромеда", description: "Дочь царя Цефея, прикованная к скале" },
    { name: "Близнецы", description: "Кастор и Поллукс, братья-близнецы" },
    { name: "Большая Медведица", description: "Великая небесная медведица" },
    { name: "Большой Пёс", description: "Созвездие с Сириусом, ярчайшей звездой" },
    { name: "Весы", description: "Единственное незодиакальное созвездие" },
    { name: "Водолей", description: "Человек, льюший воду из кувшина" },
    { name: "Возничий", description: "Колесничий с козой и козлятами" },
    { name: "Волк", description: "Зверь, пронзённый кентавром" },
    { name: "Волопас", description: "Пастух, охраняющий медведиц" },
    { name: "Волосы Вероники", description: "Волосы царицы Вероники" },
    { name: "Ворон", description: "Птица Аполлона" },
    { name: "Геркулес", description: "Сын Зевса, совершивший подвиги" },
    { name: "Гидра", description: "Многоголовая змея" },
    { name: "Голубь", description: "Птица, принесшая весть Ною" },
    { name: "Гончие Псы", description: "Собаки волопаса" },
    { name: "Дева", description: "Богиня правосудия Астрея" },
    { name: "Дельфин", description: "Посланник Посейдона" },
    { name: "Дракон", description: "Ладон, охранявший сад Гесперид" },
    { name: "Единорог", description: "Мифический белый конь" },
    { name: "Жертвенник", description: "Алтарь, на котором боги клялись" },
    { name: "Живописец", description: "Мольберт художника" },
    { name: "Жираф", description: "Длинношеее животное" },
    { name: "Журавль", description: "Птица, несущая стражу" },
    { name: "Заяц", description: "Жертва охотничьих собак" },
    { name: "Змееносец", description: "Целитель, держащий змею" },
    { name: "Змея", description: "Змея в руках Змееносца" },
    { name: "Золотая Рыба", description: "Тропическая рыба" },
    { name: "Индеец", description: "Коренной житель Америки" },
    { name: "Кассиопея", description: "Царица Эфиопии" },
    { name: "Киль", description: "Часть корабля Арго" },
    { name: "Кит", description: "Морское чудовище" },
    { name: "Козерог", description: "Морской козёл" },
    { name: "Компас", description: "Навигационный инструмент" },
    { name: "Корма", description: "Часть корабля Арго" },
    { name: "Лебедь", description: "Зевс в образе лебедя" },
    { name: "Лев", description: "Немейский лев" },
    { name: "Летучая Рыба", description: "Экзотическая рыба" },
    { name: "Лира", description: "Арфа Орфея" },
    { name: "Лисичка", description: "Маленькая лисица" },
    { name: "Малая Медведица", description: "Маленькая медведица" },
    { name: "Малый Конь", description: "Жеребёнок" },
    { name: "Малый Лев", description: "Маленький лев" },
    { name: "Малый Пёс", description: "Маленькая собака" },
    { name: "Микроскоп", description: "Увеличительный прибор" },
    { name: "Муха", description: "Насекомое" },
    { name: "Насос", description: "Воздушный насос" },
    { name: "Наугольник", description: "Чертёжный инструмент" },
    { name: "Овен", description: "Золоторунный баран" },
    { name: "Октант", description: "Навигационный прибор" },
    { name: "Орёл", description: "Птица Зевса" },
    { name: "Орион", description: "Великий охотник" },
    { name: "Павлин", description: "Птица Геры" },
    { name: "Паруса", description: "Часть корабля Арго" },
    { name: "Пегас", description: "Крылатый конь" },
    { name: "Персей", description: "Герой, спасший Андромеду" },
    { name: "Печь", description: "Химическая печь" },
    { name: "Райская Птица", description: "Экзотическая птица" },
    { name: "Рак", description: "Краб, ущипнувший Геракла" },
    { name: "Резец", description: "Инструмент гравера" },
    { name: "Рыбы", description: "Афродита и Эрот в образе рыб" },
    { name: "Рысь", description: "Хищник с острым зрением" },
    { name: "Северная Корона", description: "Венец Ариадны" },
    { name: "Секстант", description: "Астрономический инструмент" },
    { name: "Сетка", description: "Перекрестье нитей" },
    { name: "Скорпион", description: "Убийца Ориона" },
    { name: "Скульптор", description: "Мастерская ваятеля" },
    { name: "Столовая Гора", description: "Гора в Южной Африке" },
    { name: "Стрела", description: "Оружие Аполлона" },
    { name: "Стрелец", description: "Кентавр-лучник" },
    { name: "Телескоп", description: "Астрономический прибор" },
    { name: "Телец", description: "Белый бык" },
    { name: "Треугольник", description: "Геометрическая фигура" },
    { name: "Тукан", description: "Экзотическая птица" },
    { name: "Феникс", description: "Птица, возрождающаяся из пепла" },
    { name: "Хамелеон", description: "Ящерица, меняющая цвет" },
    { name: "Центавр", description: "Кентавр Хирон" },
    { name: "Цефей", description: "Царь Эфиопии" },
    { name: "Циркуль", description: "Инструмент геометра" },
    { name: "Часы", description: "Маятниковые часы" },
    { name: "Чаша", description: "Кубок Аполлона" },
    { name: "Щит", description: "Щит Собесского" },
    { name: "Эридан", description: "Небесная река" },
    { name: "Южная Гидра", description: "Морская змея" },
    { name: "Южная Корона", description: "Венец Южного полушария" },
    { name: "Южная Рыба", description: "Рыба, пьющая воду" },
    { name: "Южный Крест", description: "Символ южного неба" },
    { name: "Южный Треугольник", description: "Геометрическая фигура" },
    { name: "Ящерица", description: "Маленькая рептилия" }
];

// DOM элементы
const searchInput = document.getElementById('searchInput');
const constellationGrid = document.getElementById('constellationGrid');
const constellationCount = document.getElementById('constellationCount');
const selectedConstellationEl = document.getElementById('selectedConstellation');
const constellationDescriptionEl = document.getElementById('constellationDescription');

// Отображение всех созвездий
function displayConstellations(filteredConstellations = constellations) {
    constellationGrid.innerHTML = '';
    
    filteredConstellations.sort((a, b) => a.name.localeCompare(b.name));
    
    filteredConstellations.forEach(constellation => {
        const card = document.createElement('div');
        card.className = 'constellation-card';
        card.innerHTML = `
            <h4>${constellation.name}</h4>
            <p>${constellation.description}</p>
        `;
        
        card.addEventListener('click', () => {
            selectedConstellationEl.textContent = constellation.name;
            constellationDescriptionEl.textContent = constellation.description;
            
            // Добавляем эффект пульсации на карту
            const starMap = document.getElementById('starMap');
            starMap.style.transform = 'scale(1.02)';
            setTimeout(() => starMap.style.transform = 'scale(1)', 200);
        });
        
        constellationGrid.appendChild(card);
    });
    
    constellationCount.textContent = `(${filteredConstellations.length}/88)`;
}

// Поиск созвездий
function searchConstellations(query) {
    if (!query.trim()) {
        displayConstellations(constellations);
        return;
    }
    
    const filtered = constellations.filter(c => 
        c.name.toLowerCase().includes(query.toLowerCase())
    );
    
    displayConstellations(filtered);
}

// Инициализация
displayConstellations();

// Слушатель поиска
searchInput.addEventListener('input', (e) => {
    searchConstellations(e.target.value);
});

// Показываем случайное созвездие при загрузке
window.addEventListener('load', () => {
    const randomIndex = Math.floor(Math.random() * constellations.length);
    const randomConstellation = constellations[randomIndex];
    selectedConstellationEl.textContent = randomConstellation.name;
    constellationDescriptionEl.textContent = randomConstellation.description;
});

// Мобильный свайп для карты
let touchStartX = 0;
let touchEndX = 0;

const starMap = document.getElementById('starMap');

starMap.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

starMap.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchEndX - touchStartX;
    
    if (Math.abs(diff) > swipeThreshold) {
        // Меняем созвездие при свайпе
        const currentIndex = Math.floor(Math.random() * constellations.length);
        const randomConstellation = constellations[currentIndex];
        selectedConstellationEl.textContent = randomConstellation.name;
        constellationDescriptionEl.textContent = randomConstellation.description;
    }
}