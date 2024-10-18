const colors = ['#ffcccb', '#add8e6', '#90ee90', '#ffb6c1', '#dda0dd', '#ffffe0']; 
let currentColorIndex = 0;

document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;  
});
