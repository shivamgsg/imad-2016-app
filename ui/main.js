console.log('Loaded!');
var ele = document.getElementById('1')
ele.innerHTML='Pic pe click kar'
var img1 = document.getElementById('img1');
var marginRight=0;
function moveLeft()
{marginRight=marginRight+10;
img1.style.marginRight=marginRight +'px'; 
}
img1.onclick = function()
{
   
    var interval=setInterval(moveLeft,30);
}
