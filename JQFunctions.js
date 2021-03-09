//File to write JQuery functions separately

$(document).ready(function(){

      /*$("p").mouseenter(function(){
        alert("You entered p1!");
      });*/

      $("#hide").click(function(){

        if($("#p1").is(":visible")){
          $("#p1").slideToggle();   
        }else{
          $("#p1").slideToggle()
        }

      });
	  
	  $("#hide2").click(function(){

        if($("#p2").is(":visible")){
          $("#p2").slideToggle(function(){
            
          });   
        }else{
          $("#p2").slideToggle()
        }

      });
	  
	  	 $("#hide3").click(function(){

        if($("#p3").is(":visible")){
          $("#p3").slideToggle(function(){
            
          });   
        }else{
          $("#p3").slideToggle()
        }

      });
      
    
      


  });
        
       