// Variáveis para controlar o estado
let currentPage = 1;
let writeupsPerPage = 6;

// Função para atualizar a exibição de writeups
function updatePagination() {
    const select = document.getElementById('writeups-per-page');
    writeupsPerPage = parseInt(select.value);
    currentPage = 1; // Reinicia na página 1
    renderWriteups();
}

// Função para renderizar os writeups
function renderWriteups() {
    const writeupItems = document.querySelectorAll('.writeup-item');
    const totalWriteups = writeupItems.length;
    const totalPages = Math.ceil(totalWriteups / writeupsPerPage);

    // Esconde todos os writeups
    writeupItems.forEach(item => item.style.display = 'none');

    // Mostra os writeups da página atual
    const start = (currentPage - 1) * writeupsPerPage;
    const end = start + writeupsPerPage;
    for (let i = start; i < end && i < totalWriteups; i++) {
        writeupItems[i].style.display = 'block';
    }

    // Atualiza a exibição da página atual
    document.getElementById('current-page').textContent = `Página ${currentPage}`;
}

// Funções de navegação entre páginas
function nextPage() {
    const totalWriteups = document.querySelectorAll('.writeup-item').length;
    const totalPages = Math.ceil(totalWriteups / writeupsPerPage);

    if (currentPage < totalPages) {
        currentPage++;
        renderWriteups();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderWriteups();
    }
}

// Inicializa a página
window.onload = function() {
    renderWriteups(); // Mostra os writeups da página 1 por padrão
};
