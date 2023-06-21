import React, { useState, useEffect, FormEvent } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import AdminLayout from '@/components/layouts/AdminLayout';
import AdminContainer from '@/components/admin-container/admin-container';
import { FormInput, FormSelect, Filepond, Button } from '@/components';
import useHandleFormInputs from '@/hooks/useHandleFormInputs'; 
import axiosClient from '@/lib/axiosClient';
import useAuth from '@/hooks/useAuth';
import {fillSlug} from '@/utils/fill-slug';

const TiptapEditor = dynamic(() => import("@/components/tiptap-editor/tiptap-editor"), { ssr: false });


type Props = {};

const CreatePost = (props: Props) => {
    const { csrf, user } = useAuth({ middleware: "auth" });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [content, setContent] = useState("");
    const [thumbnail, setThumbnail] = useState<Array<object> | null>(null);
    const { handleChange, formData: userData, setFormData: setUserData } = useHandleFormInputs({
        title: "",
        slug: "",
        tags: "",
        excerpt: ""
    });

    const [roleError, setRoleError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [slugError, setSlugError] = useState("");
    const [tagsError, setTagsError] = useState("");
    const [thumbnailError, setThumbnailError] = useState("");
    const [contentError, setContentError] = useState("");
    const [excerptError, setExcerptError] = useState("");
    const isValid = Object.values(userData).every(value => Boolean(value));


    // Fill slug input
    // function fillSlug({ target: { value }}) {
    //     const replacePostTitleSpacesWithDashes = value.toLowerCase().trim().replaceAll(" ", "-");

    //     // Set post slug
    //     setUserData({ ...userData, slug: replacePostTitleSpacesWithDashes });
    // }

    // Submit new post
    async function addNewPost(e: FormEvent) {
        e.preventDefault();

        if(!Object.values(content).length || !content)
            setContentError("Please add a post content");
        else
            setContentError("");

        if(isValid) {
            await csrf();

            setIsLoading(true);

            try {
                const response = await axiosClient.post("/posts", userData)
                console.log(response);
                setIsLoading(false);
            } catch(error) {
                console.log(error);
                setIsLoading(false);
            }
        }
    }

    function handleValidation() {
        if(!userData.role) 
            setRoleError("Please select a role");
        else 
            setRoleError("");

        if(!userData.title)
            setTitleError("Please add a post title");
        else
            setTitleError("");

        if(!userData.slug)
            setSlugError("Please add a post title");
        else
            setSlugError("");

        if(!thumbnail) 
            setThumbnailError("Add thumbnail for blog post")
        else 
            setThumbnailError("");

        if(!userData.excerpt)
            setExcerptError("Please add a post content");
        else
            setExcerptError("");
    }

    return (
        <>
            <Head>
                <title>Dashboard - Create new post</title>
            </Head>

            <>
                <AdminContainer heading='Create new post'>
                    <form onSubmit={addNewPost} className="grid grid-cols-1 border border-gray-300 shadow-sm shadow-gray-100 bg-white rounded-xl p-8" noValidate>
                        <div className="space-y-6">
                            <FormSelect 
                                name="role"
                                label="role"
                                value={userData.role}
                                error={roleError}
                                onChange={handleChange}
                                labelSign
                            />

                            <FormInput 
                                type="text"
                                name="title"
                                label="Title"
                                value={userData.title}
                                error={titleError}
                                onKeyUp={({ target }) => setUserData({...userData, slug: fillSlug(target.value)})}
                                onChange={handleChange}
                                labelSign
                            />

                            <FormInput 
                                type="text"
                                name="slug"
                                label="Slug"
                                value={userData.slug}
                                error={slugError}
                                onChange={handleChange}
                                labelSign
                                disabled
                            />

                            {/*<FormSelect 
                                name="tags"
                                label="tags"
                                value={userData.tags}
                                error={tagsError}
                                onChange={handleChange}
                                labelSign
                            />*/}

                            <Filepond 
                                name="thumbnail"
                                file={thumbnail}
                                setFile={setThumbnail}
                                label="Image"
                                error={thumbnailError}
                            />

                            <TiptapEditor 
                                setEditor={setContent} 
                                error={contentError} 
                                label="Content"
                            />

                            <FormInput 
                                type="text"
                                name="excerpt"
                                label="Excerpt"
                                value={userData.excerpt}
                                error={excerptError}
                                onChange={handleChange}
                                labelSign
                            />
                        </div>

                        <div className="flex justify-end mt-7">
                            <Button
                                type="submit"
                                role="create-post"
                                isLoading={isLoading}
                                variant="fill-primary"
                            >Create post</Button>
                        </div>
                    </form>
                </AdminContainer>
            </>
        </>
    )
}

export default CreatePost;

CreatePost.getLayout = (page: any) => {
    return (
        <AdminLayout>{page}</AdminLayout>
    )
}

// CreatePost.requireAuth = true;