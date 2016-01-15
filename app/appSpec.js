describe('optIn', function() {
	
	var scope,
		element,
		compiled,
		html,
		image;

	beforeEach(module("myApp"));
	beforeEach(module('opt-in-template.html'));
	beforeEach(inject(function($rootScope, $compile) {
		scope = $rootScope.$new();
		image = '<img src="zeus.jpg">';
		html = "<opt-in>" + image + "</opt-in>";
		compiled = $compile(html);
		element = compiled(scope);
		scope.$digest();
	}));
	it('should show a sign up form', function(){
		expect(element.find('form').length).toBe(1);
		expect;
	})

});
