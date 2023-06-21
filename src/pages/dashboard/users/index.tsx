import React from 'react';
import { useRouter } from 'next/router';
import { HiPlus } from 'react-icons/hi2';
import AdminLayout from '@/components/layouts/AdminLayout';
import AdminContainer from '@/components/admin-container/admin-container';
import { Button, Table, Stats, Meta } from '@/components';
// import stats from '@/lib/constants/stats';
import usersData from '@/lib/constants/users';

const Users = () => {
  const router = useRouter();
  
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
          title="Users"
          description="View all users"
          keywords="view users"
         />

        <>
            <AdminContainer
                heading='Users'
                headingAction={<Button variant='fill-primary' type="button" size="sm" classname="font-medium" role="link" onClick={() => router.push("/dashboard/users/create")}>
                    <HiPlus className="text-[1.06rem]" />
                    Add user
                </Button>}
            >
                {/* Widget */}
                {/*<div className="widgets grid gap-4 lg:gap-8 md:grid-cols-3 mb-9">
                    {stats.map(stat => (
                        <Stats 
                            key={stat.stat}
                            {...stat}
                        /> 
                    ))}
                </div>*/}
                    
                {/* Post table */}
                <Table 
                    type="users"
                    tableHeader={tableHeader}
                    tableData={usersData}
                />
            </AdminContainer>
        </>
      </>
  )
}

export default Users;

Users.getLayout = (page: any) => {
    return (
        <AdminLayout>{page}</AdminLayout>
    )
}

// Users.requireAuth = true;