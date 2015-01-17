// Register
var Register = function() {
    this.keyStore = [];
};
Register.prototype.addKey = function addKey(key) {
    console.debug('register adding key: '+ key);
    this.keyStore.push(key);
};
Register.prototype.getKeys = function getKeys() {
    return this.keyStore.join('');
};

// Decider
var Decider = function() {
};
/**
 * @param letters string
 * @param word that most closely resembles
 */
Decider.prototype.decide = function(letters) {
};

// KeyboardView
var KeyboardView = function(register) {
    var self = this;
    this.register = register;

    var tKeyElement = document.getElementById('t-key');
    var rKeyElement = document.getElementById('r-key');
    var eKeyElement = document.getElementById('e-key');
    var sKeyElement = document.getElementById('s-key');

    var pressedKeys = [];
    function pressKey(key) {
        pressedKeys[key] = true;
    }
    function addPressedKeysToRegister() {
        for (key in pressedKeys) {
            if (pressedKeys.hasOwnProperty(key)) {
                self.register.addKey(key);
            }
        }
    }

    tKeyElement.ondragstart = function() {
        console.debug('t-dragstart');
        pressKey('t');
    };

    rKeyElement.ondrag = function() {
        console.debug('r-drag');
        pressKey('r');
    };

    eKeyElement.ondrag = function() {
        console.debug('e-drag');
        pressKey('e');
    };
    eKeyElement.ondragend = function() {
        console.debug('e-dragend');
        pressKey('e');
        addPressedKeysToRegister();
    };

    sKeyElement.ondragend = function() {
        console.debug('s-dragend');
        pressKey('s');
        addPressedKeysToRegister();
    };

};

// Suggestion
var SuggestionView = function(register, decider) {
    var self = this;
    this.register = register;
    this.decider = decider;

    var suggestionElement = document.getElementById('suggestion');
    var paragraphElement = document.getElementById('paragraph');
    suggestionElement.onclick = function() {
        //var word = someSortOfDecider.decide(this.register.getKeys());
        var letters = self.register.getKeys();
        console.debug(letters);
        if (letters == 'tre') {
            paragraphElement.innerHTML = 'tree';
        }
        else if (letters == 'tres') {
            paragraphElement.innerHTML = 'trees';
        }
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
    var keyboard = new KeyboardView(register);
    var suggestion = new SuggestionView(register);
    var app = new App(element, keyboard, suggestion);
};

window.Wallop = wallop;