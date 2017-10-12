$(document).ready(function() {
console.log ("operational");
      
   $("#skills").click(function()
      {
        $(".skillsmodalA").toggleClass("skillsmodal");
        $(".workhold").toggleClass("workholdA");
        $(".infopanel").toggleClass("infopanelA");
      }); 


$(".workgrid").click(function()
  {
    // $(".workhold").hide();
// workholdgrid is the name of the imagefiles

var targID = event.target.id;
var MtargID = targID + "DIV"
var ItargID = targID + "INFO"


$("#"+MtargID).show()
$("#"+ItargID).show()


$("#logohold").attr("id","logoholdA");
$("#titleholder").attr("id","titleholderA");
$(".workhold").attr("class","workholdB").delay(600).queue(function() 
    {
        $(".workactual").attr("class","workactualB");
    });
  });



$(".momathgrid").click(function()
    {
      var targID = event.target.id;
      $(".momathgrid").attr("class","momathslider");
      $("#"+targID).hide();

      $("#topimage,#bottomimage").attr("src","images/galleryMOMATH/"+targID+".jpg");
      $("#topimage,#bottomimage").show();
      $("#topimage,#bottomimage").attr("id",targID);
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