//Meteor
import { Meteor } from 'meteor/meteor';

//Collections
import {Projects} from '../common/collections/Projects';

Meteor.publish('projects', function(selector: any = {}, options: any = {}) {
    return Projects.find(selector, options);
});

Meteor.publish('project', function(projectId: string) {
	return Projects.find(projectId);
});
