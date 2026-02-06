// Моды для отображения
const mods = [
    "Alex's Mobs",
    "Alex's Mobs Interaction",
    "All The Wood We've Got",
    "AmbientSounds",
    "Animation Overhaul",
    "AppleSkin",
    "Architectury API",
    "Bells & Whistles",
    "Bits 'n' Bobs",
    "Biomes We've Gone",
    "Citadel",
    "Cloth Config",
    "Copycats+",
    "CorgiLib",
    "Create",
    "Create Big Cannons",
    "Create Big Cannons: Advanced Technology (CBC: AT)",
    "Create: Better Motors",
    "Create: Better Villagers",
    "Create: Blocks & Bogies",
    "Create: Central Kitchen (Food)",
    "Create: Confectionery",
    "Create Crafts & Additions",
    "Create Deco",
    "Create: Encased",
    "Create: Enchantment Industry",
    "Create: Framed",
    "Create Goggles",
    "Create: Immersive TACZ",
    "Create: Interiors",
    "Create: Ironworks",
    "Create: Jetpack Curios",
    "Create: Liquid Fuel",
    "Create: Metalwork",
    "Create: More Features",
    "Create: New Age",
    "Create: Nuclear",
    "Create: Numismatics",
    "Create: Power Loader",
    "Create: Radars",
    "Create: Railways Navigator",
    "Create: Sky Village",
    "Create: Slice & Dice",
    "Create: Steam 'n' Rails",
    "Create: Steam Powered",
    "Create: Stuff & Additions",
    "Create: The Factory Must Grow (TFMG)",
    "Create: Trading Floor",
    "Create: Ultimate Factory",
    "CreativeCore",
    "Curios API",
    "DragonLib",
    "EdivadLib",
    "Embeddium (с Rubidium)",
    "ESL",
    "Extra Disks",
    "Extra Gauges",
    "Extra Storage",
    "Fabric API Base",
    "Farmer's Delight",
    "FerriteCore",
    "Flywheel",
    "GeckoLib",
    "GlitchCore",
    "IHMT",
    "Iris Shader Folder",
    "Iris/Flywheel Compat (Oculus Flywheel Compat)",
    "Just Enough Items (JEI)",
    "Kotlin for Forge",
    "MixinExtras",
    "Necronomicon",
    "Oculus",
    "Oh The Trees You'll Grow",
    "Ok Zoomer",
    "PlayerAnimator",
    "Ponder",
    "PowerGrid",
    "Protection Pixel",
    "Refined Storage",
    "Ritchies Projectile Lib",
    "RSRequestify",
    "Serene Seasons",
    "Skin Layers 3D",
    "Sodium Dynamic Lights",
    "Sodium Extras",
    "Sodium Options API",
    "Sound Physics Remastered",
    "Starlight",
    "Timeless and Classics Zero (TACZ)",
    "TerraBlender",
    "Transition",
    "TRender",
    "Underground Village",
    "Wrench Wrapper",
    "YACL (Yet Another Config Lib)",
    "YUNG's API",
    "YUNG's Better Caves",
    "YUNG's Better Desert Temples",
    "YUNG's Better Dungeons",
    "YUNG's Better End Island",
    "YUNG's Better Jungle Temples",
    "YUNG's Better Mineshafts",
    "YUNG's Better Nether Fortresses",
    "YUNG's Better Ocean Monuments",
    "YUNG's Better Strongholds",
    "YUNG's Better Witch Huts"
];

// Функция для отображения модов
function renderMods(limit = 20) {
    const modsGrid = document.getElementById('modsGrid');
    modsGrid.innerHTML = '';
    
    const displayMods = limit === 'all' ? mods : mods.slice(0, limit);
    
    displayMods.forEach(mod => {
        const modCard = document.createElement('div');
        modCard.className = 'mod-card glass-effect';
        
        // Определяем категорию мода для описания
        let description = "Мод для Minecraft";
        if (mod.includes("Create")) description = "Аддон для Create";
        else if (mod.includes("YUNG")) description = "Улучшенные структуры";
        else if (mod.includes("Alex")) description = "Мобы и взаимодействия";
        else if (mod.includes("Sodium") || mod.includes("Embeddium") || mod.includes("Oculus")) description = "Оптимизация и графика";
        
        modCard.innerHTML = `
            <h4>${mod}</h4>
            <p>${description}</p>
        `;
        
        modsGrid.appendChild(modCard);
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Отображаем первые 20 модов
    renderMods(20);
    
    // Кнопка "Показать все моды"
    document.getElementById('showAllMods').addEventListener('click', function() {
        renderMods('all');
        this.style.display = 'none';
    });
    
    // Мобильное меню
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.innerHTML = navMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : 
            '<i class="fas fa-bars"></i>';
    });
    
    // Закрытие меню при клике на ссылку
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Добавляем эффект при прокрутке для header
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Плавная прокрутка для навигационных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Добавляем случайные пасхалки при наведении на некоторые элементы
    const funnyMessages = [
        "Эта сборка сожрёт всю вашу оперативку!",
        "ФПС? Что это? Мы такое не знаем.",
        "Запускайте только на ПК с водяным охлаждением!",
        "Создатель сборки играет на 10 FPS и не жалуется!",
        "Чем больше лагов, тем интереснее играть, правда?",
        "Не пытайтесь понять логику этой сборки. Её нет.",
        "Optimized версия для тостеров! Серьезно!",
        "У нас теперь две сборки: для ПК и для калькуляторов!"
    ];
    
    // Добавляем эффект при наведении на требования
    document.querySelectorAll('.build-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
            
            // Создаем всплывающую подсказку
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = randomMessage;
            tooltip.style.position = 'absolute';
            tooltip.style.background = 'rgba(108, 92, 231, 0.9)';
            tooltip.style.color = 'white';
            tooltip.style.padding = '8px 12px';
            tooltip.style.borderRadius = '5px';
            tooltip.style.fontSize = '0.9rem';
            tooltip.style.zIndex = '1000';
            tooltip.style.bottom = '100%';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translateX(-50%)';
            tooltip.style.marginBottom = '10px';
            tooltip.style.whiteSpace = 'nowrap';
            tooltip.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
            
            this.style.position = 'relative';
            this.appendChild(tooltip);
            
            setTimeout(() => {
                if (this.contains(tooltip)) {
                    this.removeChild(tooltip);
                }
            }, 2000);
        });
    });
    
    // Анимация для логотипа
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', function() {
        this.style.transform = 'rotate(5deg)';
    });
    
    logo.addEventListener('mouseleave', function() {
        this.style.transform = 'rotate(0deg)';
    });
});

// Добавить после основного скрипта
function createParticles() {
    const container = document.querySelector('.particles') || document.createElement('div');
    if (!document.querySelector('.particles')) {
        container.className = 'particles';
        document.body.appendChild(container);
    }
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(particle);
    }
}

// Анимация появления при скролле
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    
    // Добавить классы анимации
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('animate-on-scroll');
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Вызвать сразу
});