let myHeading = document.querySelector("h2");
myHeading.textContent = "Hello world!";

let count =0;

function changeImage(src) {
    document.querySelector("img").src = "../image/" + src + ".png";
}
 
document.body.onmousedown = function () {
    count +=1;
    document.querySelector("#pop").textContent = count;
    changeImage("s0096_27_0");
}
document.body.onmouseup = function () {
    changeImage("s0096_20_0");
}