export type Post = {
	id: number;
	name: string;
	annotation: string;
	tags: string[];
};

export type PostText = {
	id: number;
	name: string;
	tags: string[];
	text: string;
};
