(function(){

	$('.box1Pg4').on('click', function(){
		var pg = $(this).data('page');
		PageTransitions.nextPage({ animation: 28, showPage: pg });
	});

	setTimeout(function(){
		$('.element1').addClass('animated fadeIn');
		$('.element2').addClass('animated fadeIn');
	}, 1000);


})();

function closeAtEnd(elems) {
    var ifr = elems.popup.find('iframe').get(0);
    var player = new Vimeo.Player(ifr);
    player.on('ended', function() {
        setTimeout(function(){
            elems.popup.remove();
        }, 200);
    });
}

$('.fire-popup-video').on('click', function() {
    var $this = $(this);

    var urlVideo = $this.data('vid');
    if (urlVideo) {
        $.popup({
        	youtubeID: urlVideo, 
        	target: $('.full-template'),
        	onLoad: function(elems) { closeAtEnd(elems); } 
        });
    }
});


$('.fire-popup').on('click', function(event) {
	var $this = $(this),
        idPop = $this.data('pop');

    if (idPop) {
        $.popup({
            id : idPop, 
            target: $('.full-template')
        });        
    }

    $('.lnt-popup-content').attr('style', 'height:450px');
});

PageTransitions.loadedPage('pt-page-2', false, function(page){
	var bx = page.find('.boxesp2');

	$('.pointsP2').on('click', function(){
		var strData = $(this).data('bx');
		if (strData == "1"){
			var data = [strData];
		} else {
			var data = strData.split(",");			
		}

		for (var i = 0; i < data.length; i++){
			$("div[data-box='"+data[i]+"']").css('opacity', '1');
		}
	});
	
});



PageTransitions.loadedPage('pt-page-4', false, function(page){
	$('.box1Pg4').on('mouseover', function(event) {
		var id = $(this).attr('id');

		switch(id){
			case "boxPg4_1":
				$('#box2Pg4_4').css('opacity', '1').addClass('animated fadeIn');
			break;
			case "boxPg4_2":
				$('#box2Pg4_5').css('opacity', '1').addClass('animated fadeIn');
			break;
			case "boxPg4_3":
				$('#box2Pg4_6').css('opacity', '1').addClass('animated fadeIn');
			break;
		}
	});
});

PageTransitions.loadedPage('pt-page-8', true, function(page){
	$('.customImg').css('display', 'block');
});
PageTransitions.leavedPage('pt-page-8', true, function(page){
	setTimeout(function(){
		$('.customImg').css('display', 'none');
	}, 500);
});


PageTransitions.loadedPage('pt-page-9', false, function(page){
	$('.tAction').one('mouseover', function(){
		$(this).next('ul').css('opacity', '1');
	});
});

PageTransitions.loadedPage('pt-page-10', false, function(page){
	$('.flecha').one('click', function(event) {
		$('.customCol').css('opacity', '1');
		$(this).removeClass('slideInLeft');
	});
});
PageTransitions.loadedPage('pt-page-10', true, function(page){
	$('.flecha').css('opacity', '1');
	setTimeout(function(){
		$('.customCol').css('display', 'block');
	}, 500);
});
PageTransitions.leavedPage('pt-page-10', true, function(page){
	$('.flecha').css('opacity', '0');
	setTimeout(function(){
		$('.customCol').css('display', 'none');
	}, 500);
});

var pgimg = 1;
PageTransitions.loadedPage('pt-page-11', false, function(page){

	$('.arrows').on('click', function(event) {
		var move = $(this).data('move');
		

		if (move == 'p') {
			pgimg++;
			$('.slide').css('opacity', '0');
			if (pgimg == 6){
				pgimg = 1;
				$('#slide'+pgimg).css('opacity', '1');
			} else {
				$('#slide'+pgimg).css('opacity', '1');
			}
		} else {
			pgimg--;
			$('.slide').css('opacity', '0');
			if (pgimg == 0){
				pgimg = 6;
				$('#slide'+pgimg).css('opacity', '1');
			} else {
				$('#slide'+pgimg).css('opacity', '1');
			}
		}
	});
});
PageTransitions.loadedPage('pt-page-11', true, function(page){
	setTimeout(function(){
		$('.viewer').css('display', 'block');
	}, 500);
});
PageTransitions.leavedPage('pt-page-11', true, function(page){
	setTimeout(function(){
		$('.viewer').css('display', 'none');
	}, 500);
});