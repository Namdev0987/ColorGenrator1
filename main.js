function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.getElementById('colorBox').style.backgroundColor = randomColor;
    document.getElementById('colorCode').textContent = `Color Code: ${randomColor}`;
}
