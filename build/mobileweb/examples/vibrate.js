var win = Ti.UI.currentWindow;
// initialize to all modes
win.orientationModes = [
	Ti.UI.PORTRAIT,
	Ti.UI.LANDSCAPE_LEFT,
	Ti.UI.LANDSCAPE_RIGHT
];
var b1 = Ti.UI.createButton({
	title:'Vibrate',
	height:40,
	width:300,
	top:10
});

win.add(b1);

b1.addEventListener('click', function()
{
	Ti.Media.vibrate();	
});