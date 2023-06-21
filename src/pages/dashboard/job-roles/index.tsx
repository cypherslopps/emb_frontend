import React from 'react';
import Head from 'next/head';
import { HiPlus } from 'react-icons/hi2';
import AdminLayout from '@/components/layouts/AdminLayout';
import AdminContainer from '@/components/admin-container/admin-container';
import { Button, Table, Stats, Meta } from '@/components';
// import stats from '@/lib/constants/stats';
import postsData from '@/lib/constants/posts';
import { useRouter } from 'next/router';

const JobRoles = () => {
    const router = useRouter();
    
    const tableHeader = [
        {
            name: 'id',
            order: true
        },
        {
            name: 'title',
            order: true
        },
        {
            name: 'slug',
            order: true
        },
        {
            name: 'is published',
            order: false
        },
        {
            name: 'thumbnail',
            order: false
        }
    ];
    
    return (
        <>
            <Meta 
                title="JobRoles"
                description="view all job roles"
                keywords="job roles"
            />

            <AdminContainer
                heading='Job Roles'
                headingAction={<Button variant='fill-primary' type="button" role="link" classname="font-medium" size="sm" onClick={() => router.push("/dashboard/job-roles/create")}>
                    <HiPlus className="text-[1.06rem]" />
                    Add job role
                </Button>}
                variant="full"
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
                    type="job-roles"
                    tableHeader={tableHeader}
                />
            </AdminContainer>
        </>
    )
}

export default JobRoles;

JobRoles.getLayout = (page: any) => {
    return (
        <AdminLayout>{page}</AdminLayout>
    )
}

// JobRoles.requireAuth = true;