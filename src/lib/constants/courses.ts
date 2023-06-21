import {CoursesProps, CoursesCategory} from '@/interfaces/courses';
import CoverImage from '../../../public/assets/images/wallpaperflare.com_wallpaper (25).jpg';
import Thumbnail from '../../../public/assets/images/wallpaperflare.com_wallpaper (4).jpg';
import Thumbnail2 from '../../../public/assets/images/wallpaperflare.com_wallpaper (11).jpg';
import Thumbnail3 from '../../../public/assets/images/wallpaperflare.com_wallpaper (10).jpg';
import Thumbnail4 from '../../../public/assets/images/wallpaperflare.com_wallpaper (24).jpg';
import Thumbnail5 from '../../../public/assets/images/wallpaperflare.com_wallpaper (27).jpg';

const coursesData: CoursesProps[] = [
    {
        id: 8,
        course: "Web designing lorem sfsd ddfs",
        slug: "web-designing",
        subcategory: ["HTML", "CSS"],
        category: "frontend-development",
        description: "few description....",
        coverImage: CoverImage,
        thumbnail: Thumbnail3
    },
    {
        id: 9,
        course: "Web designing",
        slug: "web-designing",
        subcategory: ["HTML", "CSS"],
        category: "frontend-development",
        description: "few description....",
        coverImage: CoverImage,
        thumbnail: Thumbnail4
    },
    {
        id: 10,
        course: "Web designing",
        slug: "web-designing",
        subcategory: ["HTML", "CSS"],
        category: "frontend-development",
        description: "few description....",
        coverImage: CoverImage,
        thumbnail: Thumbnail5
    },
    {
        id: 1,
        course: "React development",
        slug: "react-development",
        subcategory: "Reactjs",
        category: "frontend-development",
        description: "few description....",
        coverImage: CoverImage,
        thumbnail: Thumbnail2
    },
    
    {
        id: 2,
        course: "Dockerization",
        slug: "dockerization",
        subcategory: "Docker",
        category: "Devops",
        description: "few description....",
        coverImage: CoverImage,
        thumbnail: Thumbnail3
    },
    {
        id: 3,
        course: "Database management",
        slug: "database-management",
        subcategory: "SQL",
        category: "Backend-development",
        description: "few description....",
        coverImage: CoverImage,
        thumbnail: Thumbnail
    },
    {
        id: 4,
        course: "Building dapp's using React native and solidity",
        slug: "building-dapps-using-react-native-and-solidity",
        subcategory: ["react native", "solidity", "hardhat"],
        category: "web3",
        description: "few description....",
        coverImage: CoverImage,
        thumbnail: Thumbnail
    },
    {
        id: 5,
        course: "Build twitter clone using nextjs, python, postgrel etc.",
        slug: "build-twitter-clone-using-nextjs-python-postgrel-etc",
        subcategory: "Reactjs",
        category: "frontend-development",
        description: "few description....",
        coverImage: CoverImage,
        thumbnail: Thumbnail
    },
    {
        id: 6,
        course: "React development",
        slug: "react-development",
        subcategory: "Reactjs",
        category: "frontend-development",
        description: "few description....",
        coverImage: CoverImage,
        thumbnail: Thumbnail
    },
    {
        id: 7,
        course: "React development",
        slug: "react-development",
        subcategory: "Reactjs",
        category: "frontend-development",
        description: "few description....",
        coverImage: CoverImage,
        thumbnail: Thumbnail
    },
];

const coursesCategories: CoursesCategory[] = [
    {
        description: "course description...",
        subcategory: ["react native", "solidity", "hardhat"],
        category: "web3",
    },
    {
        description: "course description...",
        subcategory: ["HTML", "CSS"],
        category: "web-development",
    },
    {
        category: "backend-development",
        description: "course description...",
        subcategory: "php",
    },
    {
        category: "database-management",
        description: "course description...",
        subcategory: "SQL"
    },
    {
        category: "react-development",
        description: "course description...",
        subcategory: "Reactjs",
    },
    {
        category: "frontend-development",
        description: "course description...",
        subcategory: "Javascript",
    },
];

export {
    coursesData,
    coursesCategories
}    