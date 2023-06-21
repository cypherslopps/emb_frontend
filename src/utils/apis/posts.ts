import axiosClient from '@/lib/axiosClient';

// Fetch all categories 
export async function getAllPosts() {
	let response = await axiosClient.get("/posts");
	const posts = await response.data;

	return posts;
}

export async function getFilteredPosts(page, limit) {
	let response = await axiosClient.get(`/posts?page=${page}&limit=${limit}`);
	const posts = await response.data?.data ?? response.data;

	return posts;
}

export async function getSinglePost(slug) {
	let response = await axiosClient.get(`/posts/${slug}`);
	const course = await response.data;

	return course;
}

export async function getPostStats() {
	let response = await axiosClient.get("/posts/count");
	const postStat = await response.data;

	return postStat;
}