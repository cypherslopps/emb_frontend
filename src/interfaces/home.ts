import { StaticImageData } from 'next/image'

type ContentProps = {
    headline: 'mission' | 'vision',
    headlineColor: String,
    title: String,
    content: String,
    imageSource: StaticImageData
};

export default ContentProps;