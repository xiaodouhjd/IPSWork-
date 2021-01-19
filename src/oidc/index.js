import { UserManager, User } from 'oidc-client';
import { openIdConnectSettings } from '@/oidc/config';

export default class Oidcips {
	constructor() {
		this.mgr = new UserManager(openIdConnectSettings)
	}

	login() {
		this.mgr.signinRedirect()
	}
	
	callback() {
		return new UserManager({ response_mode: "query" }).signinRedirectCallback().then(function () {
	        return this.getUser();
	    }).catch(function (e) {
	        console.error(e);
	    });
	}

	getUser (){
	  return new Promise((res,err) => {
		this.mgr.getUser().then(function (user) {
			console.log(user);
    		return res(user);
    	});
	  })
	}

	logout() {
		this.mgr.signoutRedirect();
	}
}
