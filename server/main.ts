//Meteor
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

//Collections
import '../common/collections/Projects';
import './projects';

import {Init} from '../common/Init';

Meteor.startup(() => {
	Init();
});
