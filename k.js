setInterval(myFunction, 5000);
var count = 0;
a1=document.getElementById("circle1")
a2=document.getElementById("circle2")
a3=document.getElementById("circle3")
a4=document.getElementById("circle4")
a5=document.getElementById("circle5")
a6=document.getElementById("circle6")
t = document.getElementById("fuck")
document.querySelector(".arrow").onclick = function () { myFunction() };
function myFunction() {
    count++;

    console.log(count);
    if (count >= 5 || count <= -5) {
        count = 0;
    }
    switch (count) {
        case 0:

            t.src = "inaug7.jpeg";
            a2.style.background="grey";
            a1.style.background="#0071B2";
            a5.style.background="grey";
            break;
        case 1:

            t.src = "inaug2.jpg";
            a3.style.background="grey";
            a2.style.background="#0071B2";
            a1.style.background="grey";
            break;
        case 2:

            t.src = "inaug3.jpg";
            a4.style.background="grey";
            a3.style.background="#0071B2";
            a2.style.background="grey";
            break;
        case 3:

            t.src = "inaug4.jpg";
            a5.style.background="grey";
            a4.style.background="#0071B2";
            a3.style.background="grey";
            break;
        case 4:
            t.src = "inaug5.jpg";
            a1.style.background="grey";
            a5.style.background="#0071B2";
            a4.style.background="grey";
            break;
    }
    switch (count) {
        case 0:

            t.src = "inaug7.jpeg";
            a2.style.background="grey";
            a1.style.background="#0071B2";
            a5.style.background="grey";
            break;
        case -1:

            t.src = "inaug5.jpg";
            a4.style.background="grey";
            a5.style.background="#0071B2";
            a1.style.background="grey";
            break;
        case -2:

            t.src = "inaug4.jpg";
            a5.style.background="grey";
            a4.style.background="#0071B2";
            a3.style.background="grey";
            break;
        case -3:

            t.src = "inaug3.jpg";
            a5.style.background="grey";
            a3.style.background="#0071B2";
            a4.style.background="grey";
            break;
        case -4:
            t.src = "inaug2.jpg";
            a4.style.background="grey";
            a2.style.background="#0071B2";
            a3.style.background="grey";
            break;
    }
}



t = document.getElementById("fuck")
document.querySelector(".arrow1").onclick = function () {
    count--;

    console.log(count);
    if (count >= 5 || count <= -5) {
        count = 0;
    }
    switch (count) {
        case 0:

            t.src = "inaug7.jpeg";
            a5.style.background="grey";
            a1.style.background="#0071B2";
            a2.style.background="grey";
            break;
        case 1:

            t.src = "inaug2.jpg";
            a3.style.background="grey";
            a2.style.background="#0071B2";
            a1.style.background="grey";
            break;
        case 2:

            t.src = "inaug3.jpg";
            a4.style.background="grey";
            a3.style.background="#0071B2";
            a2.style.background="grey";
            break;
        case 3:

            t.src = "inaug4.jpg";
            a5.style.background="grey";
            a4.style.background="#0071B2";
            a3.style.background="grey";
            break;
        case 4:
            t.src = "inaug5.jpg";
            a1.style.background="grey";
            a5.style.background="#0071B2";
            a4.style.background="grey";
            break;
    }
    switch (count) {
        case 0:

            t.src = "inaug7.jpeg";
            a2.style.background="grey";
            a1.style.background="#0071B2";
            a5.style.background="grey";
            break;
        case -1:

            t.src = "inaug5.jpg";
            a2.style.background="grey";
            a5.style.background="#0071B2";
            a1.style.background="grey";
            break;
        case -2:

            t.src = "inaug4.jpg";
            a3.style.background="grey";
            a4.style.background="#0071B2";
            a5.style.background="grey";
            break;
        case -3:

            t.src = "inaug3.jpg";
            a5.style.background="grey";
            a3.style.background="#0071B2";
            a4.style.background="grey";
            break;
        case -4:
            t.src = "inaug2.jpg";
            a4.style.background="grey";
            a2.style.background="#0071B2";
            a3.style.background="grey";
            break;
    }
}

q = document.getElementById("ddd")
y = document.getElementById("about5")
y.addEventListener("mouseenter", mouseUp)
y.addEventListener("mouseleave", mouseUp2)
q.addEventListener("mouseenter", mouseUp)
q.addEventListener("mouseleave", mouseUp2)
function mouseUp() {
    q.style.display = "block";
}
function mouseUp2() {
    q.style.display = "none";
}




