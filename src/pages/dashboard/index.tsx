import React, { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import AdminLayout from '@/components/layouts/AdminLayout';
import { Meta } from '@/components';
import getAllPosts from '@/utils/posts/getAllPosts';
import { requireAuthentication } from '@/utils/requireAuthentication';

type Props = {}

const Dashboard = (props: Props) => {    
  return (
    <>
      <Meta 
        title="Dashboard"
        description="dashboard"
        keywords="embf admin dashboard"
       />
      
      <h1>Content</h1>
    </>
  )
}

export default Dashboard;

// export async function getServerSideProps(context: any): GetServerSideProps {
//   return requireAuthentication(context, ({ user }) => {
//     console.log(user, "dashboard");
//     return {
//       props: {
//         user
//       }
//     }
//   })
// }

Dashboard.getLayout = (page: any) => {
  return (
    <AdminLayout>{page}</AdminLayout>
  );
}