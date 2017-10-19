<?php 

$result =  '

	<div class="infopanel" id="momathINFO">
		<p>
			MUSEUM OF MATHEMATICS
			context:
			Branding Class proj. 2014

			The Museum of Mathematics 
			rebranding assignment, required 
			an overhaul of the museums brand 
			elements and deliverables. The 
			logo and wordmarks were 
			redesigned, while the museum 
			stationery, poster and brochure 
			were assigned as the 
			implementation.

			role: 
			Graphic Designer, Photographer
			software: 
			Photoshop, Illustrator, 
			Flash, Lightwave
		</p>
	</div>

<img class="topslide" id="topimage" src="images/gallerymomath/#.jpg">
		<img class="momath" id="momathworkA" src="images/gallerymomath/momathworkA.jpg">
		<img class="momath" id="momathworkB" src="images/gallerymomath/momathworkB.jpg">
		<img class="momath" id="momathworkC" src="images/gallerymomath/momathworkC.jpg">
		<img class="momath" id="momathworkD" src="images/gallerymomath/momathworkD.jpg">
		<img class="momath" id="momathworkE" src="images/gallerymomath/momathworkE.jpg">
		<img class="momath" id="momathworkF" src="images/gallerymomath/momathworkF.jpg">
		<img class="momath" id="momathworkG" src="images/gallerymomath/momathworkG.jpg">
		<img class="momath" id="momathworkH" src="images/gallerymomath/momathworkH.jpg">
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
          $("#topimage").attr("id",targID); 
          $(".credmodalA").attr("class","credmodal");
      };






		          $("#momathINFO").fadeIn();
    $(".momath,.seasalt").click(function(event)
        {
          var targID = event.target.id;
          var targCL = event.target.className;

          $(".topslide").attr("src","images/gallery"+targCL+"/"+targID+".jpg");
          gridtoscroller();
        });
		</script>;
';
echo $result;

?>