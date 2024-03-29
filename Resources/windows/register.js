var win1 = Titanium.UI.currentWindow;
win1.barColor = '#383838';

// Back Button
var backBtn = Titanium.UI.createButton({
	title : 'Back',
	style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});

backBtn.addEventListener('click', function() {
	win1.close();
});

Ti.UI.currentWindow.setLeftNavButton(backBtn);

// win1.setBackgroundImage('graphics/bg.png');
// win1.setBackgroundColor('transparent');
// Titanium.UI.setBackgroundImage('graphics/bg.png');
var usernameTF = Ti.UI.createTextField({
	top : 30,
	width : '60%',
	height : 30,
	hintText : 'Username',
	borderColor : '#888',
	color : '#fff',
	borderRadius : 4,
	borderWidth : 1,
	paddingLeft : 10,
	clearButtonMode : Ti.UI.INPUT_BUTTONMODE_ONFOCUS,
	autocaptalization : Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
	autocorrect : false,
});
var emailTF = Ti.UI.createTextField({
	top : 30,
	width : '60%',
	height : 30,
	hintText : 'email',
	borderColor : '#888',
	color : '#fff',
	borderRadius : 4,
	borderWidth : 1,
	paddingLeft : 10,
	clearButtonMode : Ti.UI.INPUT_BUTTONMODE_ONFOCUS,
	autocaptalization : Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
	autocorrect : false,
});

var passwordTF = Ti.UI.createTextField({
	top : 10,
	width : '60%',
	color : '#fff',
	height : 30,
	hintText : 'Password',
	borderColor : '#888',
	borderRadius : 4,
	borderWidth : 1,
	paddingLeft : 10,
	clearButtonMode : Ti.UI.INPUT_BUTTONMODE_ONFOCUS,
	autocaptalization : Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
	autocorrect : false
	// ,
	// passwordMask: true,
});

var loginB = Ti.UI.createButton({
	title : 'Login',
	width : '60%',
	height : 30,
	top : 20,
});

var resultIcon = Ti.UI.createImageView({
	top : 15,
	width : 'auto',
	height : 'auto',
	image : '../images/icon-locked.png',
});

win1.add(usernameTF);
win1.add(passwordTF);
win1.add(emailTF);
win1.add(loginB);
win1.add(resultIcon);

//
// win1.addEventListener('focus',function(e){
// if (!Ti.App.drupalCookie) {
// usernameTF.visible = true;
// passwordTF.visible = true;
// } else {
// usernameTF.visible = false;
// passwordTF.visible = false;
// emailTF.visible = false;
// }
// })
//

loginB.addEventListener('click', function(e) {
	var xhr = Titanium.Network.createHTTPClient();

	xhr.onload = function() {
		//Just log the responseText for fun
		Ti.API.info(this.responseText);

		//We translate the json string into a neat object
		var response = JSON.parse(this.responseText);

		//We save a drupal 'cookie'
		// var drupalCookie = response.session_name + '=' + response.sessid;
		// Ti.App.drupalCookie = drupalCookie;
		// Titanium.App.Properties.setString('drupalCookie', drupalCookie);

		//We make the interface happy
		resultIcon.image = '../images/icon-check.png';

		//We make sure the keyboard is hidden
		// usernameTF.blur();
		// passwordTF.blur();
	};

	xhr.onerror = function() {
		Ti.API.info('error');

		//We clear the global variables (naughty)
		Ti.App.drupalCookie = null;

		//We make the interface unhappy
		resultIcon.image = '../images/icon-close.png';
	};
	// open the client
	xhr.open('POST', 'http://vanbiggels.be/mobile/api/public/user/register.json');

	// create the json string to send
	var loginObject = {
		name : usernameTF.value,
		pass : passwordTF.value,
		mail : emailTF.value
	}
	var loginString = JSON.stringify(loginObject);

	// set the content-type header
	xhr.setRequestHeader('content-type', 'application/json');

	// send the data
	xhr.send(loginString);
});
