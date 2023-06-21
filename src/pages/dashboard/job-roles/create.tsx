import React, { useState, useEffect, FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import AdminLayout from '@/components/layouts/AdminLayout';
import AdminContainer from '@/components/admin-container/admin-container';
import { FormInput, Filepond, Button, Meta } from '@/components';
import useHandleFormInputs from '@/hooks/useHandleFormInputs'; 
import axiosClient from '@/lib/axiosClient';
import useAuth from '@/hooks/useAuth';

type Props = {};

const CreateJobRole = (props: Props) => {
    const { csrf } = useAuth({ middleware: "auth" });
    const { handleChange, formData: jobRoleData, errors, setErrors } = useHandleFormInputs({
        role: "",
    });

    // Submit new post
    async function addNewJobRole(e: FormEvent) {
        e.preventDefault();

        const isValid = jobRoleData.jobRole && !errors.jobRole;

        if(isValid) {
            await csrf();

            try {
                const response = await axiosClient.post("/jobRoles", jobRoleData)
                console.log(response);
                toast.success("Role successfully added");
            } catch(error) {
                console.log(error);
                toast.error("There was an error adding jobRole");
            }
        }
    }

    function handleValidation() {
        if(!jobRoleData.jobRole)
            setErrors({ ...errors, jobRole: "Please add a valid job role" });
        else 
            setErrors({ ...errors, jobRole: "" });
    }

    
    return (
        <>
            <Meta 
                title="Create jobRole"
            />

            <Toaster />

            <>
                <AdminContainer heading='Create new jobRole'>
                    <form onSubmit={addNewJobRole} className="space-y-6 border border-gray-300 shadow-sm shadow-gray-100 bg-white rounded-xl p-8" noValidate>
                        <div className="space-y-3">
                            <FormInput 
                                type="text"
                                name="jobRole"
                                label="Job role"
                                value={jobRoleData.jobRole}
                                error={errors.jobRole}
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
                            >Create job role</Button>
                        
                            <Button
                                type="submit"
                                role="create-post-and-another"
                                variant="gray"
                            >Create job role and another</Button>
                        </div>
                    </form>
                </AdminContainer>
            </>
        </>
    )
}

export default CreateJobRole;

CreateJobRole.getLayout = (page: any) => {
    return (
        <AdminLayout>{page}</AdminLayout>
    )
}

// CreateRole.requireAuth = true;