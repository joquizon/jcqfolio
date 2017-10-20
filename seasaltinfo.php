<?php 

$result =  '
	<div class="infopanel" id="seasaltINFO">
		<p>
			SEASALT BBQ RUB
			context:
			Branding Class proj. 2014
			The Seasalt branding assignment, required the designer to brand a randomly assigned item. A container for the item and the shirt were used as the implementation for the branding elements. The item was branded to appeal to a younger tailgating crowd while exuding a nostalgic, down home energy.
			role: Graphic Designer, Modeler 
			software:Illustrator, Lightwave 
		</p>
	</div>		
		<img class="topslide" id="topimage" src="images/galleryseasalt/#.jpg">
		<img class="seasalt" id="seasaltworkA" src="images/galleryseasalt/seasaltworkA.jpg">
		<img class="seasalt" id="seasaltworkB" src="images/galleryseasalt/seasaltworkB.jpg">
		<img class="seasalt" id="seasaltworkC" src="images/galleryseasalt/seasaltworkC.jpg">
		<img class="seasalt" id="seasaltworkD" src="images/galleryseasalt/seasaltworkD.jpg">
		<img class="seasalt" id="seasaltworkE" src="images/galleryseasalt/seasaltworkE.jpg">
		<img class="seasalt" id="seasaltworkF" src="images/galleryseasalt/seasaltworkF.jpg">
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






		          $("#seasaltINFO").fadeIn();
    $(".momath,.seasalt").click(function(event)
        {
          var targID = event.target.id;
          var targCL = event.target.className;

          $(".topslide").attr("src","images/gallery"+targCL+"/"+targID+".jpg");
          gridtoscroller();
        });
		</script>';
echo $result;

?>