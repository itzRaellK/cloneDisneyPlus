document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    
    const heroSection = document.querySelector('.hero');
    const heightHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const positionWindow = window.scrollY;

        if(positionWindow < heightHero) {
            headHidden();
        } else {
            headVisible();
        }
    })
    
    //Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const tabTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);

            hideTab();
            tab.classList.add('shows__list--is-active');

            removeActiveButton();
            button.target.classList.add('shows__tabs__button--is-active');
        });
    }

    //Seção FAQ, accordion
    for (let i = 0; i < buttons.length; i++) {
        questions[i].addEventListener('click', openCloseAnswer);
    }
});

function headHidden() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function headVisible() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function openCloseAnswer(element) {
    const classe = 'faq__questions__item--is-open';
    console.log(element);
    const fatherElement = element.target.parentNode;

    fatherElement.classList.toggle(classe);
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideTab() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}