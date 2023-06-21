import React from 'react';
import Head from 'next/head';
import { HiPlus } from 'react-icons/hi2';
import AdminLayout from '@/components/layouts/AdminLayout';
import AdminContainer from '@/components/admin-container/admin-container';
import { Button, Table, Meta, Widgets } from '@/components';
import { useRouter } from 'next/router';
import { getPostStats } from '@/utils/apis/posts';

function Posts({ stats }) {
    const router = useRouter();
    console.log(stats, "post stats")    
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
                title="Posts"
                description="view all posts"
                keywords="posts"
            />

            <AdminContainer
                heading='Posts'
                headingAction={<Button variant='fill-primary' type="button" role="link" classname="font-medium" size="sm" onClick={() => router.push("/dashboard/posts/create")}>
                    <HiPlus className="text-[1.06rem]" />
                    Add post
                </Button>}
            >
                {/* Widget */}
                <Widgets stats={stats} />
                    
                {/* Post table */}
                <Table 
                    type="posts"
                    tableHeader={tableHeader}
                    totalCount={stats?.posts_count}
                />
            </AdminContainer>
        </>
    )
}

export default Posts;

export async function getStaticProps() {
    const stats = await getPostStats();

    return {
        props: {
            stats
        }
    }
}

Posts.getLayout = (page: any) => {
    return (
        <AdminLayout>{page}</AdminLayout>
    )
}