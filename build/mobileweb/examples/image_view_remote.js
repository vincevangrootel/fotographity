var win = Ti.UI.currentWindow;

var imageView = Ti.UI.createImageView({
	image:'http://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png',
	defaultImage:'../images/cloud.png',
	top:20,
	width:100,
	height:100
});
	
win.add(imageView);

var l = Ti.UI.createLabel({
	text:'This is a remote image URL',
	bottom:30,
	color:'#999',
	height:20,
	width:300,
	textAlign:'center'
});
win.add(l);

var imageView2 = Ti.UI.createImageView({
	defaultImage:'../images/cloud.png',
	top:140,
	width:100,
	height:100
});
win.add(imageView2);

var b = Ti.UI.createButton({
	title : 'Assign remote image url',
	top : 260,
	height : 50,
	width : "auto"
});
win.add(b);
b.addEventListener('click', function(e) {
		imageView2.image = 'http://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png';
});

;