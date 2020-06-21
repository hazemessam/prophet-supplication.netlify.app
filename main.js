const supplications = document.querySelectorAll('.supplication');
const overlayDiv = document.querySelector('.overlay-div');

supplications.forEach(supplication => {
    supplication.addEventListener('click', () => {
        supplication.style.setProperty('transform', 'scale(1.05)');
        supplication.style.setProperty('z-index', '100');
        supplication.style.setProperty('background', 'dodgerblue');
        overlayDiv.classList.add('overlay');
    });
    overlayDiv.addEventListener('click', () => {
        supplication.style.setProperty('transform', '');
        supplication.style.setProperty('z-index', '0');
        supplication.style.setProperty('background', '');
        overlayDiv.classList.remove('overlay');
    });
});

