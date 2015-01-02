var assert = buster.assert;

buster.testCase("Test harness", {

	"can run end-to-end tests": function() {
		assert.equals(true, true);
	}

});

buster.testCase("End-to-end application", {

	"can swipe 'tre' and get 'tree'": function() {
		function getKeyDOMElement(key) {
			return document.getElementById(key);
		}

		var tKey = getKeyDOMElement('t');
		var rKey = getKeyDOMElement('r');
		var eKey = getKeyDOMElement('e');

		var dragStartEvent = new Event('dragstart');
		var dragEvent = new Event('drag');
		var dragEndEvent = new Event('dragend');
		var clickEvent = new Event('click');

		tKey.dispatchEvent(dragStartEvent);
		rKey.dispatchEvent(dragEvent);
		eKey.dispatchEvent(dragEndEvent);

		var paragraphContainsTree = paragraphText.indexOf('tree') > -1;
		assert.isTrue(paragraphContainsTree);
	}

});