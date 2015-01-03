// Register
var Register = function() {
    this.keyStore = [];
};
Register.prototype.addKey = function addKey(key) {
    this.keyStore.push(key);
};
Register.prototype.getKeys = function getKeys() {
    return this.keyStore.join('') + 'e';
}

// App
var App = function(element, register) {
    var self = this;
    this.element = element;
    this.register = register;

    var suggestionElement = document.getElementById('suggestion');
    var paragraphElement = document.getElementById('paragraph');

    var tKeyElement = document.getElementById('t-key');
    var rKeyElement = document.getElementById('r-key');
    var eKeyElement = document.getElementById('e-key');

    tKeyElement.ondragstart = this.register.addKey('t');
    rKeyElement.ondrag = this.register.addKey('r');
    eKeyElement.ondragend = this.register.addKey('e');

    suggestionElement.onclick = function() {
        paragraphElement.innerHTML = self.register.getKeys();
    }
};

// Wallop
var wallop = function Factory(element) {
    var app = new App(element, new Register());
};

window.Wallop = wallop;