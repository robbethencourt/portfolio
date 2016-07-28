module.exports = function (app){

	// html get requests
	app.get('/projects', function(req, res) {
		
		res.render('projects', {
			title: 'Projects',
			active_projects: true
		});

	});

	app.get('/crisiscorps', function(req, res) {
		
		res.render('crisiscorps', {
			title: 'Projects - Crisiscorps',
			active_projects: true
		});

	});

	app.get('/hangman', function(req, res) {
		
		res.render('hangman', {
			title: 'Projects - Hangman',
			active_projects: true
		});

	});

	app.get('/trivia', function(req, res) {
		
		res.render('trivia', {
			title: 'Projects - Trivia',
			active_projects: true
		});

	});

	app.get('/aniloop', function(req, res) {
		
		res.render('aniloop', {
			title: 'Projects - Aniloop',
			active_projects: true
		});

	});

	app.get('/rpg', function(req, res) {
		
		res.render('rpg', {
			title: 'Projects - RPG',
			active_projects: true
		});

	});

	app.get('/rockpaperscissor', function(req, res) {
		
		res.render('rockpaperscissor', {
			title: 'Projects - Rock Paper Scissor Multiplayer',
			active_projects: true
		});

	});

	app.get('/alpha', function(req, res) {
		
		res.render('alpha', {
			title: 'Projects - Alpha Logistics',
			active_projects: true
		});

	});

	app.get('/pilates-boutique', function(req, res) {
		
		res.render('pilates-boutique', {
			title: 'Projects - Pilates Boutique',
			active_projects: true
		});

	});

	app.get('/hmsitip', function(req, res) {
		
		res.render('hmsitip', {
			title: 'Projects - How Much Should I Tip',
			active_projects: true
		});

	});

	app.get('/amodamx', function(req, res) {
		
		res.render('amodamx', {
			title: 'Projects - Amoda mx',
			active_projects: true
		});

	});

	app.get('/mandm', function(req, res) {
		
		res.render('mandm', {
			title: 'Projects - Meat Deer & McCaughna\'s Bourbon Supper',
			active_projects: true
		});

	});

	app.get('/flakas', function(req, res) {
		
		res.render('flakas', {
			title: 'Projects - Flakas Baked Goods',
			active_projects: true
		});

	});

	app.get('/mold-specialists', function(req, res) {
		
		res.render('mold-specialists', {
			title: 'Projects - Mold Specialists',
			active_projects: true
		});

	});

	app.get('/rixenus', function(req, res) {
		
		res.render('rixenus', {
			title: 'Projects - Rixen US',
			active_projects: true
		});

	});

	app.get('/about', function(req, res) {
		
		res.render('about', {
			title: 'About',
			active_about: true
		});

	});

	app.get('/contact', function(req, res) {
		
		res.render('contact', {
			title: 'Contact',
			active_contact: true
		});

	});

} // end module.exports()