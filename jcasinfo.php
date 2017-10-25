<?php 

$result =  '
   <div class="workactual" id="jcasDIV">
    <div class="infopanel" id="jcasINFO">
      <p>
              JCAS 3
      context:
      Web Development 100 Class proj. 2015

      The JCAS 3 project was created to exhibit accrued introductory knowledge of html, javascript, and css. The project is comprised of 3 html pages that introduces viewers to JCAS 3 the robot, and subsequent pages that allow the user to examine the droid and command him to execute 3 dance moves. The project is currently live and can be visited here.

      role: Graphic Designer, Coder, Animator, 3d Model builder 
      software: Sublime Text, Illustrator, Flash, Photoshop, Lightwave 

      </p>
    </div>


    <img class="topslide" id="topimage" src="images/galleryjcas/#.gif">
    <img class="jcas" id="jcasworkA" src="images/galleryjcas/jcasworkA.gif">
    <img class="jcas" id="jcasworkB" src="images/galleryjcas/jcasworkB.gif">
    <img class="jcas" id="jcasworkC" src="images/galleryjcas/jcasworkC.gif">
    <img class="jcas" id="jcasworkD" src="images/galleryjcas/jcasworkD.gif">
    <img class="jcas" id="jcasworkE" src="images/galleryjcas/jcasworkE.gif">
    <img class="jcas" id="jcasworkF" src="images/galleryjcas/jcasworkF.gif">
    <img class="jcas" id="jcasworkG" src="images/galleryjcas/jcasworkG.gif">
    <img class="jcas" id="jcasworkH" src="images/galleryjcas/jcasworkH.gif">

  </div>
  <script>

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






		          $("#jcasINFO").fadeIn();
        $(".jcas").click(function(event)
        {
          var targID = event.target.id;
          var targCL = event.target.className;
          
          $(".topslide").attr("src","images/gallery"+targCL+"/"+targID+".gif");  
          gridtoscroller();    
        });
		</script>';
echo $result;

?>