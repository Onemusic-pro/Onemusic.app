(function() {
	var gui = require('nw.gui');
	var win = gui.Window.get();
	var webview = document.getElementById("webview");
	
	var tray = new gui.Tray({
		icon : '../assets/icon-16x16.png',
		title: '♫'
	});

	var menu = new gui.Menu();
	
	menu.append(new gui.MenuItem({
		type: 'normal',
		label: 'Onemusic',
		disabled: true
	}));
	menu.append(new gui.MenuItem({
		type: 'normal',
		label: 'Play',
		click: function() {
			webview.executeScript("player.play()");
		}
	}));
	menu.append(new gui.MenuItem({
		type: 'separator'
	}));
	menu.append(new gui.MenuItem({
		type: 'checkbox',
		label: 'Show',
		click: function() {
			if(this.checked==false) {
				ed.unwatch(function(){
					win.hide();
				});
			} else {
				ed.watch(function(){
					win.show();
				});
			}
		}
	}));
	menu.append(new gui.MenuItem({
		type: 'normal',
		label: 'Quit',
		click: function() {
			win.close();
		}
	}));
	
	tray.menu = menu;

	win.on('minimize', function() {
		win.show();
		win.hide();
	});

}());