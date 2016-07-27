module.exports = function (app){

	// html get requests
	app.get('/projects', function(req, res) {
		
		res.render('projects', {
			title: 'Projects',
			link: 'projects'
		});

	}); // end app.get(projects)

} // end module.exports()