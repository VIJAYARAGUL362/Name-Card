// static/js/script.js

// 1. Define your email here
const myEmail = "vijayaragul2005@gmail.com";

// 2. (Optional) This part puts the email text into the link automatically
window.onload = function() {
    document.getElementById("email-display").innerText = myEmail;
};

// 3. The copy function
function copyEmail(element) {
    navigator.clipboard.writeText(myEmail).then(() => {
        const originalText = element.innerText;
        element.innerText = "Copied!";

        // Reset the text after 2 seconds
        setTimeout(() => {
            element.innerText = myEmail;
        }, 2000);
    });
}