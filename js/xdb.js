$(document).ready(function() 
{

var charnames = [ 
"banshee","professorx","professorx","marvelgirl","marvelgirl", "phoenixforce","rachelsummers","rachelsummers","rachelsummers", "angel","angel","psylocke", "psylocke", "psylocke", "beast","beast","beast","beast","beast","beast","dazzler","moiramactaggert","moiramactaggert","moiramactaggert","moiramactaggert","moiramactaggert","moiramactaggert","moiramactaggert","moiramactaggert","moiramactaggert","amandasefton","amandasefton","amandasefton","amandasefton","sunder","legion","sharonfriedlander","tomcorsi", "tomcorsi","alysandestuart","multipleman","multipleman","multipleman","multipleman","siryn","siryn","siryn","jubilee","gambit","gambit","bishop", "cannonball","cannonball","cannonball","ceciliareyes","ceciliareyes","cable","nealshaara","moonstar","moonstar","moonstar","moonstar","northstar","frenzy","omerta","whitequeen","whitequeen","whitequeen","chamber","chamber","chamber","sunpyre","sunpyre","stacyx","stacyx","stacyx","lifeguard","slipstream","husk","juggernaut","fantomex","fantomex","eva","eva","eva","beak","beak","dust","stepfordcuckoos","stepfordcuckoos","stepfordcuckoos","stepfordcuckoos","stepfordcuckoos","stepfordcuckoos","shenxorn","mystique","vulcan","darwin","cyclops","sway","warpath","warpath",
"warpath","ladymastermind","ladymastermind","omegasentinel","omegasentinel","sabretooth","armor","armor","pixie","karma","sunspot","sunspot","aurora","magma","magma","madisonjeffries","drnemesis","drnemesis","drnemesis","magik","namor","namor","danger","domino","cloak","dagger","x23","x23","x23","hopesummers","warbird","firestar","firestar","iceman","iceman","m","forgetmenot","colossus","colossus","magneto","magneto","nightcrawler","rogue","polaris","shadowcat","shadowcat","changeling","havok","wolverine","wolverine","storm","sunfire","thunderbird",
"krakoa","ariel","doop","hepzibah","longshot","petra","forge","lockheed","mimic","multiple man","phoenix","rachel summers","revanche","xorn","wraith","sage","skrull","maggott","marrow","joseph"

];

var charnames2 = [
"sean cassidy","professor x","charles xavier","jean grey","marvel girl","phoenix force","rachel summers","rachel grey","phoenix","archangel","warren kenneth worthington iii", "betsy braddock", "elizabeth braddock", "elizabeth betsy braddock","henry mccoy","hank mccoy","dr. hank mccoy","dr. henry mccoy","henry hank mccoy","hank philip mccoy","alison blaire","moira mactaggert","moira mactaggart", "moira mctaggert","moira mctaggart","dr. moira mactaggert","dr. moira mactaggart", "dr. moira mctaggert","dr. moira mctaggart","moira kinross mctaggert","amanda sefton","jimaine szardos","daytripper","second magik","mark hallett","david charles haller","sharon friedlander","thomas corsi","tom corsi","alysande stuart","multiple man","james jamie madrox","jamie madrox","james madrox", "theresa maeve rourke cassidy","theresa cassidy","theresa rourke cassidy","jubilation lee","remy lebeau","remy etienne lebeau","lucas bishop","sam guthrie","samuel guthrie","samuel zachary guthrie","cecilia reyes","dr. cecilia reyes","nathan summers","neal shaara","danielle moonstar","psyche","mirage","dani moonstar","jean paul beaubier","joanna cargill","paul provenzano","white queen","emma frost","emma grace frost","jono starsmore","jonothon starsmore","jonothon evan starsmore","leyu yoshida","yoshida reyu","stacy x","ripcord","miranda leevald","heather cameron",
"davis cameron","paige guthrie","cain marko","charlie cluster 7","jean phillipe","e.v.a","eva bell","eva","blackwing","barnell bohusk","sooraya qadir","stepford cuckoos","celest cuckoo","esme cuckoo","irma cuckoo","phoebe cuckoo","sophie cuckoo","shen xorn","raven darkholme","gabriel summers","armando munoz","scott summers","suzanne chan","james proudstar","thunderbird 2","thunderbird ii","regan wyngarde","lady mastermind","karima shapandar","omega sentinel","victor creed","hichako isaki","isaki hichako","megan gwyn","xian coy manh","bobby da costa","robert da costa",
"jeanne marie beaubier","amara aquilla","alison crestmere","madison jeffries","dr. nemesis","doctor nemesis","james bradley","illyana rasputin","namor","namor the submariner","danger room","neena thurman","tyrone johnson","tandy bowen","laura kinney","x 23","x-23","hope summers","ava'dara naganandini","angelica jones","angel jones","bobby drake","robert drake","monet st. croix","forget me not","piotr nikolaievitch rasputin","piotr rasputin","erik lensherr","max eisenhardt","kurt wagner","anna marie","lorna dane","kitty pryde","katherine pryde","kevin sydney","alex summers","logan howlett","james howlett","ororo monroe","shiro yoshida","john proudstar",

]

function namer()
	{	
		charnames

		var x = $("#charnames").val().toLowerCase();
		// var x = document.getElementById("charnames").value;

		$("#datacontain").fadeOut(200);
	 	$("#info").animate({height: "0px",width: "0px"},200);
	 	$("#firstapp").animate({height: "0",width:"0px"},200);
		$("#pic").fadeOut(100);
		$("#pic").animate({height: "50px",width: "50px"},225);
		$("#marquee").animate({ marginTop: "206px",marginLeft: "21px"},200);
		$("#xlogo").fadeOut(300);
		$("#pic").attr("src","placeholder.png")
		$("#pic").fadeIn(100);
		$("#pic").animate({height: "300px",width: "300px"},200);
		$("#marquee").animate({ marginTop: "303px",marginLeft: "60px"},200);


//  below only happens if the name is correct. therefore the place holder image hidden by the x logo is always saying ERROR. BUT if it's 
// not an error then below happens. this solves the error message for the user who uses wrong name. w/o having to run error message
// at end of loop.

// multiple word names are to be placed in charnames2 array and renamed in charnames in one word. files to be called img's and txt are one word
// as well.

     for (var t = 0; t <= charnames.length; t++)
     for (var v = 0; v <= charnames2.length; v++)	

	 if (charnames2[v] === x)
	 	{ 
	 		$("#pic").attr("src","profilepic/"+charnames[v]+".png");
	 		$("#cover").attr("src","covers/"+charnames[v]+".jpg");
	 		$("#info2").css("right","0px","top", "0px");
	 		$("#datacontain").fadeIn(200);
	 		$("#info").animate({height: "500px",width: "400px"},200);
	 		$("#firstapp").animate({height: "500px",width:"400px"},200);
	 		$("#info2").load("info/"+charnames[v] +".txt");
	 		$("#info2").draggable({ axis: "y" });$("#info2").css("left","0px","top", "0px");
	 	}
	 else if (charnames[t] === x)
	 	{
	 		$("#pic").attr("src", "profilepic/"+charnames[t]+".png");
	 		$("#cover").attr("src","covers/"+charnames[t]+".jpg");
	 		$("#info2").css("right","0px","top", "0px");
	 		$("#datacontain").fadeIn(200);
	 		$("#info").animate({height: "500px",width: "400px"},200);
	 		$("#firstapp").animate({height: "500px",width:"400px"},200);
	 		$("#info2").load( "info/"+charnames[t] +".txt");
	 		$("#info2").draggable({ axis: "y" });	 		$("#info2").css("left","0px","top", "0px");
	 	};

	 $("#charnames").val("");

	 // var e = charnames2[v];
	 // var f = charnames[t]

	 // function qualifier1 (e, x)
	 // {
	 // 	return e == x
	 // };

	 // function qualifier2 (f, x)
	 // {
	 // 	return f == x
	 // };
		// var boo = qualifier1(e,x)
		// var lean = qualifier2(f,x)

	 // if (  boo = false)
	 // {
	 // 	alert("wrong")
	 // }
	 // else if (  lean = false)
	 // {
	 // 	alert("wrong")
	 // };


		};
function setter()
{
	$("#info2").css("right","0px","top", "0px")
};

$("#top").click(setter);

// Create reset button

function modalreset()
	{
		$("#datacontain").fadeOut(200);
	 	$("#info").animate({height: "0px",width: "0px"},200);
	 	$("#firstapp").animate({height: "0",width:"0px"},200);
	 	$("#pic").fadeOut(100);
		$("#pic").animate({height: "50px",width: "50px"},100);
	 	$("#xlogo").animate({height: "50px",width: "50px"},10).fadeIn(100).animate({height: "200px",width: "200px"},200);
	 	$("#marquee").animate({ marginTop: "206px",marginLeft: "21px"},100);
	}

$("#pushbutt").click(namer);
$("#closer").click(modalreset);
$("#pic").click(modalreset);


$("#charnames").keypress(function(e) 
				{
    				if(e.which == 13) 
    				{
       					 $("#pushbutt").click();
    				}
				});


// var x = "jose is my name";
// console.log(x);
// var d = 6
// function fe(d){return(d+2-5)}
// console.log(fe(6));

// var i=0
// for (i=0;i<=101;i+=1)
// 	if (i%5===0 && i%3===0){console.log("FizzBuzz")}
// 	else if (i%5===0) {console.log("buzz")}
// 	else if (i%3===0){console.log("fizz")}
// 	else{console.log(i)}


});