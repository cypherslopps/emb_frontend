import React from 'react';
import { useRouter } from 'next/navigation';
import { HiPlus } from 'react-icons/hi2';
import AdminLayout from '@/components/layouts/AdminLayout';
import AdminContainer from '@/components/admin-container/admin-container';
import { Button, Table, Meta } from '@/components';

const Courses = () => {
    const router = useRouter();

    const tableHeader = [
        {
            name: 'id',
            order: true
        },
        {
            name: 'course',
            order: false
        },
        {
            name: 'slug',
            order: false
        },
        {
          name: "category",
          order: true
        },
        {
          name: 'description',
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
                title="Courses"
                description="view all courses"
                keywords="view courses"
              />

            <>
                <AdminContainer
                    heading='Courses'
                    variant="full"
                    headingAction={<Button variant='fill-primary' type="button" classname="font-medium" role="link" size="sm" onClick={() => router.push("/admin/courses/create")}>
                        <HiPlus className="text-[1.06rem]" />
                        Add course
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
                        
                    {/* Course table */}
                    <Table 
                      type="courses"
                      tableHeader={tableHeader}
                    />
                </AdminContainer>
            </>
        </>
    )
}

export default Courses;

Courses.getLayout = (page: any) => {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}

// Courses.requireAuth = true;