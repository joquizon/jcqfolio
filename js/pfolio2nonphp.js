$(document).ready(function() {
console.log ("operational");
   $("#skills").click(function()
      {
        $(".skillsmodalA").toggleClass("skillsmodal");
        $(".infopanel").toggleClass("infopanelA");

          $(".workhold").toggleClass("workholdA");
      }); 

   $("#nikeaddcredits").click(function()
      {
            $(".credmodal").toggleClass("credmodalA");
      });


// _____________show specific work gallery_______
    $(".workgrid").click(function()
      {
              // $(".workhold").hide();
          // workholdgrid is the name of the imagefiles

          var targID = event.target.id;
          var MtargID = targID + "DIV";
          var ItargID = targID + "INFO";


          $("#"+MtargID).fadeIn();
          $("#"+ItargID).fadeIn();
          $(".titleholder").attr("id",targID);
          $(".workhold").fadeOut();
          $(".workholdA").attr("class","workhold");
          $(".skillsmodal").attr("class","skillsmodalA");
                  $(".infopanelA").attr("class","infopanel");
      });


// ____________from grid to scroller and back____

    function gridtoscroller()
      {
          var targID = event.target.id;
          var targCL = event.target.className;
          $(".gridreturn").fadeIn(300)
          $(".gridreturn").attr("id",targCL);   
          $("."+targCL).attr("class","slider");
          $(".titleholder").attr("id",targCL);



          $(".slider").each(function()
            {          
              var workActDiv = $(".workactual").width();
              var sliderWD = $(this).width()/workActDiv;
              var sliderWDperc = sliderWD * 100;
              var sliderMargin = (100 - sliderWDperc);
              var sliderMLEFT = sliderMargin/2;
              console.log(this);
                $(this).css("margin-left",sliderMLEFT+"%");
            });

          $("#slider").show();
          $("#"+targID).hide();



          var workActDiv = $(".workactual").width();
          var topslideWD = $("#"+targID).width()/workActDiv;
          var topslideWDperc = topslideWD * 100;
          var topslideMargin = (100 - topslideWDperc);
          var topslideMLEFT = topslideMargin/2;


          $(".topslide").css("margin-left",topslideMLEFT+"%");
          $(".topslide").fadeIn(200);
          $(".credmodalA").attr("class","credmodal");
      };

    $(".momath,.seasalt,.deck").click(function(event)
        {
          var targID = event.target.id;
          var targCL = event.target.className;

          $(".topslide").attr("src","images/gallery"+targCL+"/"+targID+".jpg");
          gridtoscroller();
        });



        $(".nike,.olympic,.bauer,.jcas").click(function(event)
        {
          var targID = event.target.id;
          var targCL = event.target.className;
          
          $(".topslide").attr("src","images/gallery"+targCL+"/"+targID+".gif");  
          gridtoscroller();    
        });


        function backtogrid()
          {
                  var targIDE = event.target.id;
                  $(".topslide").hide();
                  $(".slider").attr("class",targIDE);
                  $("."+ targIDE).show();
                    $(".momath,.olympic,.bauer").css("margin-left","calc(12%/5)");
                    $(".seasalt").css("margin-left","calc(25%/4)");
                    $(".deck").css("margin-left", "calc(20%/6)");
                    $(".nike,.jcas").css("margin-left","calc(10%/4)");

                  $(".gridreturn").fadeOut(300); 
                    $(".credmodalA").attr("class","credmodal");
          };

          $(".gridreturn").click(function(event)
                {
                  backtogrid();
                });



// ___________from grid or scroller to home______



          $(".titleholder").click(function()
          {
            var targIDE = event.target.id;
            var MtargIDE = targIDE + "DIV";
            var ItargIDE = targIDE + "INFO";

            backtogrid();
            $(".workactual").fadeOut(500);
            $(".workhold").fadeIn();
            $(".infopanel").fadeOut();
          });


});