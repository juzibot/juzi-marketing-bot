interface Location {
	areacode: string;
	name: string;
	country: string;
	path: string;
}

interface Limit {
	date: string;
	number: string;
}

interface Traffic {
	limitArea: string;
	limitRule: string;
	limits: Limit[];
}

interface Result {
	location: Location;
	traffic: Traffic;
}

export interface TrafficInfoResult {
	status: number;
	result: Result;
}
