describe('inedx.html', function() {
  browser.get('http://protractortest.azurewebsites.net/');

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Protractor Test App');
  });
});