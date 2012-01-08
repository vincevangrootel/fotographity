var win=Ti.UI.currentWindow;

var l1 = Ti.UI.createLabel({
	text:'UTF-8 GET',
	font:{fontSize:16,fontWeight:'bold'},
	top:10,
	width:300,
	left:10,
	height:'auto'
});
win.add(l1);

var l2 = Ti.UI.createLabel({
	text:'Waiting for response...',
	font:{fontSize:13},
	top:40,
	left:10,
	width:300,
	height:'auto',
	color:'#888'
});
win.add(l2);

var xhr = Ti.Network.createHTTPClient();

xhr.onload = function()
{
	l2.text = this.responseText;
};

xhr.onerror = function(e)
{
	l2.text = e.error;
};

// open the client
xhr.open('GET','http://www.fre100.com');

// send the data
xhr.send();