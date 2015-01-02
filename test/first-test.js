var assert = buster.assert;

buster.testCase("Test harness", {

	"can run end-to-end tests": function() {
		assert.equals(true, true);
	}

});

buster.testCase("End-to-end application", {

	"can swipe 'tre' and get 'tree'": function() {
		function getKeyDOMElement(key) {
			return document.getElementById(key +'-key');
		}

		var tKey = getKeyDOMElement('t');
		var rKey = getKeyDOMElement('r');
		var eKey = getKeyDOMElement('e');

		var dragStartEvent = new Event('dragstart');
		var dragEvent = new Event('drag');
		var dragEndEvent = new Event('dragend');

		rKey.dispatchEvent(dragEvent);
		eKey.dispatchEvent(dragEndEvent);

		var suggestion = document.getElementById('suggestion');

		var clickEvent = new Event('click');
		suggestion.dispatchEvent(clickEvent);

		var paragraphContainsTree = paragraphText.indexOf('tree') > -1;
		assert.isTrue(paragraphContainsTree);
	}

});