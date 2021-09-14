export interface TechStack {
	name: string;
	from: number;
	to: number;
}

export const get = async () => {
	const TODAY = new Date().getFullYear();
	return {
		status: 200,
		body: [
			{
				name: "Svelte",
				from: 2020,
				to: TODAY
			},
			{
				name: "React",
				from: 2018,
				to: TODAY
			},
			{
				name: "Typescript",
				from: 2015,
				to: TODAY
			},
			{
				name: "Angular 2+",
				from: 2015,
				to: 2019
			},
			{
				name: "Node",
				from: 2016,
				to: TODAY
			},
			{
				name: "jQuery",
				from: 2010,
				to: 2016
			},
			{
				name: "PHP",
				from: 2010,
				to: 2016
			},
			{
				name: "HTML & CSS",
				from: 2009,
				to: TODAY
			},
		]
	}
};
