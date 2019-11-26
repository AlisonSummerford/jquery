$(document).ready(function(event){
      //alert("test");

  $("#useBilling").change(function(){
    //alert("test function");


    if($(this).is(":checked")){



        $("#home").val($("#billing").val());
        $("#home").prop('disabled', true);



    }
    else{



        $("#home").val("");
        $("#home").prop('disabled', false);

    }

  });



});
