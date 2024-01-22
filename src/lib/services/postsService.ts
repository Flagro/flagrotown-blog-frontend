import type { Post } from '../types/Post';
import type { PostText } from '../types/Post';
import { selectedTags } from '../stores/tagsStore';

export async function getPosts(): Promise<Post[]> {
    // Fetch posts from an API or local JSON file
    // For demonstration, we use a mock array
    let posts = [
        { id: 1, name: 'Post 1', tags: ['tag1', 'tag2'], annotation: 'This is the annotation for post 1' },
        { id: 2, name: 'Post 2', tags: ['tag2', 'tag3'], annotation: 'This is the annotation for post 2' }
    ];

    // Initialize a variable to store the current selected tags
    let currentSelectedTags: string[] = [];

    // Subscribe to the selectedTags store to get the current value
    const unsubscribe = selectedTags.subscribe(tags => {
        currentSelectedTags = tags;
    });
    // Remember to unsubscribe to prevent memory leaks
    unsubscribe();

    // Filter posts by tags
    if (currentSelectedTags.length > 0) {
        posts = posts.filter(post => 
            currentSelectedTags.some(tag => post.tags.includes(tag))
        );
    }

    return posts;
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
	return ['tag1', 'tag2', 'tag3', 'tag4'];
}

export async function searchPosts(query: string) {
	return query;
}

export async function filterPostsByTags(tags: string[]) {
	return tags;
}
