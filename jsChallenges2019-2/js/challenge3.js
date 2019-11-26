$(document).ready(function(event){

  let validInputFruit = false;
  let standing = false;

  $("#ch3form").submit(function( event ) {

    $('input[name="fruit"]').each(function() {
        if($(this).is(":checked")){
        console.log("checked");
        validInputFruit = true;
      }
      });


      $('input[name="standing"]').each(function() {
          if($(this).is(":checked")){
          console.log("checked");
          standing = true;
        }
        });








   if (validInputFruit == false || standing == false){
    alert("you must make a selection");
    return false;
}


});

});
