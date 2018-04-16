import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers,Response, RequestOptions } from '@angular/http';


@Injectable()
export class AppService {

	//proxyUrl:string = "https://processing.cfapps.io/processing";
	proxyUrl:string = "http://localhost:8080/processing";

	headers = new Headers({
		//'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin, Authorization',
		//'Access-Control-Allow-Methods': 'GET',
		'Access-Control-Allow-Origin': '*'
	});

	options = new RequestOptions({
		headers : this.headers
	});

	constructor(public http:Http){
	}

	checkLogin(user):Observable<any>{
		return this.http.post(this.proxyUrl+'/api/login', user, this.options).map(this.extractData).catch(this.handleError);
	}

	registerUser(user):Observable<any>{
		return this.http.post(this.proxyUrl+'/api/register', user, this.options).map(this.extractData).catch(this.handleError);
	}

	bookFlight(flight):Observable<any>{
		return this.http.post(this.proxyUrl+'/api/bookFlight', flight, this.options).map(this.extractData).catch(this.handleError);
	}

	restaurant(restaurant):Observable<any>{
		return this.http.post(this.proxyUrl+'/api/restaurant', restaurant, this.options).map(this.extractData).catch(this.handleError);
	}

	private extractData(response:Response): any{
  		let body = response.json();
      	console.log(body);
  		return body || { };
  	}

	private handleError(error:Response | any){
  		let errMsg:string;
  		if(error instanceof Response){
  			const body = error.json() || '';
  			const err = body.error || JSON.stringify(body);
  			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  		} else {
  			errMsg = error.message ? error.message : error.toString();
  		}

  		console.error(errMsg);
  		return Observable.throw(error);
  	}
}