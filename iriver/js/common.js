// JavaScript Document

$(function(){ // 문서가 열렸을때 실행

	$('.gnb > li').mouseenter(function(){ // .topmenu 자식 li를 마우스 오버했을때
		// this = .topmenu의 자식 li중에서 현재 마우스 오버한 대상
		$(this).children().children('img').attr('src',$(this).children().children('img').attr('src').replace('.gif','_on.gif'))
		// 마우스 오버하고 있는 li의  자식, 자식 중에서 img태그 선택 , attr(속성) src의 값을  replace(변경) .gif찾아서 _on.gif로 변경
	});
	
	$('.gnb > li').mouseleave(function(){ // .topmenu 자식 li를 마우스 아웃했을때
		$(this).children().children('img').attr('src',$(this).children().children('img').attr('src').replace('_on.gif','.gif'))
	});




	$("#main_slider").slick({
		dots: false, //네비게이션 사용여부
		arrows: true, //화살표 사용여부
		prevArrow: $('.prev'), //이전 화살표
		nextArrow: $('.next'), //다음 화살표
		autoplay:true, //자동넘김
		autoplaySpeed: 2000, //자동넘김 속도
		fade: true, //fade 모드 사용여부 슬라이드 1개일때만 가능
		speed: 900, // 슬라이드 속도
		centerPadding: '0%', //센터 모드 시 여백
		slidesToShow: 1, //보여질 슬라이드 갯수
		slidesToScroll: 1, //넘겨질 슬라이드 갯수
		swipe: false, //스와이프
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
		variableWidth: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					swipe: true, //스와이프
				}
			}]



	});








});

