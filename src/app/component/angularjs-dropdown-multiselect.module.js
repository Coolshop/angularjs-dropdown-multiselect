// import angularUI from 'angular-ui-bootstrap';
import dropdownDirective from './angularjs-dropdown-multiselect.directive';

angular.module('angularjs-dropdown-multiselect', ['ui.bootstrap'])
.directive('dmDropdownStaticInclude', ($compile) => {
	'ngInject';

	return function directive(scope, element, attrs) {
		const template = attrs.dmDropdownStaticInclude;
		const contents = element.html(template).contents();
		$compile(contents)(scope);
	};
})
.directive('ngDropdownMultiselect', dropdownDirective);
