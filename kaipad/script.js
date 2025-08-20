// script.js

document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalOverlay = document.getElementById('joinModal');

    // Function to open the modal
    const openModal = () => {
        modalOverlay.classList.add('show');
    };

    // Function to close the modal
    const closeModal = () => {
        modalOverlay.classList.remove('show');
    };

    // Event listener for the "Join our parent community" button
    if (openModalBtn) {
        openModalBtn.addEventListener('click', openModal);
    }

    // Event listener for the close 'X' button inside the modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Event listener to close the modal when clicking on the dark overlay
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (event) => {
            // Check if the click is on the overlay itself and not its children (the modal content)
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // Event listener to close the modal with the 'Escape' key for better accessibility
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalOverlay.classList.contains('show')) {
            closeModal();
        }
    });
});