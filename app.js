document.addEventListener('DOMContentLoaded', function() {

var plansza = document.querySelector(".plansza");


var time = setInterval(function(){
    var zombie = document.createElement("div");
    zombie.classList.add("zombie");


    // pozycja

    var min = 10;
    var max = 360;
    var bottomPos = Math.floor(Math.random()*(max-min+1)+min);


    zombie.style.bottom = bottomPos + "px";

    //z-index
    zombie.style.zIndex = 360 - bottomPos;

    //szybkość poruszania

    var min = 10;
    var max = 20;
    var walkSpeed = Math.floor(Math.random()*(max-min+1)+min);


    var anim = "zombieAnim 1s 0s infinite steps(9), zombieWalk "+walkSpeed+"s 0s 1 linear";

    zombie.style.animation = anim;

    // skala
    var scale = 0.8 + Math.random() * 0.5;
    zombie.style.transform = "scale("+scale+")";

    //blur
    if(bottomPos > 200) {
       zombie.style.filter = "blur(2px)";
    }
    else if (bottomPos > 100) {
        zombie.style.filter = "blur(1px)";
    }

    // życie
    zombie.live = 2;


    plansza.appendChild(zombie);


    zombie.addEventListener("animationend", function (e) {
       if(e.animationName === "zombieWalk") {

       }
    });

},1000);


plansza.addEventListener("click", function (e) {
    if(e.target.classList.contains("zombie")) {
        e.target.live--;
        if(e.target.live <=0) {
        e.target.remove();
    }
    }
});



});