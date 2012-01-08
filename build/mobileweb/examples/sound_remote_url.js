var win = Ti.UI.currentWindow;

var url = "http://www.archive.org/download/CelebrationWav/1.wav";

// load from remote url
var sound = Ti.Media.createSound({url:url,preload:true});

//
// PLAY
//
var play = Ti.UI.createButton({
	title:'Play',
	height:40,
	width:145,
	left:10,
	top:10
});
play.addEventListener('click', function()
{
	sound.play();
	pb.max = sound.duration;
});
win.add(play);

//
// PAUSE
//
var pause = Ti.UI.createButton({
	title:'Pause',
	height:40,
	width:145,
	right:10,
	top:10
});
pause.addEventListener('click', function()
{
	sound.pause();
});
win.add(pause);

//
// RESET
//
var reset = Ti.UI.createButton({
	title:'Reset',
	height:40,
	width:145,
	left:10,
	top:60
});
reset.addEventListener('click', function()
{
	sound.reset();
	pb.value = 0;

});
win.add(reset);

//
// STOP
//
var stop = Ti.UI.createButton({
	title:'Stop',
	height:40,
	width:145,
	right:10,
	top:60
});
stop.addEventListener('click', function()
{
	sound.stop();
	pb.value = 0;
});
win.add(stop);

//
// VOLUME +
//
var volumeUp = Ti.UI.createButton({
	title:'Volume++',
	height:40,
	width:145,
	left:10,
	top:110
});
volumeUp.addEventListener('click', function()
{
	if (sound.volume < 1.0)
	{
		sound.volume += 0.1;
		var roundedVolume = Math.round(sound.volume*1000)/1000;
		volumeUp.title = 'Volume++ (' + roundedVolume + ')';
		volumeDown.title = 'Volume--';
	}
});
win.add(volumeUp);

//
// VOLUME -
//
var volumeDown = Ti.UI.createButton({
	title:'Volume--',
	height:40,
	width:145,
	right:10,
	top:110
});
volumeDown.addEventListener('click', function()
{
	if (sound.volume > 0)
	{
		if (sound.volume < 0.1){
			sound.volume = 0;
		} else {
			sound.volume -= 0.1;
		}
		var roundedVolume = Math.round(sound.volume*1000)/1000;
		volumeDown.title = 'Volume-- (' + roundedVolume + ')';
		volumeUp.title = 'Volume++';
	}

});
win.add(volumeDown);

//
// LOOPING
//
var looping = Ti.UI.createButton({
	title:'Looping (false)',
	height:40,
	width:145,
	left:10,
	top:160
});
looping.addEventListener('click', function()
{
	sound.looping = (sound.isLooping() === false)?true:false;
	looping.title = 'Looping (' + sound.isLooping() + ')';
});
win.add(looping);

//
// EVENTS
//
sound.addEventListener('complete', function()
{
	Ti.API.info('COMPLETE CALLED');

	pb.value = 0;
});
sound.addEventListener('resume', function()
{
	Ti.API.info('RESUME CALLED');
});

//
//  PROGRESS BAR TO TRACK SOUND DURATION
//
var flexSpace = Ti.UI.createButton({
	systemButton:Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});
var pb = Ti.UI.createProgressBar({
	min:0,
	value:0,
	width:200
});

if (Ti.Platform.name != 'android') {
	win.setToolbar([flexSpace,pb,flexSpace]);
}
pb.show();

//
// INTERVAL TO UPDATE PB
//
var i = setInterval(function()
{
	if (sound.isPlaying())
	{
		Ti.API.info('time ' + sound.time);
		pb.value = sound.time;

	}
},500);

//
//  CLOSE EVENT - CANCEL INTERVAL
//
win.addEventListener('close', function()
{
	clearInterval(i);
});