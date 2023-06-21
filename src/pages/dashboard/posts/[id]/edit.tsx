import React, { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import AdminLayout from '@/components/layouts/AdminLayout';
import AdminContainer from '@/components/admin-container/admin-container';
import { Button, FormInput, Filepond, Meta } from '@/components';
import postsData from '@/lib/constants/posts';
import PostProps from '@/interfaces/posts';
import useHandleFormInputs from '@/hooks/useHandleFormInputs'; 
import { getAllPosts, getSinglePost } from '@/utils/apis/posts';

const EditPost = () => {
    const router = useRouter();
    const postSlug = router.query.slug;
    const { handleChange, formData: postData , setFormData: setPostData } = useHandleFormInputs({
        title: "",
        slug: "",
        thumbnail: "",
        content: "",
        excerpt: ""
    });

    const [titleError, setTitleError] = useState("");
    const [slugError, setSlugError] = useState("");
    const [contentError, setContentError] = useState("");
    const [excerptError, setExcerptError] = useState("");

    // Get post data 
    const { data, error } = useSWR(
        `/posts/${postSlug}`,
        () => getSinglePost(postSlug)
    );
    console.log(data, error, "postData");

    // if(error) 
    //     router.push("/404");

    // Submit new post
    function editPost(e: FormEvent) {
        e.preventDefault();

        if(!postData.title)
            setTitleError("Please add a post title");
        else
            setTitleError("");

        if(!postData.slug)
            setSlugError("Please add a post title");
        else
            setSlugError("");
        
        if(!postData.content)
            setContentError("Please add a post content");
        else
            setContentError("");

        if(!postData.excerpt)
            setExcerptError("Please add a post content");
        else
            setExcerptError("");


        const isValid = Object.values(postData).every(value => Boolean(value));

        if(isValid) {
            console.log("validated form");
        }
    }

    useEffect(() => {
        // Set post data
        setPostData({
            ...postData,
            title: data?.title,
            slug: data?.slug,
            thumbnail: data?.thumbnail,
            content: data?.thumbnail,
            excerpt: data?.excerpt
        });

        return () => {
            setPostData({
                title: "",
                slug: "",
                thumbnail: "",
                content: "",
                excerpt: ""
            })
        }
    }, []);

    return (
        <>
            <Meta 
                title="Edit post"
                description="edit post"
            />

            <AdminContainer 
                heading={`Post - ${postData?.title}`}
                headingAction={
                    <Button 
                        variant='accent' 
                        type="button" 
                        role="link"
                        onClick={() => router.prefetch(`/admin/posts/${postId}/edit`)}
                    >
                        Delete post
                    </Button>}
            >
                <form onSubmit={editPost} noValidate> 
                    <div className="grid grid-cols-1 gap-6 border border-gray-200 shadow-sm shadow-gray-100 bg-white rounded-xl p-8">
                        <FormInput 
                            type="text"
                            name="title"
                            label="Title"
                            value={postData.title}
                            error={titleError}
                            onChange={handleChange}
                            labelSign
                        />

                        <FormInput 
                            type="text"
                            name="slug"
                            label="Slug"
                            value={postData.slug}
                            error={slugError}
                            onChange={handleChange}
                            labelSign
                        />
                        
                        <Filepond 
                            name="thumbnail"
                            label="Images"
                        />

                        <FormInput 
                            type="text"
                            name="content"
                            label="Content"
                            value={postData.content}
                            error={contentError}
                            onChange={handleChange}
                            labelSign
                        />

                        <FormInput 
                            type="text"
                            name="excerpt"
                            label="Excerpt"
                            value={postData.excerpt}
                            error={excerptError}
                            onChange={handleChange}
                            labelSign
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-x-2 mt-7">
                        <Button
                            type="submit"
                            role="create-post"
                            variant="fill-primary"
                        >Save changes</Button>
                    </div>
                </form>
            </AdminContainer>
        </>
    )
}

// type Params = {
//     params: {
//         id: string
//     }
// }

// export async function getStaticPaths() {
//     const posts = await getAllPosts();
//     // const params = posts.map(({ id }) => ({
//     //     params: { id: String(id) }
//     // }));

//     return {
//         paths: paths,
//         fallback: false
//     }
// }

// export async function getStaticProps({ params }: Params) {
//     const post = await getSinglePost(params.id);
//     console.log(post)

//     return {
//         props: {
//             post
//         }
//     }
// }

export default EditPost;

EditPost.getLayout = (page: any) => {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}
