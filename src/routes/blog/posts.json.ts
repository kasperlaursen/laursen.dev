export enum PostCategory {
	MAKING = 'Making',
	CODING = 'Coding',
	HOMEAUTOMATION = 'Home Automation',
	OTHER = 'Other'
}
export interface PostMetadata {
	title: string;
	teaser: string;
	categories?: PostCategory[];
}
export interface Post extends PostMetadata {
	slug: string;
}

export interface Category {
	category: PostCategory;
	count: number;
}

export interface ResponseBody {
	posts: Post[];
	categories: Category[];
}

export const get = async (): Promise<{
	status: number;
	body: ResponseBody;
}> => {
	let posts: Post[] = await Promise.all(
		Object.entries(import.meta.glob('./*.md')).map(async ([path, page]) => {
			const { metadata } = await page();
			const slug = path.split('/').pop().split('.').shift();
			return { ...metadata, slug };
		})
	);

	return {
		status: 200,
		body: { posts, categories: categoriesFromPosts(posts) }
	};
};

function categoriesFromPosts(posts: Post[]): Category[] {
	const categories: Category[] = [];
	posts.forEach((post) => {
		post.categories?.forEach((category) => {
			const catObjIndex = categories.findIndex((cat) => cat.category === category);
			if (catObjIndex == -1) {
				categories.push({ category, count: 1 });
			} else {
				categories[catObjIndex].count++;
			}
		});
	});
	return categories;
}
