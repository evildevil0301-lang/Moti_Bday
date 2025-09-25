// Function to launch the confetti
function launchConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ffd700', '#7b68ee', '#ff4500'] // Pink, Gold, Purple, Red
    });
}

// 1. Automatically launch confetti when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    // Wait a moment for the page to render, then launch confetti
    setTimeout(launchConfetti, 500); 
});

// 2. Launch confetti when the button is clicked
document.getElementById('confetti-button').addEventListener('click', launchConfetti);

// 3. NEW: Full-Screen Image Modal Logic

const modal = document.getElementById('image-modal');
const modalImg = document.getElementById("modal-image");
const captionText = document.getElementById("modal-caption");
const images = document.querySelectorAll('.enlargeable-image');

// Loop through all images and attach click handlers
images.forEach(img => {
    img.addEventListener('click', function() {
        // Get the source and alt text from the clicked image
        const src = this.src;
        const altText = this.alt;
        
        // Find the description paragraph associated with this image
        // It's inside the parent div (.memory-card)
        const parentCard = this.closest('.memory-card');
        const descriptionElement = parentCard.querySelector('.memory-card p');
        const descriptionText = descriptionElement ? descriptionElement.textContent : altText;
        
        // Set the modal content and display it
        modal.style.display = "block";
        modalImg.src = src;
        modalImg.alt = altText;
        captionText.innerHTML = descriptionText;
        
        // Prevent body scrolling when the modal is open
        document.body.style.overflow = 'hidden'; 
    });
});

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("modal-close")[0];

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = 'auto'; // Restore body scrolling
}

// Close the modal when the user clicks on (x)
span.addEventListener('click', closeModal);

// Close the modal if the user clicks anywhere outside of the image
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});