$(document).ready(function(event){

//alert("test2");

$("#subscribe").change(function(){

    if($(this).is(":checked")){
        //alert("checked.");
        $('#emailField').css({
          display: 'block'
        });
    }
    else{
      //  alert("unchecked.");
        $('#emailField').css({
          display: 'none'
        });
    }

});


});


//
//$('#emailField').css({
//    display: 'block'
//  });
//}
//else{
//$('#emailField').css({
//    display: 'none'
//  });
//}'''
