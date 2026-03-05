// Get DOM elements
const inputField = document.getElementById("inputField");
const saveButton = document.getElementById("saveButton");

// Initialize an array to store keystrokes
let keystrokes = [];

// Event listener to log keystrokes
inputField.addEventListener("keyup", (event) => {
    const key = event.key;

    // Ignore keys like Shift, Ctrl, etc.
    if (key.length === 1 || key === "Backspace") {
        keystrokes.push(key === "Backspace" ? "[Backspace]" : key);
    }
});

// Save keystrokes to localStorage and redirect
saveButton.addEventListener("click", () => {
    localStorage.setItem("keystrokes", keystrokes.join(" "));
    window.location.href = "display.html"; // Redirect to display page
});
