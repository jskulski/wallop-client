var assert = buster.assert;

var template = '' +
	'<button id="t-key">t</button>' +
	'<button id="r-key">r</button>' +
	'<button id="e-key">e</button>' +
	'<button id="s-key">s</button>' +
	'<button id="suggestion">Suggestion</button>' +
	'<div id="paragraph"></div>';

buster.testCase("End-to-end application", {

	setUp: function() {
		var container = document.createElement('div');
		container.id = 'container';
		var body = document
			.getElementsByTagName('body')[0]
			.appendChild(container);
		var cont = document.getElementById('container');
		cont.innerHTML = template;

		var mock = document.getElementById('dom-mock');
		var wallop = new Wallop(mock);
	},

	tearDown: function() {
		var container = document.getElementById('container');
		container.innerHTML = '';
	},

	"can swipe 'tre' and get 'tree'": function() {
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
		console.log(paragraphText);
		var paragraphContainsTree = paragraphText == 'tree';
		assert.isTrue(paragraphContainsTree);
	},

	"can swipe 'tres' and get 'trees'": function() {
		var tKey = document.getElementById('t-key');
		var rKey = document.getElementById('r-key');
		var eKey = document.getElementById('e-key');
		var sKey = document.getElementById('s-key');

		var dragStartEvent = new Event('dragstart');
		var dragEvent = new Event('drag');
		var dragEndEvent = new Event('dragend');

		tKey.dispatchEvent(dragStartEvent);
		rKey.dispatchEvent(dragEvent);
		eKey.dispatchEvent(dragEvent);
		sKey.dispatchEvent(dragEndEvent);

		var suggestion = document.getElementById('suggestion');
		var clickEvent = new Event('click');
		suggestion.dispatchEvent(clickEvent);

		var paragraphElement = document.getElementById('paragraph');
		var paragraphText = paragraphElement.innerHTML;
		console.log(paragraphText);
		var paragraphContainsTree = paragraphText == 'trees';
		assert.isTrue(paragraphContainsTree);
	}

});