// Данные о химических элементах
const elements = [
    { 
        number: 1, 
        symbol: "H", 
        name: "Водород", 
        mass: 1.008, 
        category: "nonmetal", 
        config: "1s¹", 
        year: 1766,
        description: "Самый распространённый элемент во Вселенной. Бесцветный газ без запаха и вкуса."
    },
    { 
        number: 2, 
        symbol: "He", 
        name: "Гелий", 
        mass: 4.0026, 
        category: "noble-gas", 
        config: "1s²", 
        year: 1868,
        description: "Инертный газ, второй по лёгкости элемент. Используется в воздухоплавании и криогенике."
    },
    { 
        number: 3, 
        symbol: "Li", 
        name: "Литий", 
        mass: 6.94, 
        category: "alkali", 
        config: "[He] 2s¹", 
        year: 1817,
        description: "Самый лёгкий металл. Используется в аккумуляторах и психиатрии."
    },
    { 
        number: 4, 
        symbol: "Be", 
        name: "Бериллий", 
        mass: 9.0122, 
        category: "alkaline-earth", 
        config: "[He] 2s²", 
        year: 1798,
        description: "Лёгкий, но прочный металл. Используется в аэрокосмической промышленности."
    },
    { 
        number: 5, 
        symbol: "B", 
        name: "Бор", 
        mass: 10.81, 
        category: "metalloid", 
        config: "[He] 2s² 2p¹", 
        year: 1808,
        description: "Металлоид, важный для растений. Используется в жаропрочных сплавах."
    },
    { 
        number: 6, 
        symbol: "C", 
        name: "Углерод", 
        mass: 12.011, 
        category: "nonmetal", 
        config: "[He] 2s² 2p²", 
        year: "Древность",
        description: "Основа органической химии. Существует в различных аллотропных формах."
    },
    { 
        number: 7, 
        symbol: "N", 
        name: "Азот", 
        mass: 14.007, 
        category: "nonmetal", 
        config: "[He] 2s² 2p³", 
        year: 1772,
        description: "Составляет 78% атмосферы Земли. Важен для белков и ДНК."
    },
    { 
        number: 8, 
        symbol: "O", 
        name: "Кислород", 
        mass: 15.999, 
        category: "nonmetal", 
        config: "[He] 2s² 2p⁴", 
        year: 1774,
        description: "Самый распространённый элемент на Земле. Необходим для дыхания."
    },
    { 
        number: 9, 
        symbol: "F", 
        name: "Фтор", 
        mass: 18.998, 
        category: "halogen", 
        config: "[He] 2s² 2p⁵", 
        year: 1886,
        description: "Самый электроотрицательный элемент. Используется в зубных пастах."
    },
    { 
        number: 10, 
        symbol: "Ne", 
        name: "Неон", 
        mass: 20.18, 
        category: "noble-gas", 
        config: "[He] 2s² 2p⁶", 
        year: 1898,
        description: "Инертный газ, известный своим использованием в неоновых лампах."
    },
    {
        number: 11,
        symbol: "Na",
        name: "Натрий",
        nass: 22.9898,
        category: "alkali",
        config: "[Ne] 3s¹",
        year: 1807,
        description: "Мягкий серебристо-белый металл, очень реакционноспособный. Шестой по распространённости элемент в земной коре. Образует множество соединений, наиболее известное - поваренная соль (NaCl). Важен для биологических процессов, регулирует кровяное давление и водный баланс в организме."
    },
    {
        number: 12,
        symbol: "Mg",
        name: "Магний",
        nass: 24.305,
        category: "alkaline-earth",
        config: "[Ne] 3s²",
        year: 1755,
        description: "Лёгкий, серебристо-белый металл. Восьмой по распространённости элемент в земной коре. Широко используется в лёгких сплавах. Играет ключевую роль в биологических процессах, входит в состав хлорофилла и критически важен для функционирования мышц и нервной системы."
    },
    {
        number: 13,
        symbol: "Al",
        name: "Алюминий",
        nass: 26.9815,
        category: "post-transition",
        config: "[Ne] 3s² 3p¹",
        year: 1825,
        description: "Серебристо-белый, мягкий парамагнитный металл. Самый распространённый металл в земной коре. Обладает высокой стойкостью к коррозии благодаря оксидной плёнке. Лёгкий и прочный, широко используется в авиационной, автомобильной промышленности и для производства упаковки."
    },
    {
        number: 14,
        symbol: "Si",
        name: "Кремний",
        nass: 28.085,
        category: "metalloid",
        config: "[Ne] 3s² 3p²",
        year: 1824,
        description: "Твёрдый, тёмно-серый металлоид с характерным металлическим блеском. Второй по распространённости элемент в земной коре после кислорода. Является основным полупроводниковым материалом в электронной промышленности. Основной компонент песка (диоксид кремния)."
    },
    {
        number: 15,
        symbol: "P",
        name: "Фосфор",
        nass: 30.9738,
        category: "nonmetal",
        config: "[Ne] 3s² 3p³",
        year: 1669,
        description: "Неметалл, существует в нескольких аллотропных модификациях (белый, красный, чёрный и др.). Белый фосфор очень ядовит и легко самовоспламеняется. Критически важен для жизни, входит в состав ДНК, РНК и АТФ. Широко используется в производстве удобрений."
    },
    {
        number: 16,
        symbol: "S",
        name: "Сера",
        nass: 32.06,
        category: "nonmetal",
        config: "[Ne] 3s² 3p⁴",
        year: "Древность",
        description: "Жёлтое хрупкое твёрдое вещество. Встречается в природе в самородном виде. Играет важнейшую роль в биохимии, входя в состав аминокислот (цистеин, метионин) и белков. Основное применение - производство серной кислоты, одного из важнейших химических продуктов."
    },
    {
        number: 17,
        symbol: "Cl",
        name: "Хлор",
        nass: 35.45,
        category: "halogen",
        config: "[Ne] 3s² 3p⁵",
        year: 1774,
        description: "Жёлто-зелёный газ с удушающим запахом, высокотоксичный. Сильный окислитель. Широко используется для обеззараживания питьевой воды и в качестве отбеливателя. Входит в состав поваренной соли (NaCl) и многих других соединений, важных для промышленности и биологии."
    },
    {
        number: 18,
        symbol: "Ar",
        name: "Аргон",
        nass: 39.948,
        category: "noble-gas",
        config: "[Ne] 3s² 3p⁶",
        year: 1894,
        description: "Бесцветный, не имеющий запаха инертный газ. Третий по распространённости газ в атмосфере Земли. Не вступает в химические реакции ни при каких нормальных условиях. Широко используется для создания инертной атмосферы при сварке, в металлургии и в качестве наполнителя для ламп накаливания."
    },
    {
        number: 19,
        symbol: "K",
        name: "Калий",
        nass: 39.0983,
        category: "alkali",
        config: "[Ar] 4s¹",
        year: 1807,
        description: "Мягкий серебристо-белый щелочной металл, очень реакционноспособный (более активен, чем натрий). Седьмой по распространённости элемент в земной коре. Жизненно важный электролит, регулирует сердечный ритм и нервные импульсы. Его соединения широко используются в качестве удобрений."
    },
    {
        number: 20,
        symbol: "Ca",
        name: "Кальций",
        nass: 40.078,
        category: "alkaline-earth",
        config: "[Ar] 4s²",
        year: 1808,
        description: "Серебристо-белый щёлочноземельный металл. Пятый по распространённости элемент в земной коре. Играет фундаментальную роль в биологии: является основным структурным компонентом костей, зубов и раковин. Используется в металлургии, производстве цемента и как восстановитель."
    },
    {
        number: 21,
        symbol: "Sc",
        name: "Скандий",
        nass: 44.9559,
        category: "transition",
        config: "[Ar] 3d¹ 4s²",
        year: 1879,
        description: "Мягкий, серебристо-белый переходный металл. Редкоземельный элемент, но довольно распространён в космосе. Из-за высокой стоимости и сложности получения применяется ограниченно - в основном в алюминиевых сплавах для аэрокосмической промышленности и в высокоинтенсивных лампах."
    },
    {
        number: 22,
        symbol: "Ti",
        name: "Титан",
        nass: 47.867,
        category: "transition",
        config: "[Ar] 3d² 4s²",
        year: 1791,
        description: "Прочный, лёгкий, серебристо-белый металл с высокой коррозионной стойкостью. Обладает высокой прочностью при низкой плотности. Широко используется в аэрокосмической промышленности, медицине (имплантаты), производстве спортивного оборудования и как белый пигмент (диоксид титана)."
    },
    {
        number: 23,
        symbol: "V",
        name: "Ванадий",
        nass: 50.9415,
        category: "transition",
        config: "[Ar] 3d³ 4s²",
        year: 1801,
        description: "Твёрдый, серебристо-серый пластичный металл. Добавляется в сталь для повышения прочности, износостойкости и термостойкости. Используется в качестве катализатора при производстве серной кислоты. Соединения ванадия имеют разнообразную окраску, что отражено в его названии (в честь скандинавской богини красоты Ванадис)."
    },
    {
        number: 24,
        symbol: "Cr",
        name: "Хром",
        nass: 51.9961,
        category: "transition",
        config: "[Ar] 3d⁵ 4s¹",
        year: 1797,
        description: "Твёрдый, блестящий, серебристый металл. Известен своей высокой стойкостью к коррозии и способностью образовывать ярко окрашенные соединения. Широко используется для хромирования поверхностей, в производстве нержавеющей стали и в качестве пигментов. Хромовые квасцы применяются для дубления кожи."
    },
    {
        number: 25,
        symbol: "Mn",
        name: "Марганец",
        nass: 54.9380,
        category: "transition",
        config: "[Ar] 3d⁵ 4s²",
        year: 1774,
        description: "Хрупкий, твёрдый серо-розовый металл. Обязательная добавка к стали для повышения её прочности и износостойкости. Важный микроэлемент для всех живых организмов, участвует в функционировании многих ферментов. Диоксид марганца используется в качестве катализатора и в батарейках."
    },
    {
        number: 26,
        symbol: "Fe",
        name: "Железо",
        nass: 55.845,
        category: "transition",
        config: "[Ar] 3d⁶ 4s²",
        year: "Древность",
        description: "Серебристо-белый, ковкий металл с высокой реакционной способностью. Четвёртый по распространённости элемент в земной коре и самый распространённый на Земле металл. Является основным компонентом сталей и чугунов. Критически важен для биологических процессов - входит в состав гемоглобина, переносящего кислород в крови."
    },
    {
        number: 27,
        symbol: "Co",
        name: "Кобальт",
        nass: 58.9332,
        category: "transition",
        config: "[Ar] 3d⁷ 4s²",
        year: 1735,
        description: "Твёрдый, блестящий серебристо-серый металл. Используется для производства жаропрочных и магнитных сплавов, в карбидах вольфрама и как синий пигмент в стекле и керамике. Входит в состав витамина B12. Исторически использовался для окрашивания стекла в глубокий синий цвет."
    },
    {
        number: 28,
        symbol: "Ni",
        name: "Никель",
        nass: 58.6934,
        category: "transition",
        config: "[Ar] 3d⁸ 4s²",
        year: 1751,
        description: "Пластичный, ковкий серебристо-белый металл с золотистым оттенком. Обладает высокой коррозионной стойкостью. Широко используется для производства нержавеющей стали, никелирования, в аккумуляторах (никель-кадмиевые, никель-металл-гидридные) и как катализатор в химической промышленности."
    },
    {
        number: 29,
        symbol: "Cu",
        name: "Медь",
        nass: 63.546,
        category: "transition",
        config: "[Ar] 3d¹⁰ 4s¹",
        year: "Древность",
        description: "Пластичный металл с характерным красно-оранжевым блеском. Обладает самой высокой среди всех металлов электропроводностью и теплопроводностью. Широко используется в электротехнике, производстве труб, кровельных материалов и сплавов (латунь, бронза). Важный микроэлемент для всех живых организмов."
    },
    {
        number: 30,
        symbol: "Zn",
        name: "Цинк",
        nass: 65.38,
        category: "transition",
        config: "[Ar] 3d¹⁰ 4s²",
        year: 1746,
        description: "Хрупкий серебристо-белый металл с голубоватым оттенком на воздухе. Широко используется для цинкования (оцинковки) стали для защиты от коррозии. Важный компонент латуни. Необходим для функционирования многих ферментов и иммунной системы. Оксид цинка применяется в косметике и медицине."
    },
    {
        number: 31,
        symbol: "Ga",
        name: "Галлий",
        nass: 69.723,
        category: "post-transition",
        config: "[Ar] 3d¹⁰ 4s² 4p¹",
        year: 1875,
        description: "Мягкий серебристый металл, который плавится при температуре около 29.76°C, поэтому может плавиться в руке. Используется в основном в электронике - в производстве полупроводников, светодиодов и высокочастотных транзисторов. Практически не токсичен и применяется в медицинских термометрах вместо ртути."
    },
    {
        number: 32,
        symbol: "Ge",
        name: "Германий",
        nass: 72.630,
        category: "metalloid",
        config: "[Ar] 3d¹⁰ 4s² 4p²",
        year: 1886,
        description: "Хрупкий серебристо-белый металлоид. Является полупроводником, что определило его основное применение в электронике и fiber optics. Используется в транзисторах, инфракрасной оптике и как катализатор. Был основным материалом для первых транзисторов до широкого распространения кремния."
    },
    {
        number: 33,
        symbol: "As",
        name: "Мышьяк",
        nass: 74.9216,
        category: "metalloid",
        config: "[Ar] 3d¹⁰ 4s² 4p³",
        year: "Средневековье",
        description: "Известный своей токсичностью металлоид, существующий в нескольких аллотропных формах. Исторически использовался как яд, пестицид и в медицине. Сегодня применяется в полупроводниковой технике, производстве свинцовых аккумуляторов и как легирующая добавка. В микродозах может быть essential nutrient для некоторых организмов."
    },
    {
        number: 34,
        symbol: "Se",
        name: "Селен",
        nass: 78.971,
        category: "nonmetal",
        config: "[Ar] 3d¹⁰ 4s² 4p⁴",
        year: 1817,
        description: "Хрупкий чёрный неметалл, существующий в нескольких аллотропных формах. Важный микроэлемент для многих организмов, но токсичен в больших дозах. Используется в фотоэлементах, копировальных аппаратах (ксероксах), как красный пигмент в стекле и керамике, а также в витаминных добавках."
    },
    {
        number: 35,
        symbol: "Br",
        name: "Бром",
        nass: 79.904,
        category: "halogen",
        config: "[Ar] 3d¹⁰ 4s² 4p⁵",
        year: 1826,
        description: "Единственный жидкий неметалл при комнатной температуре, представляет собой красно-бурую летучую жидкость с резким запахом. Сильный окислитель. Используется в производстве антипиренов (огнезащитных составов), пестицидов, лекарств и фотографических материалов. В прошлом применялся в производстве этилированного бензина."
    }
    // Добавьте больше элементов по необходимости
];

