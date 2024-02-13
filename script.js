const header = document.querySelector("header")

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 70);
});

document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    }

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    };
});


// document.getElementById("contact-form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent default form submission

//     var formData = new FormData(this);

//     fetch("send_email.php", {
//         method: "POST",
//         body: formData
//     })
//     .then(response => {
//         if (response.ok) {
//             console.log("Message sent successfully!");
//             // Optionally, reset the form here
//         } else {
//             console.error("Failed to send message");
//         }
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });
// });
