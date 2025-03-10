
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.fade-section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

function showModal(userName) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const modalImage = document.getElementById('modal-image');

    // Set personalized message
    modalMessage.textContent = `Thank you, ${userName}, for your submission!`;

    // Add image animation
    modalImage.style.animation = 'rotate 1s linear';

    // Show the modal
    modal.style.display = 'flex';

    // Hide modal after 3 seconds
    setTimeout(() => {
        modal.style.display = 'none';
    }, 5000);
}

document.getElementById('petition-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form refresh
    const userName = document.getElementById('name').value;
    if (userName.trim() === '') {
        alert('Please enter your name!');
        return;
    }
    showModal(userName); // Call modal display function
});