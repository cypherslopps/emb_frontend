import Head from 'next/head';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/layouts/AdminLayout';
import AdminContainer from '@/components/admin-container/admin-container';
import { Button, Stats, Table, Meta, FormInput } from '@/components';
import stats from '@/lib/constants/stats';
import { fillSlug } from '@/utils/fill-slug';

const AddCourse = () => {
    const router = useRouter();
    const { csrf } = useAuth({ middleware: "auth" });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [thumbnail, setThumbnail] = useState<Array<object> | null>(null);
    const { handleChange, formData: courseData, setFormData: setCourseData } = useHandleFormInputs({
        title: "",
        slug: "",
        category: "",
        description: ""
    });

    const [titleError, setTitleError] = useState("");
    const [slugError, setSlugError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [thumbnailError, setThumbnailError] = useState("");
    const [postTextareaDataError, setPostTextareaDataError] = useState("");
    const [excerptError, setExcerptError] = useState("");
    const isValid = Object.values(courseData).every(value => Boolean(value));

    // Submit new post
    async function addNewPost(e: FormEvent) {
        e.preventDefault();

        if(isValid) {
            await csrf();

            setIsLoading(true);

            const data = {
                ...courseData,
                thumbnail,
                content: postTextareaData
            };

            try {
                const response = await axiosClient.post("/posts", data)
                console.log(response);
                setIsLoading(false);
                toast.success("Course successfully added");
            } catch(error) {
                console.log(error);
                setIsLoading(false);
                toast.error("There was an error adding course");
            }
        }
    }

    function handleValidation() {
        if(!courseData.title)
            setTitleError("Please add a post title");
        else
            setTitleError("");

        if(!courseData.slug)
            setSlugError("Please add a post title");
        else
            setSlugError("");
        
        if(!Object.values(postTextareaData).length)
            setPostTextareaDataError("Please add a post content");
        else
            setPostTextareaDataError("");

        if(!thumbnail) 
            setThumbnailError("Add thumbnail for blog post")
        else 
            setThumbnailError("");

        if(!courseData.excerpt)
            setExcerptError("Please add a post content");
        else
            setExcerptError("");
    }
    
    return (
        <>
            <Meta 
                title="Courses"
                description="view all courses"
                keywords="courses"
            />

            <Toaster />

            <>
                <AdminContainer heading='Create new post'>
                    <form onSubmit={addNewPost} className="grid grid-cols-1 border border-gray-300 shadow-sm shadow-gray-100 bg-white rounded-xl p-8" noValidate>
                        <div className="space-y-6">
                            <FormInput 
                                type="text"
                                name="title"
                                label="Title"
                                value={courseData.title}
                                error={titleError}
                                onKeyUp={({ target }) => setCourseData({...courseData, slug: fillSlug(target.value)})}
                                onChange={handleChange}
                                labelSign
                            />

                            <FormInput 
                                type="text"
                                name="slug"
                                label="Slug"
                                value={courseData.slug}
                                error={slugError}
                                onChange={handleChange}
                                labelSign
                                disabled
                            />

                            {/*<FormSelect 
                                name="tags"
                                label="tags"
                                value={courseData.tags}
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

                            <TiptapEditor />

                            <FormInput 
                                type="text"
                                name="excerpt"
                                label="Excerpt"
                                value={courseData.excerpt}
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

export default AddCourse;

AddCourse.getLayout = (page: any) => {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}

// AddCourse.requireAuth = true;