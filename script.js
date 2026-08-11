document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       BEFORE / AFTER
    ========================================== */

    const slider =
        document.getElementById("comparisonSlider");

    const beforeImage =
        document.getElementById("beforeImage");

    const sliderLine =
        document.getElementById("sliderLine");


    if (slider && beforeImage && sliderLine) {

        function updateComparison() {

            const value =
                Number(slider.value);

            beforeImage.style.width =
                value + "%";

            sliderLine.style.left =
                value + "%";
        }


        updateComparison();

        slider.addEventListener(
            "input",
            updateComparison
        );
    }


    /* ==========================================
       COLOR REFERENCES
    ========================================== */

    const references =
        document.querySelectorAll(".reference");

    const afterImage =
        document.getElementById("afterImage");


    references.forEach((reference) => {

        reference.addEventListener(
            "click",
            () => {

                references.forEach((item) => {

                    item.classList.remove(
                        "active"
                    );

                });


                reference.classList.add(
                    "active"
                );


                const theme =
                    reference.dataset.theme;


                if (theme === "purple") {

                    afterImage.style.background =
                        "linear-gradient(135deg, #392080, #a83c9b 50%, #ff9850)";
                }


                if (theme === "blue") {

                    afterImage.style.background =
                        "linear-gradient(135deg, #063c62, #087fa8 50%, #48cddd)";
                }


                if (theme === "warm") {

                    afterImage.style.background =
                        "linear-gradient(135deg, #592313, #b95b27 50%, #ffd77a)";
                }

            }
        );

    });


    /* ==========================================
       TOOL CARDS
    ========================================== */

    const cards =
        document.querySelectorAll(".tool-card");


    cards.forEach((card) => {

        card.addEventListener(
            "click",
            () => {

                cards.forEach((item) => {

                    item.classList.remove(
                        "active"
                    );

                });

                card.classList.add(
                    "active"
                );

            }
        );

    });


    /* ==========================================
       EARTH PARALLAX
    ========================================== */

    const earthWrapper =
        document.querySelector(".earth-wrapper");


    if (earthWrapper) {

        let targetX = 0;
        let targetY = 0;

        let currentX = 0;
        let currentY = 0;


        document.addEventListener(
            "mousemove",
            (event) => {

                targetX =
                    (event.clientX /
                        window.innerWidth - 0.5) * 7;

                targetY =
                    (event.clientY /
                        window.innerHeight - 0.5) * 5;

            }
        );


        function animateEarth() {

            currentX +=
                (targetX - currentX) * 0.05;

            currentY +=
                (targetY - currentY) * 0.05;


            earthWrapper.style.transform =
                "rotateY(" +
                currentX +
                "deg) rotateX(" +
                (-currentY) +
                "deg)";


            requestAnimationFrame(
                animateEarth
            );
        }


        animateEarth();
    }

});
