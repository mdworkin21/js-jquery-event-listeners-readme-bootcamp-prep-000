//define functions here

function getIt(){
  $('p').on('click', function(){
    alert("Clicked!")
  })
}

function frameIt(){
  $('img').on('load', function(){
    alert("Yay!")

  })
}


$(document).ready(function(){

// call functions here
getIt()

frameIt()

});
