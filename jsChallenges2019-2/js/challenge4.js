$(document).ready(function(event){

var okToSubmit = true;

//----------------------------------------------------------
//this section of code could be removed/commented out to prevent the errors from appearing as a default when the page is frist loaded
      $("#nameerrormsg").css({
        display: 'block'
      });
      $("#addrerrormsg").css({
        display: 'block'
      });
//----------------------------------------------------------

$("#ch4form").submit(function(){
  if ($("#fullname").val().length === 0){

    $("#nameerrormsg").css({
      display: 'block'
    });

    var okToSubmit = false;

  }
  else{
    $("#nameerrormsg").css({
    display: 'none'
    });
  }



  if ($("#streetaddr").val().length === 0){

    $("#addrerrormsg").css({
      display: 'block'
    });

    var okToSubmit = false;
  }
  else{
    $("#addrerrormsg").css({
    display: 'none'
    });
  }

  return okToSubmit;

});
});
