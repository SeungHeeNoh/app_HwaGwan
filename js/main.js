$(document).ready(function(){
    var now = new Date();
    var exp = [0, 0, 0];
    
    function dateUpdate(){
        for(var j=0; j<$("article").length; j++){
            var a = "#contents > article:nth-of-type("+(j+1)+")";
            var result = '';
            
            for(var i=0; i <= 2; i++){
                exp[i] = $(a + " > ul > li:nth-of-type(3) > span").eq(i).text();
            }
            var then = new Date(exp[0], exp[1]-1, exp[2]);
            var distance = then - now;
            var gap = Math.floor(distance/(1000*60*60*24));
			console.log(distance, gap);
            if(gap < 0){
                result = "사용불가";
            }else if(gap === 0){
                result = "D-day";
            }else{
                result = "D-" + gap;
            }
            $(a + " > ul > li:last-of-type").html(result);
            
        }
    }
    dateUpdate();
    
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
		console.log("a");
		e.preventDefault();
		$(".modal").removeClass("on");
	});
	
	$(".slideMenu > nav > ul > li > a").click(function(){
		$(".slideMenu > nav > ul > li").not(":first-of-type").children("a").css("border-top", "none");
		$(".slideMenu > nav > ul > li").removeClass("on");
		if($(this).parent().hasClass("clicked")){
			$(this).parent().removeClass("clicked");
		}else{
			$(this).parent().addClass("on");
			$(this).parent().addClass("clicked");
			$(this).parent().next().children("a").css("border-top","1px solid rgba(255, 255, 255, 0.2)");
		}
	});
});