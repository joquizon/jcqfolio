$(document).ready(function() {
console.log ("operational");
      
   $("#skills").click(function()
      {
        $(".skillsmodalA").toggleClass("skillsmodal");
      }); 






  var workholdgrid = ["work1A"
                    ,"work1B"
                    ,"work1C"
                    ,"work1D"
                    ,"work1E"
                    ,"work1F"
                    ,"work2A"
                    ,"work2B"
                    ,"work2C"
                    ,"work2D"
                    ,"work2E"
                    ,"work2F"
                    ,"work3A"
                    ,"work3B"
                    ,"work3C"
                    ,"work3D"
                    ,"work3E"
                    ,"work3F"
                    ,"work4A"
                    ,"work4B"
                    ,"work4C"
                    ,"work4D"
                    ,"work4E"
                    ,"work4F"
                    ,"work5A"
                    ,"work5B"
                    ,"work5C"
                    ,"work5D"
                    ,"work5E"
                    ,"work5F"
                    ,"work6A"
                    ,"work6B"
                    ,"work6C"
                    ,"work6D"
                    ,"work6E"
                    ,"work6F"
                    ,"work7A"
                    ,"work7B"
                    ,"work7C"
                    ,"work7D"
                    ,"work7E"
                    ,"work7F"
                    ,"work8A"
                    ,"work8B"
                    ,"work8C"
                    ,"work8D"
                    ,"work8E"
                    ,"work8F"
                    ,"work9A"
                    ,"work9B"
                    ,"work9C"
                    ,"work9D"
                    ,"work9E"
                    ,"work9F"
                    ,"work10A"
                    ,"work10B"
                    ,"work10C"
                    ,"work10D"
                    ,"work10E"
                    ,"work10F"];
$(".workgrid,.workgrid2,.workgrid3,.workgrid4,.workgrid5,.workgrid6,.workgrid7,.workgrid8,.workgrid9,.workgrid10").click(function()
  {
    $("#galleryview").show();
    $("#workhold").hide();
// workholdgrid is the name of the imagefiles

var targID = event.target.id;
$("#imghold").attr("src","images/galleryfolder/"+targID+".jpg");
    $(".gallerybuttonsB").attr("id",targID);
    $(".gallerybuttonsF").attr("id",targID);
  });



// clicking class of item in galler grabs target id. and thats the names the src of Gallery view (enlarged view); renames forward and back buttons as well and gets it ready to cycle through


$(".gallerybuttonsF").click(function()
  {
    var t =(event.target.id)
    var next= workholdgrid[($.inArray(t,workholdgrid)+1)% workholdgrid.length]
    $("#imghold").attr("src","images/galleryfolder/"+next+".jpg");

    $(".gallerybuttonsB").attr("id",next);
    $(".gallerybuttonsF").attr("id",next);

  });


$(".gallerybuttonsB").click(function()
  {
    var t =(event.target.id)
    var next= workholdgrid[($.inArray(t,workholdgrid)-1+ workholdgrid.length) % workholdgrid.length]
    $("#imghold").attr("src","images/galleryfolder/"+next+".jpg");

    $(".gallerybuttonsF").attr("id",next);
    $(".gallerybuttonsB").attr("id",next);    

  });


//      Forward through array of gallery name  var next= arrayName[($.inArray(t,arrayName)+1) % arrayName.length]
//      Backward through array of gallery name   var next= arrayName[($.inArray(t,arrayName)-1+ arrayName.length) % arrayName.length]


$("#galleryclose").click(function()
    {
    $("#galleryview").hide();
    $("#workhold").show();      
    });

// $("#logo1").click(function()
// {
// $("#titleholder").hide();
//     $(".noshow2").attr("class","foshow2");
//       $(".noshow1").attr("class","lfoshow");
//       $("#holdermainfirst").attr("id","holdermain1")
//       $(".workholdermain").attr("class","workholdermain1");
//       $("#for1").show();
// });

// $(document).scroll(function() {
//   var y = $(this).scrollTop();
//   if (y > 100) 
//   {

//     $(".noshow2").attr("class","foshow2");
//       $("#for1").show();
//   }
//   else
//     {
//       $("#titleholder").show();
//     $(".foshow2").attr("class","noshow2");
//       $("#for1").hide();
//     };

// });



// // _+++++++++++++++++++++++++++++++++++++++++++++++++drop menu

// $(".dropB").delay(2000)
//       .queue( function()
//         {
//           $(this).attr("class","drop");
//         });

// $(".dropdowngalleryB").delay(2000)
//       .queue( function()
//         {
//           $(this).attr("class","dropdowngallery")
//         });    

// $("#dropdown").click(function()
// {
//   $(".dropdowngallery").toggleClass("dropdowngalleryA");
//   $(".drop").toggleClass("dropA");

// });


// // ++++++++++++++++++++++++++++++++++++++++++++++scroll function for works

// $(".workholder").hide();


// $(document).scroll(function() {
//   var y = $(this).scrollTop();
//   if (y > 100) {
//     $(".infoholder").height(0);
//     // $("#titleholder").height(0);
//     $(".workholder").show();
//     $("#nikevid").show();
//   } else {
//     $(".infoholder").height(500);
//     // $("#titleholder").height(500);
//     $(".workholder").hide();
//     $("#nikevid").hide();

//   }
// });

// // {{}}}}}}}}deck card enlarge on click}________________________________________++++++++++++

// $(".playingcards").click(function larger(event)
// {
//   var b = (event.target)
//   var c = (event.target.id)
//   var c1 = $(b).attr("class")


//     $(".playingcards").fadeTo("slow",.0);
//     $(".playingcards").attr("class","playingcards1");
//     $("#enlarge").fadeTo("slow", 1);
//     $("#placehold").attr("src","works/cards/"+c+".jpg");
//     $("#forw").attr("id",c);
//     $("#backw").attr("id",c);
// });

// $("#closer").click(function(event)
// {
//     $(".playingcards1").attr("class","playingcards");
//     $(".playingcards").fadeTo("slow",1);  
//     $("#enlarge").hide();
//     $(".cardarrow").attr("id","forw");
//     $(".cardarrow1").attr("id","backw");
// });


// // next button
// $(".cardarrow").click(function(event)
//   {
//     var ncard= ["acespade","aceheart","aceclub","acediamond","card2",
// "card3","card4","card5","card6", "card7","card8","card9","card10","jackdiamond","jackspade","jackheart","jackclub","queendiamond","queenspade","queenheart","queenclub","kingdiamond","kingspade","kingheart","kingclub","jokered","jokerwhite","backd"]
//     var t =(event.target.id)
//     var next= ncard[($.inArray(t,ncard)+1) % ncard.length]

//     $("#placehold").attr("src","works/cards/"+next+".jpg");
//     $(".cardarrow").attr("id",next);
//     $(".cardarrow1").attr("id",next);
//   });

// // previous button
// $(".cardarrow1").click(function(event)
//   {
//     var ncard= ["acespade","aceheart","aceclub","acediamond","card2",
// "card3","card4","card5","card6", "card7","card8","card9","card10","jackdiamond","jackspade","jackheart","jackclub","queendiamond","queenspade","queenheart","queenclub","kingdiamond","kingspade","kingheart","kingclub","jokered","jokerwhite","backd"]
//     var t =(event.target.id)
//     var next= ncard[($.inArray(t,ncard)-1+ ncard.length) % ncard.length]

//     $("#placehold").attr("src","works/cards/"+next+".jpg");
//     $(".cardarrow1").attr("id",next);
//     $(".cardarrow").attr("id",next);
//   });

// // dropdown hover indicator desktop only.
// // triangle drops
// $(".subthumbs").hover(function(event)
// {
//   var h = event.target.id
//   $("#"+h).toggleClass("subthumbsA")
// });


// // homepage gallery
// // $(".squarethumbs").hover(function()
// // {
// //   var m = event.target.id
// //   $("#"+m).toggleClass("squarethumbsA")
// // });

// // bottom right nav bars

// $(".navbarbottO").hover(function(event)
// {
//   var b =event.target.id
//   $("#"+b).toggleClass("navbarbottA")
// });


// // extras ...
// $("#plus").click(function()
//   {
//     $.fn.scrollBottom = function() { 
//   return $(document).height() - this.scrollTop() - this.height(); 
// };
//     $(".extras").toggleClass("extras1");
//     $(".plus1").toggleClass("plus1A");
//     $(".pagebott").toggleClass("pagebott1");
//     $(".pagebottL").toggleClass("pagebott1L");
//     $(window).scrollBottom();
//   });

// // intro



//  setInterval(function(myfunc)
//  {
//  var likes= [
//  "I draw & dream.",
//  "I dream of action figures & robots.",
//  "I loop gifs & arrays.",
//  "I cross contour lines & wireframes.",
//  "I wonder then I try.", 
//  "I believe in Michelangelo & Zero Cool.",
//  "I color packaging & divs.",
//  "I map data & polygons.",
//  "I transform with keyframes & keyboards.",
//  "I believe in grains & pixels.",
//  "I design functionality & functions().",
//  "I am five feet and nine inches tall.",
// "I speak tagalog.",
// "I punctuate with color & sound.",

//  ];
 
//  var colors1 = Math.floor(Math.random() * 255)+ 0  ;
//   var colors2 = Math.floor(Math.random() * 150)+ 0  ;
//    var colors3 = Math.floor(Math.random() * 255)+ 0  ;

// var t= Math.floor(Math.random() * 13) + 1  ;
// var showme = likes[t];
//     $("#stuff")
//       .delay(2500).fadeOut(500)
//       .queue( function(next)
//       { 
//       $(this).html(showme); 
//       $(this).css("color","rgb(0,"+colors2+","+colors3+")");
//         next(); 
//       }).delay(2500).fadeIn(500);
//       });


// // gallery SCROLL TAB FUNCTION red when on screen 




// $('#thumbggraph').bind('inview', function (event,jagA) {
//     if (jagA) 
//     {
//         $('#ggbott').attr('class','navbarbottA');
        
//     } else 
//     {
//         // do something here with invisible
//         $('#ggbott').attr('class','navbarbott');
//     }
// });

// $('#thumbjcas').bind('inview', function (event,jagB) {
//     if (jagB) 
//     {
//         $('#jcasbott').attr('class','navbarbottA');
        
//     } else 
//     {
//         // do something here with invisible
//         $('#jcasbott').attr('class','navbarbott');
//     }
// });

// $('#thumbghost').bind('inview', function (event,jagC) {
//     if (jagC) 
//     {
//         $('#ghostbott').attr('class','navbarbottA');
        
//     } else 
//     {
//         // do something here with invisible
//         $('#ghostbott').attr('class','navbarbott');
//     }
// });

// $('#thumbmomath').bind('inview', function (event,jagD) {
//     if (jagD) 
//     {
//         $('#momathbott').attr('class','navbarbottA');
        
//     } else 
//     {
//         // do something here with invisible
//         $('#momathbott').attr('class','navbarbott');
//     }
// });


// $('#thumbseas').bind('inview', function (event,jagE) {
//     if (jagE) 
//     {
//         $('#sstbott').attr('class','navbarbottA');
        
//     } else 
//     {
//         // do something here with invisible
//         $('#sstbott').attr('class','navbarbott');
//     }
// });


// $('#thumbjack').bind('inview', function (event,jagF) {
//     if (jagF) 
//     {
//         $('#bauerbott').attr('class','navbarbottA');
        
//     } else 
//     {
//         // do something here with invisible
//         $('#bauerbott').attr('class','navbarbott');
//     }
// });


// $('#thumboly').bind('inview', function (event,jagG) {
//     if (jagG) 
//     {
//         $('#olybott').attr('class','navbarbottA');
        
//     } else 
//     {
//         // do something here with invisible
//         $('#olybott').attr('class','navbarbott');
//     }
// });


// $('#thumbdeck').bind('inview', function (event,jagH) {
//     if (jagH) 
//     {
//         $('#deckbott').attr('class','navbarbottA');
        
//     } else 
//     {
//         // do something here with invisible
//         $('#deckbott').attr('class','navbarbott');
//     }
// });


// $('#thumbnike').bind('inview', function (event,jagI) {
//     if (jagI) 
//     {
//         $('#nikebott').attr('class','navbarbottA');
        
//     } else 
//     {
//         // do something here with invisible
//         $('#nikebott').attr('class','navbarbott');
//     }
// });




//   $('#contact').click(function (event) 
//   {
//       event.preventDefault();
//     var email = 'josequizon@jcqfolio.com';
//     var subject = 'Hi Jose!';

//     window.location = 'mailto:' + email + '?subject=' + subject;
//   });



});