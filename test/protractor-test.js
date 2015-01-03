
var connect = require('connect');
var serveStatic = require('serve-static');

beforeEach(function() {
    connect().use(serveStatic(__dirname +'/../public/')).listen(8080);
});

describe('angularjs homepage todo list', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/');
    });

    it('should add a todo', function() {

        element(by.model('todoText')).sendKeys('write a protractor test');
        element(by.css('[value="add"]')).click();

        var todoList = element.all(by.repeater('todo in todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });
});