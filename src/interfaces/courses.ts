import { StaticImageData } from "next/image";

export interface CoursesProps {
    id: string | number,
    course: string,
    slug: string,
    subcategory?: string[] | string,
    category: string,
    description?: string,
    coverImage?: string | StaticImageData,
    thumbnail: string | StaticImageData
};

export interface CoursesCategory  {
    subcategory: string[] | string,
    category: string,
    description: string
}
