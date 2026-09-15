/* Gracias copilot xd
*/
(function () {
    var sidebar = document.querySelector('.sidebar');
    var toggle = document.querySelector('.menu-toggle');
    var overlay = document.querySelector('.menu-overlay');
    if (!sidebar || !toggle || !overlay) return;

    function abrirMenu() {
        sidebar.classList.add('abierta');
        overlay.classList.add('visible');
        toggle.setAttribute('aria-expanded', 'true');
    }

    function cerrarMenu() {
        sidebar.classList.remove('abierta');
        overlay.classList.remove('visible');
        toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', function () {
        if (sidebar.classList.contains('abierta')) {
            cerrarMenu();
        } else {
            abrirMenu();
        }
    });

    overlay.addEventListener('click', cerrarMenu);

    sidebar.querySelectorAll('a').forEach(function (enlace) {
        enlace.addEventListener('click', cerrarMenu);
    });

    document.addEventListener('keydown', function (evento) {
        if (evento.key === 'Escape') cerrarMenu();
    });
})();