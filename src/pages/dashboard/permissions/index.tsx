import React from 'react';
import { useRouter } from 'next/router';
import { HiPlus } from 'react-icons/hi2';
import AdminLayout from '@/components/layouts/AdminLayout';
import AdminContainer from '@/components/admin-container/admin-container';
import { Button, Table, Stats, Meta } from '@/components';
import stats from '@/lib/constants/stats';
import PermissionsData from '@/lib/constants/roles';

const Permissions = () => {
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
            title="Permissions"
            description="view all user permissions"
            keywords="user permissions"
          />

          <>
              <AdminContainer
                  heading='Permissions'
                  variant="full"
                  headingAction={<Button variant='fill-primary' size="sm" classname="font-medium" type="button" role="link" onClick={() => router.push("/dashboard/permissions/create")}>
                      <HiPlus className="text-[1.06rem]" />
                      Add permission
                  </Button>}
              >                      
                {/* Permissions table */}
                <Table 
                    type="permissions"
                    tableHeader={tableHeader}
                    tableData={PermissionsData}
                />
              </AdminContainer>
          </>
      </>
  )
}

export default Permissions;

Permissions.getLayout = (page: any) => {
    return (
        <AdminLayout>{page}</AdminLayout>
    )
}

// Permissions.requireAuth = true;