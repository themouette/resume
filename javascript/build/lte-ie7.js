/*! themouette-resume - v0.0.1 - 2013-04-21 */window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-calendar' : '&#xe001;',
			'icon-star' : '&#xe000;',
			'icon-star-2' : '&#xe002;',
			'icon-star-3' : '&#xe003;',
			'icon-office' : '&#xe004;',
			'icon-article' : '&#xe005;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};