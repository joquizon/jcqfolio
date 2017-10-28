<?php 

$result =  '
    <div class="infopanel" id="olympicINFO">
      <p>
        <span class="projtitle">The<br> AMERICAN STATE<br> of the<br> OLYMPICS</span><br><br>
        Context /<br>
        Information Graphics<br><br>
        About /<br>
        The American State project was created for a data mapping assignment. It illustrates where the Olympic athletes of 2012 and 2014 originate from and compares these athletes and states by population count as well as economically and meteorologically. The interactive infographic was created in flash and can be viewed on flash enabled devices 
        <a href="http://jcqfolio.com/olympics/">
        here.
        </a><br><br>
        Role /<br>
        Graphic Designer, Animator, Action Script Coder
      </p>
    </div>


    <img class="topslide" id="topimage" src="images/galleryolympic/#.gif">
    <img class="olympic" id="olympicworkA" src="images/galleryolympic/olympicworkA.gif">
    <img class="olympic" id="olympicworkB" src="images/galleryolympic/olympicworkB.gif">
    <img class="olympic" id="olympicworkC" src="images/galleryolympic/olympicworkC.gif">
    <img class="olympic" id="olympicworkD" src="images/galleryolympic/olympicworkD.gif">
    <img class="olympic" id="olympicworkE" src="images/galleryolympic/olympicworkE.gif">
    <img class="olympic" id="olympicworkF" src="images/galleryolympic/olympicworkF.gif">
    <img class="olympic" id="olympicworkG" src="images/galleryolympic/olympicworkG.gif">
    <img class="olympic" id="olympicworkH" src="images/galleryolympic/olympicworkH.gif">
    <img class="olympic" id="olympicworkG" src="images/galleryolympic/olympicworkI.gif">
    <img class="olympic" id="olympicworkH" src="images/galleryolympic/olympicworkJ.gif">

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