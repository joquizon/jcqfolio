<?php 

$result =  '
<div class="infopanel" id="nikeINFO">
      <p>
        <span class="projtitle">NIKE COLLAGE VIDEO</span><br><br>
        Context /<br>
        Graphic Design Class<br><br>
        About /<br>
        For the Nike collage assignment various video sources were collected and edited by the designer to be the foundation for a video juxtaposition. The graphic overlays and animations were designed to echo the constant movement and frenetic energy commonly seen in many Nike commercials.<br><br>
        Role /<br>Graphic Designer, Animator, Video Editor, Video Compiler<br>

        <span id="nikeaddcredits"> Additional Credits</span>
      </p>
    </div>


    <img class="topslide" id="topimage" src="images/gallerynike/#.gif">
    <img class="nike" id="nikeworkA" src="images/gallerynike/nikeworkA.gif">
    <img class="nike" id="nikeworkB" src="images/gallerynike/nikeworkB.gif">
    <img class="nike" id="nikeworkC" src="images/gallerynike/nikeworkC.gif">
    <img class="nike" id="nikeworkD" src="images/gallerynike/nikeworkD.gif">
    <img class="nike" id="nikeworkE" src="images/gallerynike/nikeworkE.gif">
    <img class="nike" id="nikeworkF" src="images/gallerynike/nikeworkF.gif">
    <img class="nike" id="nikeworkG" src="images/gallerynike/nikeworkG.gif">
    <img class="nike" id="nikeworkH" src="images/gallerynike/nikeworkH.gif">

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






		          $("#seasaltINFO").fadeIn();
        $(".nike,.olympic").click(function(event)
        {
          var targID = event.target.id;
          var targCL = event.target.className;
          
          $(".topslide").attr("src","images/gallery"+targCL+"/"+targID+".gif");  
          gridtoscroller();    
        });
		</script>';
echo $result;

?>