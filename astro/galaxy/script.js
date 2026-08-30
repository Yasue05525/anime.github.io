// Цвета по спектральному классу (запасной вариант, если нет картинки)
const spectralColors = {
    'O': '#9bb0ff', 'B': '#aabfff', 'A': '#cad7ff', 
    'F': '#f8f7ff', 'G': '#ffeb99', 'K': '#ffcc66', 'M': '#ff9966'
};

// БАЗА ДАННЫХ ЗВЕЗД И ПЛАНЕТ (добавлено поле img)
const starsData = [
    { 
        name: "Alarax", 
        spec: "A3III", 
        img: "https://sun9-20.userapi.com/s/v1/ig2/-4FmEv_9OwUy05S8TQqCKb3c7X2euB67Qnh5dLOrDaISa9pYwUh4_fu2ojPfavkibOYcflehZZ-P-jAPzj98vWKG.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1024x1024&from=bu&cs=1024x0", // Ссылка на картинку звезды
        planets: [
            { name: "Alarax B", type: "Горячий юпитер (Газовый гигант)", color: "#ff9966", description: "Первая экзопланета в системе звезды Аларакс, горячий юпитер. Относится к классу газовых гигантов с температурой атмосферы около 1800°C.", url: "https://vk.com/photo-240980373_457239021", 
              img: "https://sun9-55.userapi.com/s/v1/ig2/tjhvD3hT4Q4T5RJhI1iFKL6H3uKV_4urZVE9-29i-_GynhAw7ygmauh18cUyoZ_7_AP7TsTc-j18HlH1qDGNmAZO.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1024x1024&from=bu&cs=1024x0" }, // Картинка планеты
            { name: "Alarax C", type: "Земного (Миниземля)", color: "#e05a47", description: "Вторая экзопланета в системе звезды Аларакс, планета земного типа, миниземля.", url: "https://vk.com/photo-240980373_457239024",
              img: "https://sun9-12.userapi.com/s/v1/ig2/pZiK1E-CVQag5RJFVrala_f21OuRlp7HO4Vjv9mt7NgCn5orbh89z3P5i66qKbY5cRuIPWIfdJzNlfkb-kgGpMWQ.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1024x1024&from=bu&cs=1024x0" },
            { name: "Alarax D", type: "Земного (Супервенера)", color: "#42a5f5", description: "Третья экзопланета в системе звезды Аларакс, планета земного типа, супер-Венера.", url: "https://vk.com/photo-240980373_457239023",
              img: "https://sun9-87.userapi.com/s/v1/ig2/Apq1_boN7wzNlawmD2ovvocAim6kccahruuWL3Ottsd8WT7LKemkhVe_2UcHtaJYxUtb_qx_yjtu4jHFHX7XtC09.jpg?quality=96&as=32x21,48x32,72x48,108x72,160x106,240x160,360x240,480x319,540x359,640x426,720x479,1080x719,1264x841&from=bu&cs=1264x0" }
        ]
    },
    { 
        name: "TRAPPIST-1", 
        spec: "M8V", 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Artist%E2%80%99s_impression_of_the_TRAPPIST-1_planetary_system.jpg/330px-Artist%E2%80%99s_impression_of_the_TRAPPIST-1_planetary_system.jpg",
        planets: [
            { name: "TRAPPIST-1e", type: "Каменистая", color: "#4db6ac", description: "Находится в зоне обитаемости.", url: "https://ru.wikipedia.org/wiki/TRAPPIST-1e",
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/TRAPPIST-1e_artist_impression_2018.jpg/330px-TRAPPIST-1e_artist_impression_2018.jpg" }
        ]
    },
    { 
        name: "Kepler-22", 
        spec: "G5V", 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Kepler22b-artwork.jpg/330px-Kepler22b-artwork.jpg",
        planets: [
            { name: "Kepler-22b", type: "Океаническая", color: "#42a5f5", description: "Кандидат на наличие воды.", url: "https://ru.wikipedia.org/wiki/Kepler-22_b",
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Kepler22b-artwork.jpg/330px-Kepler22b-artwork.jpg" }
        ]
    },
    { 
        name: "Сириус", 
        spec: "A1V", 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Starsirius.jpg/220px-Starsirius.jpg",
        planets: [
            { name: "Сириус B", type: "Белый карлик", color: "#e0e0e0", description: "Плотное ядро звезды.", url: "https://ru.wikipedia.org/wiki/Сириус_B" }
        ]
    },
    { name: "Полярная звезда", spec: "F7Ib", planets: [] },
    { name: "Вега", spec: "A0V", planets: [] },
    { name: "Альдебаран", spec: "K5III", planets: [] },
    { name: "Бетельгейзе", spec: "M2Iab", planets: [] },
    { name: "Ригель", spec: "B8Ia", planets: [] },
    { name: "Арктур", spec: "K1.5III", planets: [] },
    { name: "Капелла", spec: "G3III", planets: [] },
    { name: "Процион", spec: "F5IV-V", planets: [] }
];

const grid = document.getElementById('starGrid');
const starModal = document.getElementById('starModal');
const planetModal = document.getElementById('planetModal');

// Функция для проверки: есть ли картинка
function getStarImage(star) {
    return star.img ? `<img src="${star.img}" alt="${star.name}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">` : '';
}

function renderStars(data) {
    grid.innerHTML = '';
    data.forEach(star => {
        const color = spectralColors[star.spec.charAt(0)] || '#dddddd';
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => openModal(star, color);
        
        // Если есть img, ставим картинку, иначе цветной круг
        const visual = star.img 
            ? `<img src="${star.img}" class="circle" style="object-fit: cover;">` 
            : `<div class="circle" style="background-color: ${color};"></div>`;

        card.innerHTML = `
            ${visual}
            <div class="star-name">${star.name}</div>
            <div class="star-spectral">${star.spec}</div>
        `;
        grid.appendChild(card);
    });
}

function filterStars() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    renderStars(starsData.filter(star => star.name.toLowerCase().includes(input)));
}

function openModal(star, color) {
    document.getElementById('modalStarName').innerText = star.name;
    document.getElementById('modalSpectralClass').innerText = `Спектральный класс: ${star.spec}`;
    
    // Обновляем кружок в шапке модального окна (картинка или цвет)
    const circleElement = document.getElementById('modalColorCircle');
    if (star.img) {
        circleElement.style.backgroundColor = 'transparent';
        circleElement.innerHTML = `<img src="${star.img}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
    } else {
        circleElement.style.backgroundColor = color;
        circleElement.innerHTML = '';
    }

    const list = document.getElementById('modalExoplanetList');
    list.innerHTML = '';
    
    if (star.planets.length > 0) {
        star.planets.forEach(p => {
            const li = document.createElement('li');
            li.className = 'exoplanet-item';
            li.onclick = () => openPlanetModal(p);

            const btn = document.createElement('button');
            btn.className = 'exoplanet-link-btn';
            btn.innerText = 'Открыть';
            btn.onclick = (e) => {
                e.stopPropagation();
                openPlanetModal(p);
            };
            
            // Есть ли картинка у планеты?
            const planetThumb = p.img 
                ? `<img src="${p.img}" style="width: 35px; height: 35px; border-radius: 50%; object-fit: cover; margin-right: 10px;">` 
                : '';

            const info = document.createElement('div');
            info.className = 'exoplanet-info';
            info.innerHTML = `
                <div style="display: flex; align-items: center;">
                    ${planetThumb}
                    <div>
                        <span class="exoplanet-name">${p.name}</span>
                        <br>
                        <span class="exoplanet-detail">${p.type || 'Экзопланета'}</span>
                    </div>
                </div>
            `;

            li.appendChild(info);
            li.appendChild(btn);
            list.appendChild(li);
        });
    } else {
        list.innerHTML = '<li class="no-planets-msg">У этой звезды пока не найдено экзопланет</li>';
    }

    starModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function openPlanetModal(planet) {
    document.getElementById('planetName').innerText = planet.name;
    document.getElementById('planetType').innerText = `Тип: ${planet.type || 'Неизвестно'}`;
    
    // Вставляем картинку планеты в иконку
    const icon = document.getElementById('planetIcon');
    if (planet.img) {
        icon.style.backgroundColor = 'transparent';
        icon.innerHTML = `<img src="${planet.img}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
    } else {
        icon.style.backgroundColor = planet.color || '#cccccc';
        icon.innerHTML = '';
    }

    document.getElementById('planetInfo').innerText = planet.description || "Информация о планете пока не добавлена.";

    const link = document.getElementById('planetLink');
    if (planet.url) {
        link.href = planet.url;
        link.style.display = 'block';
    } else {
        link.style.display = 'none';
    }

    starModal.style.display = 'none';
    planetModal.style.display = 'flex';
}

function closeModal() {
    starModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function closePlanetModal() {
    planetModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target == starModal) closeModal();
    if (event.target == planetModal) closePlanetModal();
}

renderStars(starsData);
