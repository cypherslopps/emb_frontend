import React from 'react';
import Head from 'next/head';
import { IoAdd } from 'react-icons/io5';
import AdminLayout from '@/components/layouts/AdminLayout';
import AdminContainer from '@/components/admin-container/admin-container';
import { Button, Table, Stats, Meta } from '@/components';
import stats from '@/lib/constants/stats';
import postsData from '@/lib/constants/posts';
import { useRouter } from 'next/router';

const Tags = () => {
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
                title="Tags"
                description="add post tag"
                keywords="tags"
            />


            <AdminContainer
                heading='Tags'
                headingAction={<Button variant='fill-primary' type="button" role="link" size="sm" onClick={() => router.push("/dashboard/Tags/create")}>
                    <IoAdd className="text-[1.04rem]" />
                    Add post
                </Button>}
                variant="full"
            >
                {/* Widget */}
                <div className="widgets grid gap-4 lg:gap-8 md:grid-cols-3 mb-9">
                    {stats.map(stat => (
                        <Stats 
                            key={stat.stat}
                            {...stat}
                        /> 
                    ))}
                </div>
                    
                {/* Post table */}
                <Table 
                    type="Tags"
                    tableHeader={tableHeader}
                    tableData={TagsData}
                />
            </AdminContainer>
        </>
    )
}

export default Tags;

Tags.getLayout = (page: any) => {
    return (
        <AdminLayout>{page}</AdminLayout>
    )
}

// Tags.requireAuth = true;