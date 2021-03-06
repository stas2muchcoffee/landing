// tabs and accordeon
if (matchMedia) {
	const mq = window.matchMedia("(min-width: 601px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
  }

   function WidthChange(mq) {
	if (mq.matches) {

	// window width is at least 601px
	// tabs
		$(".tabs-content__item").not(":first").hide();
		$(".vote-tabs .tabs-list__item").click(function() {
			$(".vote-tabs .tabs-list__item").removeClass("active").eq($(this).index()).addClass("active");
			$(".tabs-content__item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");
	} else {
	// window width is less than 601px
	// accordeon
		
		const tabsItem = document.getElementsByClassName('tabs-list__item');
		const contentItem = document.getElementsByClassName('tabs-content__item');

		let arrContentItem = [...contentItem];
		let arrTabsItem = [...tabsItem];
		let accoList = document.querySelector('.tabs-list');

		for (let i = 0; i < arrContentItem.length; i++) {
			arrContentItem[i].classList.remove('tabs-content__item');
			arrContentItem[i].classList.add('tabs-list__text');
		}
		for (let i = 0; i < arrTabsItem.length; i++) {
			arrTabsItem[i].classList.remove('tabs-list__item');
			arrTabsItem[i].classList.add('tabs-list__acco');
		}
		let accoListItem = document.querySelectorAll('.tabs-list__acco');	
		for (let i = 0; i < accoListItem.length; i++) {
			accoListItem[i].appendChild(arrContentItem[i]);
		}
		accoList.firstElementChild.classList.add('active');

		function addClass (e) {
			$('.tabs-list__acco').removeClass('active');
			$(e.target).addClass('active');
		}

		for (let i = 0; i < accoListItem.length; i++) {
			accoListItem[i].addEventListener('click', addClass); 
		}
	}
}

// slider

  $(function($){
    $('.owl-carousel').owlCarousel({
		loop:true,
		center: true,
		margin:200,
		autoWidth: true,
		stagePadding: 300,
		startPosition: 2,	
		dots:false,
		smartSpeed: 500,
        responsive:{
            0:{
				items:1,
				margin:150,
				stagePadding: 90,
			},
			
			321:{
				items:1,
				margin:200,
				stagePadding: 130,
			},
			
            601:{
				margin:130,
				stagePadding: 90,
            },
            900:{
				margin:150,
				stagePadding: 200,	
			},
			1200:{
				margin:200,
				stagePadding: 300,
            }
        }
    })

//переназначаем кнопки по умолчанию

var owl = $(".owl-carousel");
owl.owlCarousel();
$(".slider-controls__next").click(function(){
    owl.trigger("next.owl.carousel");
});
$(".slider-controls__prev").click(function(){
    owl.trigger("prev.owl.carousel");
});

});