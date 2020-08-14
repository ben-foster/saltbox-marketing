function seoAnimationCallback() {
	var elem = document.getElementById('Client_Search_Result_pull_out');
	var parentElem = document.getElementById('SEO_Animated');
	var lastAnimationElem = document.getElementById('Client_Sitelink_Extensions_turn_opaque');
	lastAnimationElem.onend = () => document.getElementById('SEO_Animated').classList.remove('on');
	if(!parentElem.classList.contains("on")){
		parentElem.classList.add("on");
		elem.beginElement();
	}
}

var options = {
	root: document.querySelector('#SEO_Animated'),
	rootMargin: '0px',
	threshold: 0.4
}

var observer = new IntersectionObserver(seoAnimationCallback, options);