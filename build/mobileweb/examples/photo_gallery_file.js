var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'images/appcelerator_small.png');

Ti.Media.saveToPhotoGallery(f,{
	success: function(e) {
		Ti.UI.createAlertDialog({
			title:'Photo Gallery',
			message:'Check your photo gallery for an appcelerator logo'
		}).show();		
	},
	error: function(e) {
		Ti.UI.createAlertDialog({
			title:'Error saving',
			message:e.error
		}).show();
	}
});

;