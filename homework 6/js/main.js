const bgColor = ["#B22222", "#ff69b4", "#32CD32", "#1E90FF", "#FFFF00"];

window.onload = () => {
    btns = document.querySelectorAll('.bg-color');
    btns.forEach((btn) => {
        btn.addEventListener('click', (link) => {
            link.preventDefault();
            randNumber = Math.floor(Math.random() * bgColor.length);
            btn.style.backgroundColor = bgColor[randNumber];
        })
    })
}

