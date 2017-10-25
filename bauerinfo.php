<?php 

$result =  '
    <div class="workactual" id="bauerDIV">
    <div class="infopanel" id="bauerINFO">
      <p>
        THE BAUER COUNT
        context:
        Information Graphics class proj. 2014

        The Bauer Count project was designed for a current event infographic assignment. Created to celebrate the return of Foxs 24 to the small screen, the project was designed to show the number of on-screenkills Jack Bauer had in the original 8 season run. The interactive infographic was created in flash and can be viewed on flash enabled devices here.

        role: Graphic Designer, Animator, Action Script Coder 
        software:Illustrator, Flash 
      </p>
    </div>


    <img class="topslide" id="topimage" src="images/gallerybauer/#.gif">
    <img class="bauer" id="bauerworkA" src="images/gallerybauer/bauerworkA.gif">
    <img class="bauer" id="bauerworkB" src="images/gallerybauer/bauerworkB.gif">
    <img class="bauer" id="bauerworkC" src="images/gallerybauer/bauerworkC.gif">
    <img class="bauer" id="bauerworkD" src="images/gallerybauer/bauerworkD.gif">


  </div>

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






		          $("#bauerINFO").fadeIn();
        $(".nike,.olympic,.bauer").click(function(event)
        {
          var targID = event.target.id;
          var targCL = event.target.className;
          
          $(".topslide").attr("src","images/gallery"+targCL+"/"+targID+".gif");  
          gridtoscroller();    
        });
		</script>';
echo $result;

?>