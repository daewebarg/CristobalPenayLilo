/**
 * DAEweb - Cristóbal Peña y Lillo
 */

const translations = {
    es: {
        "nav-works": "OBRAS",
        "nav-bio": "TRAYECTORIA",
        "nav-contact": "CONTACTO",
        "hero-title": "LUZ, MATERIA Y PERCEPCIÓN",
        "hero-desc": "Obras únicas que transforman el espacio a través de la luz, el color y la materia.",
        "btn-works": "VER OBRAS",
        "about-overline": "SOBRE EL ARTISTA",
        "about-title": "CRISTÓBAL PEÑA Y LILLO",
        "about-p-intro": "Cristóbal Peña y Lillo desarrolla una trayectoria marcada por la síntesis, la percepción y la búsqueda constante de nuevos lenguajes visuales. Nacido en Mendoza en 1972, complementó su formación con estudios en Harvard University...",
        "about-p-more-1": "Antes de consolidar plenamente su práctica artística, construyó una destacada carrera como director creativo durante más de 18 años. Su agencia fue reconocida entre las más creativas del interior del país, obteniendo premios y desarrollando campañas de alto impacto.",
        "about-p-more-2": "En paralelo, sostuvo una producción artística continua, realizando exposiciones y proyectos junto a marcas y espacios de alto nivel como Porsche y Bodega Trivento, además de colecciones privadas y presentaciones en distintos países.",
        "about-p-more-3": "A partir de 2022, la incorporación de resinas translúcidas redefinió su producción. La obra evolucionó hacia superficies minimalistas donde luz, profundidad y movimiento conviven en equilibrio. En esta etapa emerge con fuerza una inspiración constante: el mar, su energía, sus reflejos y su dimensión contemplativa.",
        "about-p-more-4": "Hoy su trabajo se reconoce por crear piezas vivas, capaces de transformarse con cada cambio de luz y de generar una experiencia estética sofisticada, silenciosa e hipnótica dentro del espacio.",
        "works-title": "OBRAS DISPONIBLES",
        "work-subtitle": "Serie ´Del mar´ ",
        "work-p-intro": "Las obras de Cristóbal Peña y Lillo nacen de la luz como lenguaje y de la materia como vehículo sensible. Cada pieza activa reflejos, profundidad y movimiento visual, generando una experiencia cambiante a cada hora del día...",
        "work-p-more-1": "La luz del amanecer, el sol pleno de la tarde o una noche serena revelan versiones distintas de una misma obra. Esa variación permanente crea una relación íntima con el tiempo, el agua y el horizonte. En sus superficies habita una memoria del mar: brillo, calma, profundidad, energía y fluidez.",
        "work-p-more-2": "En espacios minimalistas y arquitecturas contemporáneas encuentran una presencia natural. Aportan serenidad visual, sofisticación y un punto de contemplación para detenerse, observar y disfrutar cómo la luz recorre la pieza lentamente.",
        "work-p-more-3": "Realizadas a mano mediante un proceso minucioso con resinas translúcidas, alcanzan una apariencia líquida, pulida y profunda. La técnica se integra al gesto artístico para dar lugar a superficies vibrantes que capturan la atención desde el primer instante.",
        "work-p-more-4": "El espectador se aproxima, cambia de posición, descubre nuevos planos y participa de una interacción espontánea. La obra despierta curiosidad, invita a moverse y sostiene la mirada con elegancia.",
        "work-p-more-5": "Para el artista, la luz representa la máxima expresión tecnológica de la naturaleza: precisión, energía, movimiento y belleza en estado puro. Cada obra reúne esos elementos y los convierte en una presencia viva dentro del espacio.",
        "btn-info": "SOLICITAR INFORMACIÓN",
        "footer-txt": "OBRAS ÚNICAS. HECHAS A MANO EN ARGENTINA."
    },
    en: {
        "nav-works": "WORKS",
        "nav-bio": "BIOGRAPHY",
        "nav-contact": "CONTACT",
        "hero-title": "LIGHT, MATTER AND PERCEPTION",
        "hero-desc": "Unique works that transform space through light, color and matter.",
        "btn-works": "VIEW WORKS",
        "about-overline": "ABOUT THE ARTIST",
        "about-title": "CRISTÓBAL PEÑA Y LILLO",
        "about-p-intro": "Cristóbal Peña y Lillo develops a career marked by synthesis, perception and the constant search for new visual languages. Born in Mendoza in 1972, he complemented his training at Harvard University...",
        "about-p-more-1": "Before consolidating his artistic practice, he spent 18 years as a creative director. His agency was awarded as one of the most creative in Argentina, focusing on high-impact campaigns.",
        "about-p-more-2": "In parallel, he maintained continuous artistic production, exhibiting with brands like Porsche and spaces like Bodega Trivento, as well as in international private collections.",
        "about-p-more-3": "Since 2022, translucent resins have redefined his work. It evolved into minimalist surfaces where light and depth coexist. The sea and its energy remain a primary inspiration.",
        "about-p-more-4": "Today his work creates living pieces that transform with light, offering a sophisticated and hypnotic aesthetic experience within any space.",
        "works-title": "AVAILABLE WORKS",
        "work-subtitle": "Serie ´Del mar´ " ,
        "work-p-intro": "The works of Cristóbal Peña y Lillo are born from light as a language and matter as a sensitive vehicle. Each piece activates reflections and visual movement...",
        "work-p-more-1": "Sunrise light or serene nights reveal different versions of the same work. This permanent variation creates an intimate relationship with time, water, and the horizon.",
        "work-p-more-2": "They find a natural presence in minimalist spaces, providing visual serenity and a point of contemplation to enjoy how light slowly travels through the piece.",
        "work-p-more-3": "Handmade through a meticulous process with translucent resins, they achieve a liquid and deep appearance, capturing attention from the first moment.",
        "work-p-more-4": "The viewer discovers new planes by changing position. The work invites movement and sustains the gaze with elegance.",
        "work-p-more-5": "For the artist, light represents nature's highest technology. Each work turns these elements into a living presence within the space.",
        "btn-info": "REQUEST INFORMATION",
        "footer-txt": "UNIQUE WORKS. HANDMADE IN ARGENTINA."
    }
};

let currentLang = 'es';
const langBtn = document.getElementById('lang-switch');

// 1. Cambio de Idioma
if (langBtn) {
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        langBtn.innerText = currentLang === 'es' ? 'EN' : 'ES';
        updateTexts();
    });
}

function updateTexts() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        const translation = translations[currentLang][key];
        if (translation) { el.innerText = translation; }
    });
}

// 2. Lógica de Expansión
function setupExpansion(btnId, contentId) {
    const btn = document.getElementById(btnId);
    const content = document.getElementById(contentId);
    if (btn && content) {
        btn.addEventListener('click', () => {
            content.classList.toggle('expanded');
            btn.innerText = content.classList.contains('expanded') ? '-' : '+';
        });
    }
}

setupExpansion('read-more-btn', 'bio-more');
setupExpansion('read-more-work-btn', 'work-more');

// 3. Año Dinámico y Link Instagram
const currentYear = new Date().getFullYear();
const footerCenter = document.querySelector('.footer-center p');
if (footerCenter) {
    footerCenter.innerHTML = `&copy; ${currentYear} | <a href="https://www.instagram.com/daeweb.arg" target="_blank" class="brand-credit">DAEweb</a>`;
}