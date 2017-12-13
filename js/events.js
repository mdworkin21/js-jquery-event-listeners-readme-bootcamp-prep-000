//define functions here

function getIt(){
  $('p').on('click', function(){
    alert("Clicked!")
  })
}

function frameIt(){
  $('img').on('load', function(){


  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.")
  })
}

function pressIt(){
  $('document').on("keypress", function(){
    if(key.which === 71){
    alert("The g key was pressed")}

  })
}

$(document).ready(function(){

// call functions here
getIt()

frameIt()

submitIt()
});
