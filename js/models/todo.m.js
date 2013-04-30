var app = app || {};

app.Todo = Backbone.Model.extend({

	// Todo Model
	// ----------
	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.

	defaults: {
		title: '',
		completed: false
	},

	toggle: function () {
		this.save({
			completed: !this.get('completed')
		});
	}

});