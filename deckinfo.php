<?php 

$result =  '
    <div class="infopanel" id="deckINFO">
      <p>
        <span class="projtitle">CLUB DIAMOND <br>Playing cards</span><br><br>
        Context /<br>
        Graphic Design Class<br><br>
        About /<br>
        The Game assignment required the designer to produce a package for a game. The designer chose the traditional deck of cards for redesign. The concept cards produced were meant to exude a contemporary look that did not stray too far from standard playing card requirements. The minimal look of the packaging was meant to refer back to the bars used in the card designs, while its opening was inspired by the classic zippo lighter design.<br><br>

        Role /<br>
        Graphic Designer, Modeler
      </p>
    </div>


    <img class="topslide" id="topimage" src="images/gallerydeck/#.jpg">
    <img class="deck" id="deckworkX" src="images/gallerydeck/deckworkX.jpg">    
    <img class="deck" id="deckworkH" src="images/gallerydeck/deckworkH.jpg">
    <img class="deck" id="deckworkI" src="images/gallerydeck/deckworkI.jpg">
    <img class="deck" id="deckworkJ" src="images/gallerydeck/deckworkJ.jpg">  
    <img class="deck" id="deckworkJ" src="images/gallerydeck/deckworkK.jpg">    
    <img class="deck" id="deckworkB" src="images/gallerydeck/deckworkB.jpg">
    <img class="deck" id="deckworkC" src="images/gallerydeck/deckworkC.jpg">
    <img class="deck" id="deckworkE" src="images/gallerydeck/deckworkE.jpg">
    <img class="deck" id="deckworkF" src="images/gallerydeck/deckworkF.jpg">
    <img class="deck" id="deckworkG" src="images/gallerydeck/deckworkG.jpg">

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






		          $("#deckINFO").fadeIn();
    $(".deck").click(function(event)
        {
          var targID = event.target.id;
          var targCL = event.target.className;

          $(".topslide").attr("src","images/gallery"+targCL+"/"+targID+".jpg");
          gridtoscroller();
        });
		</script>';
echo $result;

?>