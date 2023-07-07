const modal = document.getElementById('modal');
const closeModal = document.getElementsByClassName('close')[0];

window.addEventListener('load', () => {
  modal.style.display = 'block'; // Display the modal when the page loads
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'; // Hide the modal when the close button is clicked
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none'; // Hide the modal when clicking outside the modal
  }
});