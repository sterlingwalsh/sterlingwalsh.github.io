var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById("gradient");

var rect = body.getBoundingClientRect();
var angle = 90;

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
body.addEventListener("mousemove", function(event){
    calcAngle(event);
    setGradient();
});
body.addEventListener("resize", function(){
    rect = body.getBoundingClientRect();
});

function calcAngle(evt){
    var mX = evt.clientX - rect.left;
    var mY = evt.clientY - rect.top;

    var distX = mX - rect.width/2;
    var distY = (mY - rect.height/2);
    console.log(Math.atan2(distY, distX));
    angle = Math.atan2(distY, distX) * (180/Math.PI) - 90;
};


function setGradient(){
    body.style.background = "linear-gradient(" + angle + "deg, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background = "linear-gradient(" + angle.toFixed(2) + "deg, " + color1.value + ", " + color2.value + ")";
}