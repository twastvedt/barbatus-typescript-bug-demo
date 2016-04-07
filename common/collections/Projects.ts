import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export var Projects = new Mongo.Collection<Project>('projects');

Projects.allow({
	insert: function(project: Object) {
		var user = Meteor.user();
		return !!user;
	},
	update: function(project: Object, fields: any, modifier: any) {
		var user = Meteor.user();
		return !!user;
	},
	remove: function(project: Object) {
		var user = Meteor.user();
		return !!user;
	}
});
