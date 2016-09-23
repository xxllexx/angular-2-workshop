export class Section {
	constructor (
		public id: number,
		public type:number = 0,
		public question: string = '',
		public options: Array<string> = []
	){}
}

export class Option {
	constructor (
		public id: number,
		public title:string = 'Oprtion'
	){}	
}