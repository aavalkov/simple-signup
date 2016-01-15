var app = angular.module('myApp', []);

app.directive('optIn', function(){
	return {
		templateUrl: 'app/opt-in-template.html',
		restrict: 'E',
		transclude: true,
		replace: true
	}
});

