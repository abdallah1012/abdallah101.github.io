//File to write JQuery functions separately

$(document).ready(function(){

      /*$("p").mouseenter(function(){
        alert("You entered p1!");
      });*/

      $("#hide").click(function(){

        if($("#p1").is(":visible")){
          $("#p1").slideToggle(function(){
            $("#p2").css({marginLeft: '300px'}); //use fade toggle to toggle using hiding and show
          });   
        }else{
          $("#p2").css({marginLeft: '0px'});
          $("#p1").slideToggle()
        }

      });
      
      $("#anim").click(function(){
        $("#p2").animate({width: '+=200px'}).animate({width: '-=200px'});
      });

      


  });
        
       