import PostProps from "@/interfaces/posts";
import ThumbnailImage from '../../../public/assets/images/wallpaperflare.com_wallpaper (24).jpg';

const postsData: PostProps[] = [
    {
        id: 0,
        title: "First post",
        slug: 'first-post',
        content: "first post is the first of it's kind",
        excerpt: "first post is the first...",
        thumbnail: ThumbnailImage,
        date: "Mar 16, 2023",
        author: {
            id: 4,
            fullname: "Author name",
            role: "Author role",
            email: "Email"
        }
    },
    {
        id: 1,
        title: "Second post",
        slug: 'second-post',
        content: "Second post is the second of it's kind",
        excerpt: "second post is the second...",
        thumbnail: ThumbnailImage,
        date: "Mar 16, 2023",
        author: {
            id: 14,
            fullname: "Author name",
            role: "Author role",
            email: "Email"
        }
    },
    {
        id: 2,
        title: "Third post",
        slug: 'third-post',
        content: "Third post is the third of it's kind",
        excerpt: "third post is the third...",
        thumbnail: ThumbnailImage,
        date: "Mar 16, 2023",
        author: {
            id: 32,
            fullname: "Author name",
            role: "Author role",
            email: "Email"
        }
    },
    {
        id: 3,
        title: "Fourth post",
        slug: 'fourth-post',
        content: "Fourth post is the fourth of it's kind",
        excerpt: "fourth post is the fourth...",
        thumbnail: ThumbnailImage,
        date: "Mar 16, 2023",
        author: {
            id: 90,
            fullname: "Author name",
            role: "Author role",
            email: "Email"
        }
    },
    {
        id: 4,
        title: "Fifth post",
        slug: 'fifth-post',
        content: "fifth post is the fifth of it's kind",
        excerpt: "fifth post is the first...",
        thumbnail: ThumbnailImage,
        date: "Mar 16, 2023",
        author: {
            id: 53,
            fullname: "Author name",
            role: "Author role",
            email: "Email"
        }
    }
];

export default postsData;