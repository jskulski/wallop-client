selenium = require 'selenium-webdriver'
chai = require 'chai'
chai.use require 'chai-as-promised'
expect = chai.expect

connect = require 'connect'
serveStatic = require 'serve-static'

before ->
	@timeout 10000
  connect().use(serveStatic(__dirname)).listen(8080)
	@driver = new selenium.Builder()
    .withCapabilities(selenium.Capabilities.chrome())
    .build()
	@driver.getWindowHandle()


after ->
  @driver.quit()

describe 'Swype', ->
  beforeEach ->
    @driver.get 'http://localhost:8080/index.html'

  it 'has the title of the post in the window\'s title', ->
    expect(@driver.getTitle()).to.eventually.contain
    'Getting started with Selenium Webdriver for node.js'

  it 'has publication date', ->
    text = @driver.findElement(css: '.post .meta time').getText()
    expect(text).to.eventually.equal 'December 30th, 2014'

  it 'links back to the homepage', ->
    @driver.findElement(linkText: 'Bites').click()
    expect(@driver.getCurrentUrl()).to.eventually.equal 'http://bites.goodeggs.com/'
