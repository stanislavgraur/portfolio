// Получаем элемент навбара
const navbar = document.querySelector('.header');

// Функция для изменения фона навбара
function toggleNavbarBackground() {
    if (window.scrollY > 100) {
    navbar.classList.add('header--white-bg');
    } else {
    navbar.classList.remove('header--white-bg');
    }
}

// Слушаем событие скролла и вызываем функцию при скролле
window.addEventListener('scroll', toggleNavbarBackground);

// Получаем элементы логотипов
const darkLogo = document.querySelector('.logo__image');
const lightLogo = document.querySelector('.logo__image--white');

// Функция для изменения логотипа в зависимости от цвета фона
function toggleLogo() {
    const navbar = document.querySelector('.header');
    if (window.scrollY > 100) {
    navbar.classList.add('header--white-bg');
    darkLogo.style.display = 'none';
    lightLogo.style.display = 'inline';
} else {
    navbar.classList.remove('header--white-bg');
    darkLogo.style.display = 'inline';
    lightLogo.style.display = 'none';
}
}

// Слушаем событие скролла и вызываем функцию при скролле
window.addEventListener('scroll', toggleLogo);


document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.querySelector(".loading-screen");

    // Hide the loading screen after a delay
    setTimeout(function () {
    loadingScreen.style.display = "none";
    }, 2000); // Set the delay time in milliseconds
});

document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".services__accordion-item");
    const panels = document.querySelectorAll(".services__panel");

    accordionItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            if (panels[index].style.maxHeight) {
                panels[index].style.maxHeight = null;
                item.classList.remove("active");
            } else {
                closeAllPanels();
                panels[index].style.maxHeight = panels[index].scrollHeight + "px";
                item.classList.add("active");
            }
        });
    });

    function closeAllPanels() {
        panels.forEach((panel) => {
            panel.style.maxHeight = null;
        });
        accordionItems.forEach((item) => {
            item.classList.remove("active");
        });
    }
});

// Получаем все секции
const sections = document.querySelectorAll('.section');

// Функция, которая проверяет, видима ли секция на экране
function isSectionVisible(section) {
    const rect = section.getBoundingClientRect();
    return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Функция для обработки скролла
function handleScroll() {
    sections.forEach(section => {
        if (isSectionVisible(section)) {
        section.classList.add('visible');
    }
    });
}

// Запускаем обработку скролла и сразу при загрузке страницы
handleScroll();
window.addEventListener('scroll', handleScroll);

function scrollToNewsletter() {
    const newsletterSection = document.getElementById('newsletter');
    newsletterSection.scrollIntoView({ behavior: 'smooth' });
}
