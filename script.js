document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement("button");
    button.innerText = "Contact Me";
    button.onclick = function() {
        window.location.href = "mailto:kasupunimulenga@gmail.com";
    };
    document.querySelector(".contact").appendChild(button);
});
