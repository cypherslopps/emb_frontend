import React, { useState, useEffect, FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import AdminLayout from '@/components/layouts/AdminLayout';
import AdminContainer from '@/components/admin-container/admin-container';
import { FormInput, Filepond, Button, Meta } from '@/components';
import useHandleFormInputs from '@/hooks/useHandleFormInputs'; 
import axiosClient from '@/lib/axiosClient';
import useAuth from '@/hooks/useAuth';

type Props = {};

const CreateRole = (props: Props) => {
    const { csrf } = useAuth({ middleware: "auth" });
    const { handleChange, formData: roleData, errors, setErrors } = useHandleFormInputs({
        role: "",
    });

    // Submit new post
    async function addNewRole(e: FormEvent) {
        e.preventDefault();

        const isValid = roleData.role && !errors.role;

        if(isValid) {
            await csrf();

            try {
                const response = await axiosClient.post("/roles", roleData)
                console.log(response);
                toast.success("Role successfully added");
            } catch(error) {
                console.log(error);
                toast.error("There was an error adding role");
            }
        }
    }

    function handleValidation() {
        if(!roleData.role)
            setErrors({ ...errors, role: "Please add a valid role" });
        else 
            setErrors({ ...errors, role: "" });
    }

    
    return (
        <>
            <Meta 
                title="Create role"
            />

            <Toaster />

            <>
                <AdminContainer heading='Create new role'>
                    <form onSubmit={addNewRole} className="space-y-6 border border-gray-200 shadow-sm shadow-gray-100 bg-white rounded-xl p-8" noValidate>
                        <div className="space-y-3">
                            <FormInput 
                                type="text"
                                name="role"
                                label="Role"
                                value={roleData.role}
                                error={errors.role}
                                onChange={handleChange}
                                onBlur={handleValidation}
                                labelSign
                            />
                        </div>

                        <div className="flex gap-x-2 mt-7">
                            <Button
                                type="submit"
                                role="create-post"
                                variant="fill-primary"
                            >Create role</Button>
                        
                            <Button
                                type="submit"
                                role="create-post-and-another"
                                variant="gray"
                            >Create role and another</Button>
                        </div>
                    </form>
                </AdminContainer>
            </>
        </>
    )
}

export default CreateRole;

CreateRole.getLayout = (page: any) => {
    return (
        <AdminLayout>{page}</AdminLayout>
    )
}

// CreateRole.requireAuth = true;