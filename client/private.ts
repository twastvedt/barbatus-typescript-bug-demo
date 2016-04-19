//npm
import { Component } from 'angular2/core';
import { RequireUser } from 'angular2-meteor-accounts-ui';

//Meteor
import { Meteor } from 'meteor/meteor';

@Component({
	selector: 'private',
	template: `
		<div>
			<p>Private App Code!</p>
		</div>
	`
})

@RequireUser()
export class Private {
	constructor() { }
}
