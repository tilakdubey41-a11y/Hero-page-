/* ==========================================
   BEFORE / AFTER SLIDER
========================================== */

const slider = document.getElementById("comparisonSlider");
const beforeImage = document.querySelector(".before-image");
const sliderLine = document.querySelector(".slider-line");

function updateComparison() {
    const value = slider.value;

    beforeImage.style.width = value + "%";
    sliderLine.style.left = value + "%";
}

/* Initial */
updateComparison();

slider.addEventListener("input", updateComparison);


/* ==========================================
   COLOR REFERENCE SELECTION
========================================== */

const references = document.querySelectorAll(".reference");
const afterImage = document.querySelector(".after-image");

references.forEach(reference => {

    reference.addEventListener("click", () => {

        /* Remove active state */
        references.forEach(item => {
            item.classList.remove("active");
        });

        /* Activate selected reference */
        reference.classList.add("active");

        const theme = reference.dataset.theme;

        /* Change output colors */

        if (theme === "purple") {

            afterImage.style.background =
                "linear-gradient(130deg, #5b35c8, #d849b6, #ff8c45)";

        }

        if (theme === "blue") {

            afterImage.style.background =
                "linear-gradient(130deg, #063c62, #087fa8, #48cddd)";

        }

        if (theme === "warm") {

            afterImage.style.background =
                "linear-gradient(130deg, #592313, #b95b27, #f09a42, #ffd77a)";

        }

    });

});


/* ==========================================
   TOOL CARD INTERACTION
========================================== */

const cards = document.querySelectorAll(".tool-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        cards.forEach(item => {
            item.classList.remove("active");
        });

        card.classList.add("active");

    });

});


/* ==========================================
   EARTH MOUSE PARALLAX
========================================== */

const earth = document.querySelector(".earth");

document.addEventListener("mousemove", event => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 8;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 6;

    earth.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});
