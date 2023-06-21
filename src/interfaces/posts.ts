import { StaticImageData } from 'next/image';
import AuthorProps from "./author"

interface PostProps {
    id: number,
    title: string,
    slug: string,
    thumbnail: StaticImageData,
    content: string,
    is_published?: number,
    created_at?: string,
    excerpt: string,
    date?: string,
    author: AuthorProps,
    stat: string,
    url?: string
}

export default PostProps;