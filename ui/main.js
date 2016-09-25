console.log('Loaded!');
var ele = document.getElementById('1')
ele.innerHTML='New'
var img1 = document.getElementById('img1');
var marginLeft=0;
function moveRight()
{marginLeft=marginLeft+10;
img1.style.marginLeft=marginLeft +'px'; 
}
img1.onclick = function()
{
   
    var interval=setInterval(moveRight,100);
}
