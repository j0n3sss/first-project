let images = document.querySelectorAll('.carousel-item');
let i;

for (i = 1; i < images.length; i++) {
    images[i].style.display = "none";
    console.log(i)
}

i = 0;

let btnLeft = document.getElementById("left");
let btnRight = document.getElementById("right");

function imgShow (i) {
    images.forEach((img) => {
        img.style.display = "none";
    })
    images[i].style.display = "block";
}

btnLeft.addEventListener("click", () => {
    if (i == 0) {
        i = images.length-1;
        imgShow(i)
    } else {
        i--;
        imgShow(i)
    }
})

btnRight.addEventListener("click", () => {
    if (i == images.length-1) {
        i = 0;
        imgShow(i)
    } else {
        i++;
        imgShow(i)
    }
})
