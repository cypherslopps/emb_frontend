import React, { useState, useEffect, FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import AdminLayout from '@/components/layouts/AdminLayout';
import AdminContainer from '@/components/admin-container/admin-container';
import { FormInput, Filepond, Button, Meta } from '@/components';
import useHandleFormInputs from '@/hooks/useHandleFormInputs'; 
import axiosClient from '@/lib/axiosClient';
import useAuth from '@/hooks/useAuth';

type Props = {};

const CreatePermission = (props: Props) => {
    const { csrf } = useAuth({ middleware: "auth" });
    const { handleChange, formData: permissionData, errors, setErrors } = useHandleFormInputs({
        role: "",
    });

    // Submit new post
    async function addNewPermission(e: FormEvent) {
        e.preventDefault();

        const isValid = permissionData.permission && !errors.permission;

        if(isValid) {
            await csrf();

            try {
                const response = await axiosClient.post("/permissions", permissionData)
                console.log(response);
                toast.success("Role successfully added");
            } catch(error) {
                console.log(error);
                toast.error("There was an error adding permission");
            }
        }
    }

    function handleValidation() {
        if(!permissionData.permission)
            setErrors({ ...errors, permission: "Please add a valid permission" });
        else 
            setErrors({ ...errors, permission: "" });
    }

    
    return (
        <>
            <Meta 
                title="Create permission"
            />

            <Toaster />

            <>
                <AdminContainer heading='Create new permission'>
                    <form onSubmit={addNewPermission} className="space-y-6 border border-gray-300 shadow-sm shadow-gray-100 bg-white rounded-xl p-8" noValidate>
                        <div className="space-y-3">
                            <FormInput 
                                type="text"
                                name="permission"
                                label="Permission"
                                value={permissionData.permission}
                                error={errors.permission}
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
                            >Create permission</Button>
                        
                            <Button
                                type="submit"
                                role="create-post-and-another"
                                variant="gray"
                            >Create permission and another</Button>
                        </div>
                    </form>
                </AdminContainer>
            </>
        </>
    )
}

export default CreatePermission;

CreatePermission.getLayout = (page: any) => {
    return (
        <AdminLayout>{page}</AdminLayout>
    )
}

// CreateRole.requireAuth = true;