//npm
import { Component, NgZone, provide, enableProdMode } from 'angular2/core';
import { RequireUser, LoginButtons } from 'angular2-meteor-accounts-ui';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Location, RouteConfig, APP_BASE_HREF, AsyncRoute } from 'angular2/router';
import { LoginButtons } from 'angular2-meteor-accounts-ui';

//Meteor
import { Meteor } from 'meteor/meteor';

//Global settings
import { Init } from '../common/Init';

import {Private} from './private';

enableProdMode();

Meteor.startup(Init);

@Component({
	selector: 'app',
	templateUrl: '/client/app.html',
	directives: [LoginButtons, Private]
})

@RequireUser()
class App {
	constructor(public location: Location) { }
}
 

bootstrap(App, [
	ROUTER_PROVIDERS, 
	provide(APP_BASE_HREF, { useValue: '/' })
]);
