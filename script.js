function checkCode() {
    const enteredCode = document.getElementById("codeInput").value.trim().toUpperCase();
    const secretCode = "SUP4U"; // Your secret code

    if (enteredCode === secretCode) {
        window.location.href = "letter.html"; // Success! Goes to paragraph page
    } else {
        // Show the custom styled warning popup instead of an alert
        document.getElementById("warningModal").style.display = "flex";
    }
}

function closeWarning() {
    // Hide the warning popup and clear input box for her next try
    document.getElementById("warningModal").style.display = "none";
    document.getElementById("codeInput").value = "";
}
// Function to trigger the celebratory confetti and show the popup modal
function triggerSurprise() {
    // Show the popup modal
    document.getElementById("popupModal").style.display = "flex";

    // Firecrackers / Confetti animation bursting from sides
    var duration = 3.5 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.7 } // Left side firecracker
        });
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.7 } // Right side firecracker
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// Function to close the popup modal
function closePopup() {
    document.getElementById("popupModal").style.display = "none";
}
