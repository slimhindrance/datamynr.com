// Select elements
const popupButtons = document.querySelectorAll('.popup-btn');
const popup = document.getElementById('popup');
const popupBody = document.getElementById('popupBody');
const closePopupButton = document.getElementById('closePopup');

// Function to load content into the popup
async function loadPopupContent(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to load content');
        const content = await response.text();
        popupBody.innerHTML = content;
        popup.classList.remove('hidden'); // Show the popup
    } catch (error) {
        popupBody.innerHTML = `<p>Error loading content: ${error.message}</p>`;
        popup.classList.remove('hidden'); // Show the popup
    }
}

// Attach event listeners to each button
popupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target'); // Get target URL
        loadPopupContent(target); // Load the content
    });
});

// Close popup when the close button is clicked
closePopupButton.addEventListener('click', () => {
    popup.classList.add('hidden');
    popupBody.innerHTML = ''; // Clear popup content
});

// Optional: Close popup when clicking outside the content
popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.add('hidden');
        popupBody.innerHTML = ''; // Clear popup content
    }
});
