import React, { useState, useEffect, FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/layouts/AdminLayout';
import AdminContainer from '@/components/admin-container/admin-container';
import { Button, FormInput, Meta, Table } from '@/components';
import rolesData from '@/lib/constants/roles';
import useHandleFormInputs from '@/hooks/useHandleFormInputs'; 
import usersData from '@/lib/constants/users';

const EditRole = ({ role }: { role: PostProps }) => {
    const router = useRouter();
    const { handleChange, formData: roleData , setFormData: setRoleData, errors, setErrors } = useHandleFormInputs({
        role: "",
    });

    // Set role data
    useEffect(() => {
        setRoleData({
            ...roleData,
            role: role.name
        });
    }, [role])

    // Submit new user
    async function editRole(e: FormEvent) {
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

    const tableHeader = [
      {
          name: 'id',
          order: true
      },
      {
          name: 'fullname',
          order: true
      },
      {
          name: 'email',
          order: true
      },
      {
          name: 'telegram username',
          order: false
      },
      {
          name: 'twitter username',
          order: false
      },
      {
        name: 'facebook username',
        order: false
    }
  ];

    return (
        <>
            <Meta 
                title="Edit Role"
                description="edit role"
                keywords="edit role"
              />

            <Toaster />

            <AdminContainer 
                heading={`Roles - ${role?.role}`}
                variant="full"
                headingAction={
                    <Button 
                        variant='accent' 
                        type="button" 
                        role="link"
                    >
                        Delete post
                    </Button>}
            >
                <form onSubmit={editRole} className="mb-14" noValidate> 
                    <div className="grid grid-cols-1 gap-6 border border-gray-400/50 shadow-sm shadow-gray-100 bg-white rounded-xl p-6">
                        <FormInput 
                            name="roles"
                            label="Roles"
                            value={roleData.role}
                            error={errors?.role}
                            onChange={handleChange}
                        />      
                    </div>

                    <div className="flex gap-x-2 mt-3">
                        <Button
                            type="submit"
                            role="submit"
                            variant="fill-primary"
                        >Save changes</Button>
                    </div>
                </form>

                {/* User table */}
                <Table 
                    type="users"
                    tableHeader={tableHeader}
                    tableData={usersData}
                />
            </AdminContainer>
        </>
    )
}

type Params = {
    params: {
        id: string
    }
}

// export async function getStaticPaths() {
//     const params = rolesData.map(({ id }) => ({
//         params: { id: String(id) }
//     }));

//     return {
//         fallback: false,
//         paths: params
//     }
// }

// export async function getStaticProps({ params }: Params) {
//     const role = rolesData.filter(({ id }) => params?.id === String(id))[0];

//     return {
//         props: {
//             role
//         }
//     }
// }

export default EditRole;

EditRole.getLayout = (page: any) => {
    return (
        <AdminLayout>{page}</AdminLayout>
    )
}

// EditRole.requireAuth = true;