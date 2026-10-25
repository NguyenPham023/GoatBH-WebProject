const menuButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navMenu.classList.toggle('open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
});

navMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        menuButton?.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
        document.body.classList.remove('menu-open');
    });
});

const runButton = document.querySelector('.run-button');
const consoleOutput = document.querySelector('.console-output');

runButton?.addEventListener('click', () => {
    runButton.textContent = 'Run again →';
    consoleOutput.hidden = false;
});

const tabs = document.querySelectorAll('.subject-tab');
const courseCards = document.querySelectorAll('.course-card');
const emptyFilter = document.querySelector('.empty-filter');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach((item) => {
            item.classList.remove('active');
            item.setAttribute('aria-selected', 'false');
        });

        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        const filter = tab.dataset.filter;
        let visibleCount = 0;

        courseCards.forEach((card) => {
            const visible = filter === 'all' || card.dataset.category === filter;
            card.hidden = !visible;
            if (visible) visibleCount += 1;
        });

        emptyFilter.hidden = visibleCount > 0;
    });
});

const signupForm = document.querySelector('.signup-form');
const formMessage = document.querySelector('.form-message');

signupForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = signupForm.elements.email;
    const emailIsValid = emailInput.validity.valid;

    formMessage.classList.toggle('error', !emailIsValid);
    formMessage.classList.toggle('success', emailIsValid);

    if (!emailIsValid) {
        formMessage.textContent = 'Please enter a valid email address.';
        emailInput.focus();
        return;
    }

    formMessage.textContent = 'Thanks! This demo form is ready to connect to your team’s backend.';
    signupForm.reset();
});

document.getElementById('current-year').textContent = new Date().getFullYear();
