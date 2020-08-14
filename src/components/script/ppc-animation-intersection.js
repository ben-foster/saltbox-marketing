function ppcAnimationCallback() {
	var elem = document.getElementById('Organic_Results_translate');
	var parentElem = document.getElementById('PPC_Animated');
	var lastAnimationElem = document.getElementById('Ad_Indicator_turn_opaque');
	lastAnimationElem.onend = () => document.getElementById('PPC_Animated').classList.remove('on');
	if(!parentElem.classList.contains("on")){
		parentElem.classList.add("on");
		elem.beginElement();
	}
}

var options = {
	root: window.document.querySelector('#PPC_Animated'),
	rootMargin: '0px',
	threshold: 0.4
}

var observer = new IntersectionObserver(ppcAnimationCallback, options);