z = document.getElementById("ddd6")
z1 = document.getElementById("about6")
z1.addEventListener("mouseenter", mouseUp3)
z1.addEventListener("mouseleave", mouseUp4)
z.addEventListener("mouseenter", mouseUp3)
z.addEventListener("mouseleave", mouseUp4)
function mouseUp3() {
    z.style.display = "block";
}
function mouseUp4() {
    z.style.display = "none";
}


v = document.getElementById("ddd7")
v1 = document.getElementById("about7")
v1.addEventListener("mouseenter", mouseUp5)
v1.addEventListener("mouseleave", mouseUp6)
v.addEventListener("mouseenter", mouseUp5)
v.addEventListener("mouseleave", mouseUp6)
function mouseUp5() {
    v.style.display = "block";
}
function mouseUp6() {
    v.style.display = "none";
}



j = document.getElementById("ddd8")
j1 = document.getElementById("about8")
j1.addEventListener("mouseenter", mouseUp7)
j1.addEventListener("mouseleave", mouseUp8)
j.addEventListener("mouseenter", mouseUp7)
j.addEventListener("mouseleave", mouseUp8)
function mouseUp7() {
    j.style.display = "block";
}
function mouseUp8() {
    j.style.display = "none";
}


s = document.getElementById("ddd9")
s1 = document.getElementById("about9")
s1.addEventListener("mouseenter", mouseUp9)
s1.addEventListener("mouseleave", mouseUp10)
s.addEventListener("mouseenter", mouseUp9)
s.addEventListener("mouseleave", mouseUp10)
function mouseUp9() {
    s.style.display = "block";
}
function mouseUp10() {
    s.style.display = "none";
}





w = document.getElementById("ddd10")
w1 = document.getElementById("about10")
w1.addEventListener("mouseenter", mouseUp11)
w1.addEventListener("mouseleave", mouseUp12)
w.addEventListener("mouseenter", mouseUp11)
w.addEventListener("mouseleave", mouseUp12)
function mouseUp11() {
    w.style.display = "block";
}
function mouseUp12() {
    w.style.display = "none";
}



p = document.getElementById("ddd11")
p1 = document.getElementById("about11")
p1.addEventListener("mouseenter", mouseUp13)
p1.addEventListener("mouseleave", mouseUp14)
p.addEventListener("mouseenter", mouseUp13)
p.addEventListener("mouseleave", mouseUp14)
function mouseUp13() {
    p.style.display = "block";
}
function mouseUp14() {
    p.style.display = "none";
}






var tount = 0;

jk = document.getElementById("chu")
document.querySelector("#cex").onclick = function () {
    tount++;

    console.log(tount);
    if (tount >= 3 || tount <= -3) {
        tount = 0;
    }
    switch (tount) {
        case 0:

            jk.src = "https://www.youtube.com/embed/zACzoUH4JDs";
            break;
        case 1:

            jk.src = "https://www.youtube.com/embed/zACzoUH4JDs";
            break;
        case 2:

            jk.src = "https://www.youtube.com/embed/tgbNymZ7vqY";

            break;

    }
    switch (tount) {
        case 0:

            jk.src = "https://www.youtube.com/embed/zACzoUH4JDs";
            break;
        case -1:

            jk.src = "https://www.youtube.com/embed/zACzoUH4JDs";
            break;
        case -2:

            jk.src = "https://www.youtube.com/embed/tgbNymZ7vqY";


            break;
    }
}



jk = document.getElementById("chu")
document.querySelector("#fex").onclick = function () {
    tount--;

    console.log(tount);
    if (tount >= 3 || tount <= -3) {
        tount = 0;
    }
    switch (tount) {
        case 0:

            jk.src = "https://www.youtube.com/embed?v=zACzoUH4JDs";
            break;
        case 1:

            jk.src = "https://www.youtube.com/embed?v=zACzoUH4JDs";
            break;
        case 2:

            jk.src = "https://www.youtube.com/embed/tgbNymZ7vqY";

            break;
    }
    switch (tount) {
        case 0:

            jk.src = "https://www.youtube.com/embed?v=zACzoUH4JDs";
            break;
        case -1:

            jk.src = "https://www.youtube.com/embed?v=zACzoUH4JDs";
            break;
        case -2:

            jk.src = "https://www.youtube.com/embed/tgbNymZ7vqY";

            break;
    }
}

