import axiosClient from '@/lib/axiosClient';

// Fetch all categories 
export async function getCourses() {
	let response = await axiosClient.get("/courses");
	const courses = await response.data;

	return courses;
}

export async function getSingleCourse(id) {
	let response = await axiosClient.get(`/course/${id}`);
	const course = await response.data;

	return course;
}
