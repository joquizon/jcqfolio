$(document).ready(function() {
console.log ("operational");
// _____________show skills tab__________________ 
   $("#skills").click(function()
      {
        $(".skillsmodalA").toggleClass("skillsmodal");
        $(".workhold").toggleClass("workholdA");
        $(".infopanel").toggleClass("infopanelA");
      }); 

// _____________show specific work gallery_______
    $(".workgrid").click(function()
      {
              // $(".workhold").hide();
          // workholdgrid is the name of the imagefiles

          var targID = event.target.id;
          var MtargID = targID + "DIV"
          var ItargID = targID + "INFO"


          $("#"+MtargID).show();
          $("#"+ItargID).show();


          $("#logohold").attr("id","logoholdA");
          $("#titleholder").attr("id","titleholderA");
          $(".workhold").animate({marginLeft: "200%"},500);
          $(".workactual").animate({marginTop: "0%"},500);
          $(".infopanel").animate({marginTop: "15%"},500);
      });


// ____________from grid to scroller and back____
    $(".momathgrid").click(function()
        {
          var targID = event.target.id;
          $("#backtogrid").fadeIn(300);    
          $(".momathgrid").attr("class","momathslider");

          $("#"+targID).hide();

          $(".topslide").attr("src","images/galleryMOMATH/"+targID+".jpg");
          $(".topslide").fadeIn(200);
          $("#topimage").attr("id",targID);      
        });


    $("#backtogrid").click(function()
        {
          $(".topslide").hide();
          $(".momathslider").attr("class","momathgrid");
          $(".momathgrid").show();  
          $(this).fadeOut(300);    
        });



// ___________from grid or scroller to home______
$("#title").click(function()
{
  $(".workactual").animate({
    marginTop: "-100%"},500);
 $(".workhold").animate({
    marginLeft: "0%"},500);
           $(".infopanel").animate({marginTop: "-100%"},500);
});
    

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