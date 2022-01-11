
/* 
╦╔═╦ ╦╔═╗╔╦╗╔═╗
╠╩╗║║║╠═╣ ║║║ ║
╩ ╩╚╩╝╩ ╩═╩╝╚═╝
*/

const droneTracker = document.querySelector(".drone-follow");
// Taille de l'image 50


var mouseX = 0;
var mouseY = 0;
var xp = 0;
var yp = 0;

var rotate = 20

document.addEventListener('mousemove', e => {

    mouseX =  e.pageX - 25;
    mouseY =  e.pageY - 25;

    


})


setInterval(function(){

    
    xp += ((mouseX - xp)/12);

    yp += ((mouseY - yp)/12);

    droneTracker.style.left = xp     + "px";

    droneTracker.style.top  = yp     + "px";
    
    

    var dleft = parseInt((droneTracker.style.left).substring(0, (droneTracker.style.left).length-2), 10);
    var dtop  = parseInt((droneTracker.style.top).substring (0, (droneTracker.style.top).length-2) , 10);
    var dOrientation;


    rotate = Math.atan2(mouseY - dtop, mouseX - dleft) * 180 / Math.PI;


    if ( mouseX > xp )
    {
        if (mouseY < yp)
        {
            droneTracker.style.transform = `rotate(${rotate+90}deg)`;
            console.log('↗️');
        }
        else
        {
            droneTracker.style.transform = `rotate(${rotate+90}deg)`;
            console.log("↘️")
        }
        
    }
    else if ( mouseX < xp )
    {
        if (mouseY < yp)
        {
            droneTracker.style.transform = `rotate(${rotate+90}deg)`;
            console.log('↖️');
        }
        else
        {
            droneTracker.style.transform = `rotate(${rotate+90}deg)`;
            console.log("↙️")
        }
    }
    
    if ( xp >= mouseX-5 && xp <= mouseX+5)
    {
         //console.log("mode rotatif on")
         droneTracker.style.top  = yp-1      + "px";
         droneTracker.style.left = xp+1      + "px";
    }
    

}, 20);
