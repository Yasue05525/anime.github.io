// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Элементы интерфейса
    const elements = document.querySelectorAll('.element');
    const spellCards = document.querySelectorAll('.spell-card');
    const castButtons = document.querySelectorAll('.cast-btn');
    const manaValue = document.getElementById('mana-value');
    const manaFill = document.querySelector('.mana-fill');
    const logContent = document.querySelector('.log-content');
    const spellAnimation = document.getElementById('spellAnimation');
    const spellNameElement = document.getElementById('spellName');
    
    // Текущая мана
    let currentMana = 450;
    const maxMana = 500;
    
    // Фильтрация заклинаний по элементам
    elements.forEach(element => {
        element.addEventListener('click', function() {
            // Удаляем активный класс у всех элементов
            elements.forEach(el => el.classList.remove('active'));
            
            // Добавляем активный класс текущему элементу
            this.classList.add('active');
            
            const selectedElement = this.getAttribute('data-element');
            
            // Показываем/скрываем заклинания в зависимости от выбранного элемента
            spellCards.forEach(card => {
                if (selectedElement === 'all' || card.getAttribute('data-element') === selectedElement) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Произнесение заклинаний
    castButtons.forEach(button => {
        button.addEventListener('click', function() {
            const spellName = this.getAttribute('data-spell');
            const spellCard = this.closest('.spell-card');
            const spellCostElement = spellCard.querySelector('.spell-cost');
            const spellCostText = spellCostElement.textContent;
            
            // Извлекаем стоимость заклинания
            const costMatch = spellCostText.match(/\d+/);
            if (!costMatch) return;
            
            const spellCost = parseInt(costMatch[0]);
            
            // Проверяем, достаточно ли маны
            if (currentMana < spellCost) {
                addLogEntry(`❌ Недостаточно маны для заклинания "${spellName}"!`);
                return;
            }
            
            // Вычитаем ману
            currentMana -= spellCost;
            updateManaDisplay();
            
            // Добавляем запись в лог
            addLogEntry(`✨ Произнесено заклинание: "${spellName}" (стоимость: ${spellCost} маны)`);
            
            // Показываем анимацию
            showSpellAnimation(spellName);
        });
    });
    
    // Обновление отображения маны
    function updateManaDisplay() {
        manaValue.textContent = currentMana;
        const manaPercentage = (currentMana / maxMana) * 100;
        manaFill.style.width = `${manaPercentage}%`;
        
        // Меняем цвет в зависимости от уровня маны
        if (manaPercentage < 20) {
            manaFill.style.background = 'linear-gradient(to right, #ff416c, #ff4b2b)';
        } else if (manaPercentage < 50) {
            manaFill.style.background = 'linear-gradient(to right, #f9d423, #ff416c)';
        } else {
            manaFill.style.background = 'linear-gradient(to right, #1e90ff, #00bfff)';
        }
    }
    
    // Добавление записи в лог
    function addLogEntry(message) {
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';
        logEntry.textContent = `[${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}] ${message}`;
        
        logContent.prepend(logEntry);
        
        // Ограничиваем количество записей в логе
        if (logContent.children.length > 10) {
            logContent.removeChild(logContent.lastChild);
        }
    }
    
    // Показ анимации заклинания
    function showSpellAnimation(spellName) {
        spellNameElement.textContent = spellName;
        spellAnimation.classList.add('active');
        
        // Создаем эффекты анимации
        const effectsContainer = document.querySelector('.spell-effects');
        effectsContainer.innerHTML = '';
        
        // Создаем частицы для анимации
        for (let i = 0; i < 20; i++) {
            createParticle(effectsContainer);
        }
        
        // Скрываем анимацию через 2.5 секунды
        setTimeout(() => {
            spellAnimation.classList.remove('active');
        }, 2500);
    }
    
    // Создание частиц для анимации заклинания
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.background = getRandomColor();
        particle.style.borderRadius = '50%';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        container.appendChild(particle);
        
        // Анимация частицы
        const duration = Math.random() * 1 + 1;
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 150;
        
        particle.animate([
            { 
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            { 
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
        });
        
        // Удаляем частицу после анимации
        setTimeout(() => {
            if (particle.parentNode === container) {
                container.removeChild(particle);
            }
        }, duration * 1000);
    }
    
    // Получение случайного цвета для частиц
    function getRandomColor() {
        const colors = [
            '#ff7e5f', '#feb47b', '#1e90ff', '#00bfff',
            '#9370db', '#ffd700', '#ff4500', '#87ceeb'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Автоматическое восстановление маны со временем
    setInterval(() => {
        if (currentMana < maxMana) {
            currentMana += 5;
            if (currentMana > maxMana) currentMana = maxMana;
            updateManaDisplay();
            
            if (currentMana === maxMana) {
                addLogEntry('✅ Мана полностью восстановлена!');
            }
        }
    }, 5000);
    
    // Инициализация
    updateManaDisplay();
});
