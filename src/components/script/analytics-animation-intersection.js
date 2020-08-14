function analyticsAnimationCallback() {
	var elem = document.getElementById('Top_Box_1_fill_width');
	var parentElem = document.getElementById('Web_Analytics_Solutions_Animated');
	var lastAnimationElem = document.getElementById('Pie_Large_with_Label_turn_opaque');
	lastAnimationElem.onend = () => document.getElementById('Web_Analytics_Solutions_Animated').classList.remove('on');
	if(!parentElem.classList.contains("on")){
		parentElem.classList.add("on");
		elem.beginElement();
	}
}

var options = {
	root: document.querySelector('#Web_Analytics_Solutions_Animated'),
	rootMargin: '0px',
	threshold: 0.4
}

var observer = new IntersectionObserver(analyticsAnimationCallback, options);