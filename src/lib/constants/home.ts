import ContentProps from '@/interfaces/home';
import MissonImage from '../../../public/assets/images/wallpaperflare.com_wallpaper (8).jpg';
import VisionImage from '../../../public/assets/images/wallpaperflare.com_wallpaper (7).jpg';

export const missionContent: ContentProps = {
    headline: "mission",
    headlineColor: "bg-gradient-to-r from-blue-500 dark:from-blue-600 to-blue-600 dark:to-blue-700 text-transparent bg-clip-text",
    title: "Be part of us",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis nobis unde dolorum nemo sequi officiis aspernatur sunt rem, maiores eligendi voluptates est placeat. Tempora vel architecto officiis quis quam.",
    imageSource: MissonImage
};

export const visionContent: ContentProps = {
    headline: "vision",
    headlineColor: "bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text",
    title: "Live our future",
    content: "Our vision is to train, mentor and empower two (2) million africans by helping them acquire  the neccessary skills they require to become relevant in the Blockchain/Web3 industry.",
    imageSource: VisionImage
};
