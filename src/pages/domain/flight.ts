

export class Flight {

	username:string;
	fromPlace:string;
	toPlace:string;
	departureDate:string = new Date().toISOString();
	returnDate:string = new Date().toISOString();
	adult:string = '1';
	child:string = '1';
	classType:string = 'Economy Class';
	airlines:any = ['Airindia', 'Indigo','JetAirways','Spicejet'];
	airline:string;
	place:any = [];
}