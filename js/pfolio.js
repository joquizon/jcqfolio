$(document).ready(function() {
console.log ("operational");
   $("#skills").click(function()
      {
        $(".skillsmodalA").toggleClass("skillsmodal");
        $(".infopanel").toggleClass("infopanelA");
      }); 

// _____________show specific work gallery_______
    $(".workgrid").click(function()
      {
              // $(".workhold").hide();
          // workholdgrid is the name of the imagefiles

          var targID = event.target.id;
          var MtargID = targID + "DIV";
          var ItargID = targID + "INFO";


          $("#"+MtargID).show();
          $("#"+ItargID).show();
          $(".titleholder").attr("id",targID);
          $(".workhold").animate({marginLeft: "200%"},500);
          $(".workactual").animate({marginTop: "0%"},500);
          $(".infopanel").animate({marginTop: "15%"},500);
      });


// ____________from grid to scroller and back____
    $(".momath,.seasalt").click(function(event)
        {
          var targID = event.target.id;
          var targCL = event.target.className;
          $(".gridreturn").fadeIn(300)
          $(".gridreturn").attr("id",targCL);   
          $("."+targCL).attr("class","slider");
          $(".titleholder").attr("id",targCL)
          $("#slider").show();
          $("#"+targID).hide();

          $(".topslide").attr("src","images/gallery"+targCL+"/"+targID+".jpg");
          $(".topslide").fadeIn(200);
          $("#topimage").attr("id",targID);      
        });


    $(".gridreturn").click(function(event)
        {
          var targIDE = event.target.id;
          $(".topslide").hide();
          $(".slider").attr("class",targIDE);
          $("."+targIDE).show();  
          $(this).fadeOut(300);    
        });



// ___________from grid or scroller to home______
          $(".titleholder").click(function()
          {
            var targIDE = event.target.id;
            var MtargIDE = targIDE + "DIV";
            var ItargIDE = targIDE + "INFO";

            $(".topslide").hide();
            $(".slider").hide();
            $(".gridreturn").fadeOut(300); 
            $(".workactual").animate({
              marginTop: "-100%"},1000).fadeOut(500);
            $(".workhold").animate({
              marginLeft: "0%"},1000);
            $(".infopanel").animate({marginTop: "-100%"},1000).fadeOut(500);
          });
    
// _____________show skills tab__________________ 

  // $('#contact').click(function (event) 
  // {
  //     event.preventDefault();
  //   var email = 'josequizon@jcqfolio.com';
  //   var subject = 'Hi Jose!';

  //   window.location = 'mailto:' + email + '?subject=' + subject;
  // });

// $("#imghold").attr("src","images/galleryfolder/"+targID+".jpg");
//     $(".gallerybuttonsB").attr("id",targID);
//     $(".gallerybuttonsF").attr("id",targID);

});