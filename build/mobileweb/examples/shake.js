var win = Ti.UI.currentWindow;

var l = Ti.UI.createLabel({
	text:'Shake your phone',
	top:10,
	color:'#999',
	height:'auto',
	width:'auto'
});

win.add(l);

Ti.Gesture.addEventListener('shake',function(e)
{
	Ti.UI.createAlertDialog({title:'Shake',message:'it worked!'}).show();
});