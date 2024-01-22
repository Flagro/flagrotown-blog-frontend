import type { Post } from '../types/Post';
import type { PostText } from '../types/Post';

export async function getPosts(): Promise<Post[]> {
	// Fetch posts from an API or local JSON file
	// Here, we're assuming a JSON structure like [{ id, name, tags }, ...]
	// Example:
	// return fetch('path_to_your_api_or_json_file')
	//   .then(response => response.json() as Promise<Post[]>);

	// For now, let's return a mock array
	return [
		{ id: 1, name: 'Post 1', tags: ['tag1', 'tag2'], annotation: 'This is the annotation for post 1' },
		{ id: 2, name: 'Post 2', tags: ['tag2', 'tag3'], annotation: 'This is the annotation for post 2' }
	];
}

export async function getPost(postId: string): Promise<PostText> {
	if (postId === '1') {
		return { id: 1, name: 'Post 1', tags: ['tag1', 'tag2'], text: 'This is the text for post 1' };
	} else if (postId === '2') {
		return { id: 2, name: 'Post 2', tags: ['tag2', 'tag3'], text: 'This is the text for post 2' };
	}
	throw new Error('Post not found');
}

export async function totalPosts(): Promise<number> {
	return 2;
}

export async function getTags(): Promise<string[]> {
	return ['tag1', 'tag2', 'tag3'];
}

export async function searchPosts(query: string) {
	return query;
}

export async function filterPostsByTags(tags: string[]) {
	return tags;
}
