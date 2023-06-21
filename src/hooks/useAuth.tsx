import { useEffect, useState } from 'react';
import useSWR from 'swr';
import axiosClient from '@/lib/axiosClient';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

type Props = {}

const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { data: user, error, mutate } = useSWR('/dashboard',
        () => axiosClient
            .get('/dashboard')
            .then(response => response.data?.data ?? response.data)
            .catch(error => {
                if(error.response.status !== 409)
                    throw error

                return error;
            }) 
    );

    const csrf = () => axiosClient.get('/sanctum/csrf-cookie');
            
    // Register
    const register = async ({ setRequestError, data, resetFormData }: any) => {
        await csrf();

        setIsLoading(true);
        setRequestError({});

        axiosClient
            .post('/register', data)
            .then(() => {                
                // Mutate request;
                mutate();

                setIsLoading(false);
            })
            .catch(error => {
                // Set loading to false
                setIsLoading(false);
                
                if(error.response.status !== 422) throw error;

                setRequestError(error?.response?.data);
            })
    }

    // Login
    const login = async ({ setRequestError, data }: any) => {
        await csrf();

        setIsLoading(true);
        setRequestError({});

        axiosClient
            .post('/login', data)
            .then(() => {
                // Mutate request;
                mutate(); 

                // Set loading to false
                setIsLoading(false);
            })
            .catch(error => {
                // Set loading to false
                setIsLoading(false);

                if(error.response.status !== 422) throw error;

                setRequestError(error?.response?.data);
            })
    }

    // Forgot password
    const forgotPassword = async ({ setRequestError, setStatus, email }) => {
        await csrf()

        setRequestError({});

        axios
            .post('/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setRequestError(error.response.data.errors)
            })
    }

    // Reset password
    const resetPassword = async ({ setRequestError, ...data }) => {
        await csrf()

        setRequestError({})

        axios
            .post('/reset-password', { token: router.query.token, ...data })
            .then(response =>
                router.push('/login?reset=' + btoa(response.data.status)),
            )
            .catch(error => {
                if (error.response.status !== 422) throw error

                setRequestError(error.response.data.errors);
            })
    }

    // Logout
    const logout = async () => {
        console.log(error, user, "logout")
        if(!error)
            await axiosClient.post('/logout').then(() => mutate());
        console.log("logout", redirectIfAuthenticated)

        // Redirect user to login
        router.push(redirectIfAuthenticated);
    };

    useEffect(() => {
        if(middleware === "guest" && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated);
        
        if(middleware === "admin" && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated);

        if (window.location.pathname === '/verify-email' && user?.email_verified_at)
            router.push(redirectIfAuthenticated);

        if(middleware === "auth" && redirectIfAuthenticated && error) logout();
    }, [user, error, middleware, router]);

    return {
        user,
        csrf,
        setIsLoading,
        isLoading,
        register,
        login,
        logout
    }
}

export default useAuth;