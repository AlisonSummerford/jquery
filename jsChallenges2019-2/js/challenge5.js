$(document).ready(function(event){


      $("img").mouseover(function(){

        x = $(this).attr("src")
        y = $(this).attr("alt")

        $("#image").css('background-image', 'url( ' + x + ' )');
        $("#image").html(y);


          console.log(y);

      });

      $("img").mouseleave(function(){

        $("#image").css('background-image', 'url( )');
        $("#image").attr("alt", "");
        $("#image").html("Hover over an image below");
      });

      $("img").focus(function(){

        x = $(this).attr("src");
        y = $(this).attr("alt");

        $("#image").css('background-image', 'url( ' + x + ' )');
        $("#image").html(y);

      });

      $("img").blur(function(){

        $("#image").css('background-image', 'url( )');
        $("#image").attr("alt", "");
        $("#image").html("Hover over an image below");
      });



});
