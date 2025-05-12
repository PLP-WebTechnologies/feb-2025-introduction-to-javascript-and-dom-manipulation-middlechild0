// Change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', () => {
  const description = document.getElementById('description');
  description.textContent = "The text has been changed!";
  description.style.color = "blue"; // Modify CSS style via JS
});

// Add or remove an element when a button is clicked
document.getElementById('toggleBoxBtn').addEventListener('click', () => {
  const box = document.getElementById('box');
  box.classList.toggle('hidden');
});
