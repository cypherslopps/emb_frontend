import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Loader from '../loader/loader';
import useAuth from '@/hooks/useAuth';

const AuthGuard = ({ children }) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const token = Cookies.get("csrf-token");
	const { user } = useAuth({ middleware: "auth" });

	useEffect(() => {
		setIsLoading(true);
	}, []);

	// Check if user exists
	if(!user) 
		return null;
		// if(user.roles === "student") {
		// 	if(router.route.includes('/dashboard')) 
		// 		router.push("/courses/my-courses");
		// } else {
		// 	if(router.route.includes('/courses'))
		// 		router.push("/dashboard");	
		// }

		// if(router.route.includes('/dashboard')) {
		// 	if(user.roles !== "student")
		// 		router.push("/courses/my-courses");
		// } else {
		// 	// Redirect user to login
		// 	router.push("/login");
		// }

		// // Redirect based on user role
		// if(router.route.includes('/courses')) {
		// 	if(user.roles === "student")
		// 		router.push();
		// } else {
		// 	// Redirect user to login
		// 	router.push("/login");
		// }
	

	if(isLoading) 
		return <Loader />

	return (
		<>{children}</>
	)
}

export default AuthGuard;