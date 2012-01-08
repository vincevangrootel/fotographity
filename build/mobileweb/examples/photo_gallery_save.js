// create table view data object
var data = [
	{title:'From File', hasChild:true, test:'../examples/photo_gallery_file.js'},
	{title:'From XHR', hasChild:true, test:'../examples/photo_gallery_xhr.js'},
	{title:'Background Image', hasChild:true, test:'../examples/photo_gallery_bgimage.js'}
];

if (Ti.Platform.osname!='ipad')
{
	data.push({title:'From Camera', hasChild:true, test:'../examples/photo_gallery_camera.js'});
	data.push({title:'From Video', hasChild:true, test:'../examples/photo_gallery_video.js'});
}

// create table view
var tableview = Ti.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = Ti.UI.createWindow({
			url:e.rowData.test,
			title:e.rowData.title
		});
		Ti.UI.currentTab.open(win,{animated:true});
	}
});

// add table view to the window
Ti.UI.currentWindow.add(tableview);