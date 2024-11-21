// Function to generate a random hexadecimal color code
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add event listener to the button
document.getElementById('change-color-btn').addEventListener('click', function() {
    // Get the random color
    const newColor = getRandomColor();
    // Change the background color of the colorBox
    document.getElementById('color-box').style.backgroundColor = newColor;
});
