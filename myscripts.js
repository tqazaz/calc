

var screen = document.getElementById('screen') ;
//
// console.log(screen.value) ;

document.addEventListener("click", function(event){

 if(event.target.type ==  'button') {

   if(event.target.textContent == "="){

      var result = eval(screen.value) ;
      screen.value = result ;

   }  else if(event.target.textContent == "DEL"){

   screen.value = screen.value.slice(0,-1) ;
  }

  else if(event.target.textContent == "RES"){

  screen.value = "";

 }
   else {

     screen.value += event.target.textContent ;

   }

 }

});
