import { IoBook, IoPeople, IoFolder } from 'react-icons/io5';
import FeaturesProps from '@/interfaces/features';

const features: FeaturesProps[] = [
    {
        title: "Earn 2 certificates",
        content: "All Side Hustle Internship finalists will be awarded a paid certificate of completion at the end of the Internship and a free soft skills certificate from Jobberman",
        Icon: IoBook
    },
    {
        title: "Learn from the very best",
        content: "Learning is a wonderful experience, and learning from the best makes everything ten times easier. The Side Hustle Internship mentors and lead instructors are all here to make your Internship experience unforgettable.",
        Icon: IoPeople
    },
    {
        title: "Get hands-on experience",
        content: "During the Side Hustle Internship, you will be assigned projects and team assignments that will give you the needed experience, and help you build your portfolio, teamwork, and communication skills.",
        Icon: IoFolder
    }
];

export default features;