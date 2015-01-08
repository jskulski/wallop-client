// Register
var Register = function() {
    this.keyStore = [];
};
Register.prototype.addKey = function addKey(key) {
    this.keyStore.push(key);
};
Register.prototype.getKeys = function getKeys() {
    return this.keyStore.join('') + 'e';
};

// Keyboard
var Keyboard = function(register) {
    this.register = register;

    var tKeyElement = document.getElementById('t-key');
    var rKeyElement = document.getElementById('r-key');
    var eKeyElement = document.getElementById('e-key');

    tKeyElement.ondragstart = this.register.addKey('t');
    rKeyElement.ondrag = this.register.addKey('r');
    eKeyElement.ondragend = this.register.addKey('e');
};

// Suggestion
var Suggestion = function(register) {
    var self = this;
    this.register = register;

    var suggestionElement = document.getElementById('suggestion');
    var paragraphElement = document.getElementById('paragraph');
    suggestionElement.onclick = function() {
        paragraphElement.innerHTML = self.register.getKeys();
    }
};

// App
var App = function(element, keyboard, suggestion) {
    var self = this;
    this.element = element;
    this.keyboard = keyboard;
    this.suggestion = suggestion;
};

// Wallop
var wallop = function Factory(element) {
    var register = new Register();
    var keyboard = new Keyboard(register);
    var suggestion = new Suggestion(register);
    var app = new App(element, keyboard, suggestion);
};

window.Wallop = wallop;