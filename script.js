document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    const quantityInput = document.getElementById('quantity');
    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');
    const buyNowButton = document.getElementById('buy-now');

    decreaseButton.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantityInput.value = quantity - 1;
        }
    });

    increaseButton.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        quantityInput.value = quantity + 1;
    });

    buyNowButton.addEventListener('click', () => {
        const quantity = quantityInput.value;
        alert(`You have bought ${quantity} item(s). Thank you for your purchase!`);
    });

    window.plusSlides = function (n) {
        showSlidesManual(n);
    };

    function showSlidesManual(n) {
        let slides = document.getElementsByClassName("slide");
        slideIndex += n;
        if (slideIndex > slides.length) { slideIndex = 1 }
        if (slideIndex < 1) { slideIndex = slides.length }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
});
