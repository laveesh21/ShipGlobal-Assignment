document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-image");
    const selectedImage = document.getElementById("selected-image");
    const prevBtn = document.getElementById("prevbtn");
    const nextBtn = document.getElementById("nextbtn");

    let currIndex = 0;

    images.forEach(image => {
        image.onerror = () => {
            image.src = defaultImage;
        };
    });

    function updateSelectedImage(index) {
        if (index >= images.length) {
            currIndex = 0;
        } else if (index < 0) {
            currIndex = images.length - 1; 
        } else {
            currIndex = index;
        }

        selectedImage.classList.remove('fade');
        selectedImage.style.opacity = 0;

        selectedImage.src = images[currIndex].src;
        selectedImage.onerror = () => {
            selectedImage.src = defaultImage;
        };


        void selectedImage.offsetWidth; 

        selectedImage.classList.add('fade');
        selectedImage.style.opacity = 1;


        images.forEach((img, idx) => {
            img.classList.toggle('selected', idx === currIndex);
        });
    }

    nextBtn.addEventListener("click", () => {
        updateSelectedImage(currIndex + 1);
    });

    prevBtn.addEventListener("click", () => {
        updateSelectedImage(currIndex - 1);
    });

    images.forEach((image, index) => {
        image.addEventListener("click", () => {
          updateSelectedImage(index)
        });
      });

    updateSelectedImage(currIndex);
});
