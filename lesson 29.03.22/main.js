let images = document.querySelectorAll('.carousel-item');
<<<<<<< HEAD
let i;

for (i = 1; i < 5; i++) {
    images[i].style.display = "none";
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
        i = 4;
        imgShow(i)
    } else {
        i--;
        imgShow(i)
    }
})

btnRight.addEventListener("click", () => {
    if (i == 4) {
        i = 0;
        imgShow(i)
    } else {
        i++;
        imgShow(i)
    }
})
=======
console.log(images);
images[0].style.display = "none"; //убирает первую картинку
>>>>>>> e69e95bcad6174d070b18bedd07c0c463ceff5c2
