

function screenDisplay(e) {
   if (display.innerHTML === "0") {
       display.innerHTML = e.innerHTML;
   } else {
       display.innerHTML += e.innerHTML;
   }
}

function ClearDisplay(){
   display.innerHTML = "0";
}


function egal(){
   try{
   let result = eval(display.innerHTML);
   display.innerHTML = result;
   } catch (error){
       display.innerHTML = "Erreur";
   }
}