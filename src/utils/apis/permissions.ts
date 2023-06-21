import axiosClient from '@/lib/axiosClient';

// Fetch all categories 
export async function getPermissions() {
	let response = await axiosClient.get("/permissions");
	const permissions = await response.data;

	return permissions;
}

export async function getSinglePermission(id) {
	let response = await axiosClient.get(`/permission/${id}`);
	const permission = await response.data;

	return permission;
}

export async function deletePermissions(id) {
	let response = await axiosClient.delete(`/permission/${id}`);
	const permissions = await response.data;

	return permissions;
}
