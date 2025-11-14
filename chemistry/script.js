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