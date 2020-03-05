/********** AZULEJOS ***********/

/*Generate tiles*/
let azul= document.querySelectorAll("div.azulejos")
azul.forEach(function(a) {
  for (var i = 0; i < 25; i++) {
    a.innerHTML+= '<div style="position: absolute; top:'+20*parseInt(i/5)+'px; left:'+(i%5)*20+'px"><div class="up"></div><div class="down"></div></div>';
  }
});

let generateTile=()=>{
   let up_down=document.querySelectorAll('div.up, .down')
   up_down.forEach((i) => {i.style.opacity='1'});

   /*Ici*/
   var w = Math.floor(Math.random()*(10+1));
   var x = Math.floor(Math.random()*(10+1));
   var y = Math.floor(Math.random()*(10+1));
   var z = Math.floor(Math.random()*(10+1));

   let up =document.querySelectorAll(".azulejos div:nth-child("+w+"n+"+x+") .up")
   up.forEach((i) => {i.style.opacity='0.2'});

   let down=document.querySelectorAll(".azulejos div:nth-child("+y+"n+"+z+") .down")
   down.forEach((i) => {i.style.opacity='0.2'});
}
