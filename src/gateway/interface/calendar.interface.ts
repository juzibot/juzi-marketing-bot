interface Data {
	animalsYear: string,
	weekday: string,
	lunarYear: string,
	lunar: string,
	'year-month': string,
	date: string,
	suit: string,
	avoid: string,
	holiday: string,
	desc: string,
}

interface Result {
	data: Data,
}

export interface CalendarInfoResult {
	reason: string,
	result: Result,
	error_code: number,
}
