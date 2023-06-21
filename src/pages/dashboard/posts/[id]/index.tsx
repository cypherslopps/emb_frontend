import React from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/layouts/AdminLayout';
import AdminContainer from '@/components/admin-container/admin-container';
import { Button, PostOverview } from '@/components';
import postsData from '@/lib/constants/posts';
import PostProps from '@/interfaces/posts';

const Post = ({ post }: { post: PostProps }) => {
    const router = useRouter();

    return (
        <>
            <AdminContainer 
                heading={`Post - ${post?.title}`}
                headingAction={
                    <Button 
                        variant='fill-primary' 
                        type="button" 
                        role="link"
                        onClick={() => router.push(`/admin/posts/${post.id}/edit`)}
                    >
                        Edit post
                    </Button>}
            >
                <PostOverview {...post} stat="1 min" />
            </AdminContainer>
        </>
    )
}

type Params = {
    params: {
        id: string
    }
}

export async function getStaticPaths() {
    const params = postsData.map(({ id }) => ({
        params: { id: String(id) }
    }));

    return {
        fallback: false,
        paths: params
    }
}

export async function getStaticProps({ params }: Params) {
    const post = postsData.filter(({ id }) => params?.id === String(id))[0];

    return {
        props: {
            post
        }
    }
}

export default Post;

Post.getLayout = (page: any) => {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}

Post.requireAuth = true;