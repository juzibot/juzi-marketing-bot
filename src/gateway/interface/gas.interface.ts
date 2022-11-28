interface Data {
	'油站名称': string;
	'油站价': number;
	'油号': string;
	'油站编号': string;
	'优惠价': number;
	'国标价': number;
}

export interface GasInfoResult {
	code: number;
	data: Data[];
	message: string;
}
