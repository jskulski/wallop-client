var assert = buster.assert;

var template = '' +
	'<button id="t-key">t</button>' +
	'<button id="r-key">r</button>' +
	'<button id="e-key">e</button>' +
	'<button id="suggestion">Suggestion</button>' +
	'<div id="paragraph"></div>';

buster.testCase("End-to-end application", {

	"can swipe 'tre' and get 'tree'": function() {
		var container = document.createElement('div');
		container.className = 'container';
		var body = document
					.getElementsByTagName('body')[0]
					.appendChild(container);
		var cont = document.getElementsByClassName('container')[0];
		cont.innerHTML = template;

		var tKey = document.getElementById('t-key');
		var rKey = document.getElementById('r-key');
		var eKey = document.getElementById('e-key');

		var dragStartEvent = new Event('dragstart');
		var dragEvent = new Event('drag');
		var dragEndEvent = new Event('dragend');

		tKey.dispatchEvent(dragStartEvent);
		rKey.dispatchEvent(dragEvent);
		eKey.dispatchEvent(dragEndEvent);

		var suggestion = document.getElementById('suggestion');

		var clickEvent = new Event('click');
		suggestion.dispatchEvent(clickEvent);

		var paragraphElement = document.getElementById('paragraph');
		var paragraphText = paragraphElement.innerHTML;
		var paragraphContainsTree = paragraphText.indexOf('tree') > -1;
		assert.isTrue(paragraphContainsTree);
	}

});