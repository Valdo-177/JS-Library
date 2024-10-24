const dicElement = document.getElementById('Container');
const modal = document.getElementById('myModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.querySelector('.close-modal');

const elementos = [
    {
        name: 'Gorras',
        img: 'https://img.freepik.com/foto-gratis/vista-composicion-articulos-deportivos-bien-ordenados-organizados_23-2150275226.jpg?w=740',
        description: 'Una gorra deportiva perfecta para actividades al aire libre.'
    },
    {
        name: 'Gorras 1',
        img: 'https://img.freepik.com/foto-gratis/vista-composicion-articulos-deportivos-bien-ordenados-organizados_23-2150275226.jpg?w=740',
        description: 'Gorra de estilo casual para uso diario.'
    },
    {
        name: 'Gorras 2',
        img: 'https://img.freepik.com/foto-gratis/vista-composicion-articulos-deportivos-bien-ordenados-organizados_23-2150275226.jpg?w=740',
        description: 'Gorra ideal para deportistas, ligera y cómoda.'
    },
];

// Añadir los elementos al DOM
elementos.map((item, index) => {
    dicElement.innerHTML += `
        <div class="clickElement" data-index="${index}">
            <img src="${item.img}" alt="${item.name}">
            <div id="description">
                <span>${item.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
            </div>
        </div>
    `;
});

// Mostrar modal con datos dinámicos
document.querySelectorAll('.clickElement').forEach(el => {
    el.addEventListener("click", (e) => {
        const index = e.currentTarget.getAttribute('data-index');
        const item = elementos[index];

        // Actualizar contenido del modal
        modalImage.src = item.img;
        modalTitle.innerText = item.name;
        modalDescription.innerText = item.description;

        // Mostrar modal
        modal.style.display = 'flex';
    });
});

// Cerrar modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});