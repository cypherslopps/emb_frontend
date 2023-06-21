import React from 'react';
import { useRouter } from 'next/router';
import { HiPlus } from 'react-icons/hi2';
import AdminLayout from '@/components/layouts/AdminLayout';
import AdminContainer from '@/components/admin-container/admin-container';
import { Button, Table, Stats, Meta } from '@/components';
import stats from '@/lib/constants/stats';
import rolesData from '@/lib/constants/roles';

const Roles = () => {
  const router = useRouter();
  
  const tableHeader = [
      {
          name: 'id',
          order: true
      },
      {
          name: 'role',
          order: true
      }
  ];
  
  return (
      <>
          <Meta 
            title="Roles"
            description="view all user roles"
            keywords="user roles"
          />

          <>
              <AdminContainer
                  heading='Roles'
                  headingAction={<Button variant='fill-primary' size="sm" type="button" classname="font-medium" role="link" onClick={() => router.push("/dashboard/roles/create")}>
                      <HiPlus className="text-[1.06rem]" />
                      Add role
                  </Button>}
              >                      
                {/* Roles table */}
                <Table 
                    type="roles"
                    tableHeader={tableHeader}
                    tableData={rolesData}
                />
              </AdminContainer>
          </>
      </>
  )
}

export default Roles;

Roles.getLayout = (page: any) => {
    return (
        <AdminLayout>{page}</AdminLayout>
    )
}

// Roles.requireAuth = true;