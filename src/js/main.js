// tabs

$(".tabs-content__item").not(":first").hide();
$(".vote-tabs .tabs-list__item").click(function() {
	$(".vote-tabs .tabs-list__item").removeClass("active").eq($(this).index()).addClass("active");
	$(".tabs-content__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
