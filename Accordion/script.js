document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".header");

    headers.forEach((header) => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const activeContent = document.querySelector(".content.show");
            
            if (activeContent && activeContent !== content) {
                activeContent.classList.remove("show");
            }

            content.classList.toggle("show");

            content.style.display = content.classList.contains("show") ? "block" : "none";
        });
    });
});

