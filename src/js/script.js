(function() {
	var gui = require('nw.gui');
	var win = gui.Window.get();
	var webview = document.getElementById("webview");
	
	var tray = new gui.Tray({
		icon : 'assets/icon-19x16-bw.png',
		//title: '🔊'
	});

	var menu = new gui.Menu();
	
	menu.append(new gui.MenuItem({
		type: 'normal',
		label: '⏯ Resume',
		click: function() {
			webview.executeScript("player.play();");
		}
	}));
	menu.append(new gui.MenuItem({
		type: 'normal',
		label: '⏭ Next',
		click: function() {
			webview.executeScript("player.playNext();");
		}
	}));
	menu.append(new gui.MenuItem({
		type: 'normal',
		label: '⏮ Previous',
		click: function() {
			webview.executeScript("player.playPrevious();");
		}
	}));
	menu.append(new gui.MenuItem({
		type: 'separator'
	}));
	menu.append(new gui.MenuItem({
		type: 'checkbox',
		label: '🔈 Mute',
		click: function() {
			if(this.checked==false) {
				webview.executeScript("player.play()");
				this.label = '🔈 Mute';
			} else {
				webview.executeScript("player.play()");
				this.label = '🔇 Silent';
			}
		}
	}));
	menu.append(new gui.MenuItem({
		type: 'separator'
	}));
	menu.append(new gui.MenuItem({
		type: 'checkbox',
		label: '🔲 Visible',
		checked: 'true',
		click: function() {
			if(this.checked==false) {
				ed.unwatch(function(){
					alert("hide the preview");//win.restore();
				});
				//this.label = '🔲 Visible';
			} else {
				ed.watch(function(){
					alert("show the preview");//win.hide();
				});
				//this.label = '🔳 Hidden';
			}
		}
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