//Meteor
import { Accounts } from 'meteor/accounts-base';


export function Init() {
	Accounts.config({
		sendVerificationEmail: true,
		restrictCreationByEmailDomain: 'azahner.com'
	});
}
