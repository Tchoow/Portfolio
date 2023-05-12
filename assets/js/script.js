
/* 
╦╔═╦ ╦╔═╗╔╦╗╔═╗
╠╩╗║║║╠═╣ ║║║ ║
╩ ╩╚╩╝╩ ╩═╩╝╚═╝
*/

/* imports */
  



const droneTracker = document.querySelector(".drone-follow");
const containerKwado = document.querySelector("#kwado");

var mouseX = 0;
var mouseY = 0;
var xp     = 0;
var yp     = 0;


document.addEventListener('mousemove', e => {
    if (containerKwado.contains(e.target)) {
        mouseX = e.clientX / 1.50;
        mouseY = e.clientY / 1.50;
    }
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
    

}, 20);



let wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
wow.init();