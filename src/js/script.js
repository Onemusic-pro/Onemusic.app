(function() {
	var gui = require('nw.gui');
	var win = gui.Window.get();
	var webview = document.getElementById("webview");
	
	var tray = new gui.Tray({
		icon : 'assets/icon-19x16-bw.png',
		//title: 'Onemusic'
	});

	var menu = new gui.Menu();
	
	/*menu.append(new gui.MenuItem({
		type: 'normal',
		label: '▶️ Play',
		click: function() {
			webview.executeScript("var player=angular.element(document.body).injector().get('player'); player.play();");
		}
	}));
	menu.append(new gui.MenuItem({
		type: 'normal',
		label: '⏸ Pause',
		click: function() {
			webview.executeScript("var player=angular.element(document.body).injector().get('player'); player.pause();");
		}
	}));
	menu.append(new gui.MenuItem({
		type: 'normal',
		label: '⏭ Next',
		click: function() {
			webview.executeScript("var player=angular.element(document.body).injector().get('player'); player.playNext();");
		}
	}));
	menu.append(new gui.MenuItem({
		type: 'normal',
		label: '⏮ Previous',
		click: function() {
			webview.executeScript("var player=angular.element(document.body).injector().get('player'); player.playPrevious();");
		}
	}));
	menu.append(new gui.MenuItem({
		type: 'separator'
	}));
	menu.append(new gui.MenuItem({
		type: 'normal',
		label: '🔇 Mute',
		click: function() {
			webview.executeScript("var player=angular.element(document.body).injector().get('player'); player.mute();");
		}
	}));
	menu.append(new gui.MenuItem({
		type: 'normal',
		label: '🔈 Unmute',
		click: function() {
			webview.executeScript("var player=angular.element(document.body).injector().get('player'); player.unMute();");
		}
	}));
	menu.append(new gui.MenuItem({
		type: 'normal',
		label: '📺 Video',
		click: function() {
			webview.executeScript("var player=angular.element(document.body).injector().get('player'); player.toggleVideo();");
		}
	}));
	menu.append(new gui.MenuItem({
		type: 'normal',
		label: '📃 Lyrics',
		click: function() {
			webview.executeScript("var player=angular.element(document.body).injector().get('player'); player.toggleLyrics();");
		}
	}));
	menu.append(new gui.MenuItem({
		type: 'separator'
	}));
	menu.append(new gui.MenuItem({
		type: 'normal',
		label: '🗃 Download Lyrics',
		click: function() {
			webview.executeScript("var player=angular.element(document.body).injector().get('player'); player.downloadLyrics();");
		}
	}));
	menu.append(new gui.MenuItem({
		type: 'separator'
	}));*/
	
	menu.append(new gui.MenuItem({
		type: 'normal',
		label: '💡 Show',
		checked: 'true',
		click: function() {
			win.show();
		}
	}));

	menu.append(new gui.MenuItem({
		type: 'normal',
		label: '🕳 Hide',
		checked: 'true',
		click: function() {
			win.restore();
			win.hide();
		}
	}));

	menu.append(new gui.MenuItem({
		type: 'normal',
		label: '🖥 Fullscreen',
		click: function() {
			win.toggleFullscreen();
		}
	}));

	menu.append(new gui.MenuItem({
		type: 'normal',
		label: 'ⓗ Hashinglegal',
		click: function() {
			var hashing = gui.Window.open('https://github.com/CryptoCommunity/hashinglegal/blob/master/LICENSE.md', {
				position: 'center',
				width: 1040,
				height: 900,
				resizable: false
			});
		}
	}));

	menu.append(new gui.MenuItem({
		type: 'separator'
	}));

	menu.append(new gui.MenuItem({
		type: 'normal',
		label: '❌ Quit',
		click: function() {
			win.close();
		}
	}));
	
	tray.menu = menu;

	win.on('minimize', function() {
		win.restore();
		win.hide();
	});

}());