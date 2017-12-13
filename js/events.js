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


$(document).ready(function(){

// call functions here
getIt()

frameIt()

submitIt()
});
