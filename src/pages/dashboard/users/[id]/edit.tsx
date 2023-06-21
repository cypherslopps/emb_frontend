import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/layouts/AdminLayout';
import AdminContainer from '@/components/admin-container/admin-container';
import { Button, FormInput, Filepond, FormSelect } from '@/components';
import usersData from '@/lib/constants/users';
import UserProps from '@/interfaces/users';
import useHandleFormInputs from '@/hooks/useHandleFormInputs'; 
import Head from 'next/head';

const EditUser = ({ user }: { user: UserProps }) => {
    const router = useRouter();
    const { handleChange, formData: userData , setFormData: setUserData, errors, setErrors } = useHandleFormInputs({
        fullname: user?.fullname,
        email: user?.email,
        telegram_username: user?.telegram_username,
        twitter_username: user?.twitter_username,
        facebook_username: user?.facebook_username,
        roles: ""
    });

    // edit user
    function editUser(e: FormEvent) {
        e.preventDefault();

        if(!userData.fullname)
            setErrors({ ...errors, fullname: "Please add a post title" });
        else
            setErrors({ ...errors, fullname: "" });

        if(!userData.email)
            setErrors({ ...errors, email: "Please add a post title"});
        else
            setErrors({ ...errors, email: "" });
        
        if(!userData.telegram_username)
            setErrors({ ...errors, telegram_username: "Please add a post content" });
        else
            setErrors({ ...errors, telegram_username: "" });
            
        if(!userData.twitter_username)
            setErrors({ ...errors, twitter_username: "Please add a post content" });
        else
            setErrors({ ...errors, twitter_username: "" });

        if(!userData.facebook_username)
            setErrors({ ...errors, facebook_username: "Please add a post content" });
        else
            setErrors({ ...errors, facebook_username: "" });

        if(!userData.roles) 
            setErrors({ ...errors, roles: "" });    
        else
            setErrors({ ...errors, roles: "" });

        const isValid = Object.values(userData).every(value => Boolean(value));

        if(isValid) {
            console.log("validated form");
        }
    }

    return (
        <>
            <Head>
                <title>Edit - {user?.fullname}</title>
            </Head>
            <AdminLayout>
                <AdminContainer 
                    heading={`User - ${user?.fullname}`}
                    headingAction={
                        <Button 
                            variant='accent' 
                            type="button" 
                            role="link"
                            onClick={() => router.prefetch(`/admin/users/${user.id}/edit`)}
                        >
                            Delete user
                        </Button>}
                >
                    <form onSubmit={editUser} noValidate> 
                        <div className="grid grid-cols-1 gap-6 border border-gray-200 shadow-sm shadow-gray-100 bg-white rounded-xl p-6">
                            <div className='grid grid-cols-2 gap-x-3'>
                                <FormSelect 
                                    name="roles"
                                    label="roles"
                                    value={userData.roles}
                                    error={errors?.roles}
                                />

                                <FormSelect 
                                    name="premissions"
                                    label="premissions"
                                    value={userData.roles}
                                    error={errors?.roles}
                                />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-x-3">
                                <FormInput 
                                    type="text"
                                    name="fullname"
                                    label="fullname"
                                    value={userData.fullname}
                                    error={errors?.fullname}
                                    onChange={handleChange}
                                    labelSign
                                />

                                <FormInput 
                                    type="email"
                                    name="email"
                                    label="email"
                                    value={userData.email}
                                    error={errors?.email}
                                    onChange={handleChange}
                                    labelSign
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-x-3">
                                <FormInput 
                                    type="text"
                                    name="telegram_username"
                                    label="telegram username"
                                    value={userData.telegram_username}
                                    error={errors?.telegram_username}
                                    onChange={handleChange}
                                    labelSign
                                />

                                <FormInput 
                                    type="text"
                                    name="twitter_username"
                                    label="twitter username"
                                    value={userData.twitter_username}
                                    error={errors?.twitter_username}
                                    onChange={handleChange}
                                    labelSign
                                />
                            </div>

                            <FormInput 
                                type="text"
                                name="facebook_username"
                                label="facebook username"
                                value={userData.facebook_username}
                                error={errors?.facebook_username}
                                onChange={handleChange}
                                labelSign
                            />                        
                        </div>

                        <div className="flex gap-x-2 mt-7">
                            <Button
                                type="submit"
                                role="create-user"
                                variant="fill-primary"
                            >Save changes</Button>
                        </div>
                    </form>
                </AdminContainer>
            </AdminLayout>
        </>
    )
}

type Params = {
    params: {
        id: string
    }
}

export async function getStaticPaths() {
    const params = usersData.map(({ id }) => ({
        params: { id: String(id) }
    }));
    
    return {
        fallback: false,
        paths: params
    }
}

export async function getStaticProps({ params }: Params) {
    const user = usersData.filter(({ id }) => params?.id === String(id))[0];
    
    return {
        props: {
            user
        }
    }
}

// export default EditUser;