// Получаем модальное окно
const modal = document.getElementById('element-modal');
const closeBtn = document.querySelector('.close');

// Функция для создания таблицы элементов
function createPeriodicTable() {
    const tableContainer = document.getElementById('periodic-table');
    tableContainer.innerHTML = '';
    
    // Создаем пустые ячейки для правильного расположения
    for (let i = 0; i < 118; i++) {
        const element = elements.find(el => el.number === i + 1);
        const cell = document.createElement('div');
        
        if (element) {
            cell.className = `element ${element.category}`;
            cell.innerHTML = `
                <div class="element-number">${element.number}</div>
                <div class="element-symbol">${element.symbol}</div>
                <div class="element-name">${element.name}</div>
            `;
            
            // Добавляем обработчик клика для открытия модального окна
            cell.addEventListener('click', () => openElementModal(element));
        } else {
            cell.className = 'element empty';
        }
        
        tableContainer.appendChild(cell);
    }
}

// Функция для открытия модального окна с информацией об элементе
function openElementModal(element) {
    document.getElementById('modal-name').textContent = element.name;
    document.getElementById('modal-symbol').textContent = element.symbol;
    document.getElementById('modal-number').textContent = element.number;
    document.getElementById('modal-mass').textContent = element.mass;
    document.getElementById('modal-config').textContent = element.config;
    document.getElementById('modal-year').textContent = element.year;
    
    // Преобразуем категорию в читаемый формат
    const categoryNames = {
        'alkali': 'Щелочные металлы',
        'alkaline-earth': 'Щёлочноземельные металлы',
        'transition': 'Переходные металлы',
        'post-transition': 'Постпереходные металлы',
        'metalloid': 'Металлоиды',
        'nonmetal': 'Неметаллы',
        'halogen': 'Галогены',
        'noble-gas': 'Благородные газы',
        'lanthanide': 'Лантаноиды',
        'actinide': 'Актиноиды'
    };
    
    document.getElementById('modal-category').textContent = categoryNames[element.category] || element.category;
    document.getElementById('modal-description').textContent = element.description || 'Описание отсутствует';
    
    // Показываем модальное окно
    modal.style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
    modal.style.display = 'none';
}

