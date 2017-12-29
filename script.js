let places = document.getElementsByClassName("penguinPlace");

let penguinList = ["penguin1", "penguin2", "penguin3", "penguin4", "penguin5", "penguin6", "penguin7", "penguin8", "yeti"];




for(let i = 0; i < places.length; i++){
  
  places[i].className += " " + penguinList[i];
  penguinList[i];
}




let yetiPlace = Math.floor(   Math.random() * 9   );
//console.log("The yeti will be at space " + yetiPlace);
let thePenguin = places[yetiPlace].className;
places[yetiPlace].className = "penguinPlace yeti";
places[places.length-1].className = "penguinPlace " + thePenguin;



