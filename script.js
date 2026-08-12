document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       BEFORE / AFTER SLIDER
    ========================================== */

    const slider =
        document.getElementById("comparisonSlider");

    const beforeLayer =
        document.getElementById("beforeLayer");

    const comparisonLine =
        document.getElementById("comparisonLine");


    function updateComparison() {

        const value = Number(slider.value);

        beforeLayer.style.width = `${value}%`;

        comparisonLine.style.left = `${value}%`;
    }


    slider.addEventListener(
        "input",
        updateComparison
    );

    updateComparison();


    /* ==========================================
       COLOR REFERENCE IMAGES
    ========================================== */

    const references =
        document.querySelectorAll(".reference");

    const afterImage =
        document.getElementById("afterImage");


    references.forEach(reference => {

        reference.addEventListener("click", () => {

            /* Remove active state */

            references.forEach(item => {
                item.classList.remove("active");
            });


            /* Activate clicked reference */

            reference.classList.add("active");


            /* Get selected output image */

            const newImage =
                reference.dataset.after;


            /*
                Change AFTER image
            */

            if (newImage) {

                afterImage.style.opacity = "0";


                setTimeout(() => {

                    afterImage.src = newImage;

                    afterImage.style.opacity = "1";

                }, 180);

            }


            /*
                Small visual movement
                when reference changes
            */

            afterImage.style.transform =
                "scale(1.035)";


            setTimeout(() => {

                afterImage.style.transform =
                    "scale(1)";

            }, 500);

        });

    });


    /* ==========================================
       REFERENCE IMAGE HOVER PARALLAX
    ========================================== */

    references.forEach(reference => {

        const image =
            reference.querySelector("img");


        reference.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    reference.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateY =
                    ((x - centerX) / centerX) * 7;


                const rotateX =
                    -((y - centerY) / centerY) * 7;


                image.style.transform =
                    `
                    scale(1.12)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    `;
            }
        );


        reference.addEventListener(
            "mouseleave",
            () => {

                image.style.transform =
                    "scale(1) rotateX(0) rotateY(0)";

            }
        );

    });


    /* ==========================================
       TOOL CARD INTERACTION
    ========================================== */

    const cards =
        document.querySelectorAll(".tool-card");


    cards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                cards.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


                card.classList.add("active");

            }
        );

    });


    /* ==========================================
       HERO 3D PARALLAX
    ========================================== */

    const visualStage =
        document.querySelector(".visual-stage");


    if (visualStage) {

        visualStage.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    visualStage.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left)
                    / rect.width;


                const y =
                    (event.clientY - rect.top)
                    / rect.height;


                const rotateY =
                    (x - 0.5) * 5;


                const rotateX =
                    -(y - 0.5) * 4;


                const card =
                    document.querySelector(
                        ".comparison-card"
                    );


                if (card) {

                    card.style.transform =
                        `
                        perspective(1300px)
                        rotateY(${rotateY}deg)
                        rotateX(${rotateX}deg)
                        translateY(-4px)
                        `;
                }

            }
        );


        visualStage.addEventListener(
            "mouseleave",
            () => {

                const card =
                    document.querySelector(
                        ".comparison-card"
                    );


                if (card) {

                    card.style.transform =
                        `
                        perspective(1300px)
                        rotateY(-2deg)
                        rotateX(1deg)
                        `;
                }

            }
        );

    }

});
