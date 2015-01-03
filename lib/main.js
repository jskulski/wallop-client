var register = [];

function addKey(key) {
    register.push(key);
}

var wallop = function(element) {
    this.element = element;

    var suggestionElement = document.getElementById('suggestion');
    var paragraphElement = document.getElementById('paragraph');

    var tKeyElement = document.getElementById('t-key');
    var rKeyElement = document.getElementById('r-key');
    var eKeyElement = document.getElementById('e-key');

    tKeyElement.ondragstart = addKey('t');
    rKeyElement.ondrag = addKey('r');
    eKeyElement.ondragend = addKey('e');

    suggestionElement.onclick = function() {
        paragraphElement.innerHTML = register.join('') + 'e';
    }
};

window.Wallop = wallop;