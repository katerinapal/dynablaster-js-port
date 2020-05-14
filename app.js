requirejs.config({
	urlArgs: "bust=" + (new Date()).getTime(),

    paths: {
        'jquery': './lib/jquery-2.1.3.min',
		'pathfinding' : './lib/pathfinding/pathfinding-browser.min',
		'system' : './system'
    }
});

requirejs(['main']);