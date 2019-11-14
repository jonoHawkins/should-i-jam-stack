const appEl = document.querySelector('.app');

const toBool = (string) => {
    return string.split('').reduce(({ last, result }, letter) => ({
        last: letter,
        result: letter > last ? !result : result
    }), { last: 'g', result: false }).result;
}

window.toBool = toBool;

appEl.querySelector('.app__form').addEventListener('submit', (e) => {
    e.preventDefault();
    appEl.classList.add('is-working');
    appEl.querySelector('.app__response').innerText = toBool(appEl.querySelector('input').value) ? 'Yes!' : 'No!';

    setTimeout(() => {
        appEl.classList.remove('is-working');
        appEl.classList.add('is-result');
    }, 1200);
});

appEl.querySelector('.app__reset').addEventListener('click', () => {
    appEl.classList.remove('is-working', 'is-result');
    appEl.querySelector('input').value = '';
});