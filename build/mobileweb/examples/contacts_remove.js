
var win = Ti.UI.currentWindow;

var b1 = Ti.UI.createButton({
	title:'Delete via picker',
	width:200,
	height:40
});
b1.addEventListener('click', function() {
	Ti.Contacts.showContacts({
		selectedPerson:function(e) {
			Ti.Contacts.removePerson(e.person);
			Ti.Contacts.save();
		}
	});
});
win.add(b1);