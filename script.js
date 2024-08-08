document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.getElementById('menu-container');

    // Cargar el contenido de menu.html
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            menuContainer.innerHTML = data;

            const burger = document.querySelector('.burger');
            const navLinks = document.querySelector('.nav-links');

            burger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                burger.classList.toggle('active');
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    burger.classList.remove('active');
                }
            });
        })
        .catch(error => console.error('Error loading menu:', error));
});
