import { writable } from 'svelte/store';

export const currentPage = writable(1); // Start from page 1
export const postsPerPage = writable(10); // Number of posts per page
