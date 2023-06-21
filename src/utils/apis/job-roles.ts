import axiosClient from '@/lib/axiosClient';

// Fetch all categories 
export async function getJobRoles() {
	let response = await axiosClient.get("/jobs");
	const jobs = await response.data.data;

	return jobs;
}

export async function getSingleJobRole(id) {
	let response = await axiosClient.get(`/jobs/${id}`);
	const course = await response.data;

	return course;
}

export async function deleteJobRole(id) {
	let response = await axiosClient.delete(`/jobs/${id}`);
	const jobRoles = await response.data;

	return jobRoles;
}
