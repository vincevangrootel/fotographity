// create slider view data object
var data = [
	{title:'Basic', hasChild:true, test:'../examples/slider_basic.js'},
	{title:'Change Min/Max', hasChild:true, test:'../examples/slider_min_max.js'}
];

// add iphone specific tests
if (Ti.Platform.name == 'iPhone OS')
{
} else if (Ti.Platform.name == 'android') {
	data.push({title:'Min/Max Range', hasChild:true, test:'../examples/slider_range.js'});
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