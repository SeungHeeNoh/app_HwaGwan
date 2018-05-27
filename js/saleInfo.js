$(document).ready(function(){
	$(".srchIcon").click(function(e){
		e.preventDefault();
        $(".srchBox").toggleClass("on");
    });
	$(".close > a").click(function(e){
		console.log("a");
		e.preventDefault();
		$(".modal").removeClass("on");
	});
});