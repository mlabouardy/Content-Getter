

angular.module('clientApp')
.controller('ContentCtrl', function ($scope, Content) {
	document.getElementById('code').value = Content.data;
	var textarea = document.getElementById('code');
	var codeMirrorOptions = {
		lineNumbers:true,
		mode:"html"
	};
	var editor = CodeMirror.fromTextArea(textarea, codeMirrorOptions);	
});
