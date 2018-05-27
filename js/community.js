$(document).ready(function(){
	$(".menuBtn").click(function(e){
        e.preventDefault();
        $(".modal").toggleClass("on");
        $(".slideMenu").animate({"left":"0"}, 500, "linear");
    });
    $(".srchIcon").click(function(e){
		e.preventDefault();
        $(".srchBox").toggleClass("on");
    });
	$(".close > a").click(function(e){
		e.preventDefault();
		$(".modal").removeClass("on");
	});
});