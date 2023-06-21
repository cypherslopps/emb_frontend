import axiosClient from '@/lib/axiosClient';

// Fetch all categories 
export async function getCategories() {
	let response = await axiosClient.get("/categories");
	const categories = await response.data;

	return categories;
}

export async function getSingleCategory(id) {
	let response = await axiosClient.get(`/categories/${id}`);
	const category = await response.data;

	return category;
}
