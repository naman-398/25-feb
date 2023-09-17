$('.slider').slick({
    dots: null,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    arrows: true,
    autoplay: false,
    prevArrow: '.btnnxt',
    nextArrow: '.btnprev',
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: null
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                speedautoplay: 2000,
                speed: 1000,
                arrows: false,
            }
        }
    ]
});

/*counter*/
let AddBtn = document.querySelector(".addbtn");
let SubBtn = document.querySelector(".minusbtn");
let p = document.querySelector(".numberbtn");

AddBtn.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML + 1;
    SaveBtn.classList.remove("btn-disabled");
})

SubBtn.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML - 1;
    SaveBtn.classList.remove("btn-disabled");
})

/*time-counter*/

var countDownDate = new Date("october 31, 2023 15:37:25").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("time").innerHTML = days + " : " + hours + " : " +
        minutes + "  : " + seconds + "  ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "EXPIRED";
    }
}, 1000);