// Функция для фильтрации элементов
function filterElements() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    
    const filteredElements = elements.filter(element => {
        const matchesSearch = element.name.toLowerCase().includes(searchTerm) || 
                             element.symbol.toLowerCase().includes(searchTerm);
        const matchesCategory = categoryFilter === 'all' || element.category === categoryFilter;
        
        return matchesSearch && matchesCategory;
    });
    
    // Обновляем таблицу с отфильтрованными элементами
    updateTableWithFilteredElements(filteredElements);
}

// Функция для обновления таблицы с отфильтрованными элементами
function updateTableWithFilteredElements(filteredElements) {
    const tableContainer = document.getElementById('periodic-table');
    const allCells = tableContainer.querySelectorAll('.element');
    
    allCells.forEach((cell, index) => {
        const elementNumber = index + 1;
        const element = elements.find(el => el.number === elementNumber);
        
        if (element) {
            const isVisible = filteredElements.includes(element);
            
            if (isVisible) {
                cell.classList.remove('hidden');
            } else {
                cell.classList.add('hidden');
            }
        }
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    createPeriodicTable();
    
    // Добавляем обработчики событий для фильтров
    document.getElementById('search').addEventListener('input', filterElements);
    document.getElementById('category-filter').addEventListener('change', filterElements);
    
    // Закрытие модального окна
    closeBtn.addEventListener('click', closeModal);
    
    // Закрытие модального окна при клике вне его
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Закрытие модального окна при нажатии Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});
