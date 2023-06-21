import { StaticImageData } from "next/image"

interface CarouselProps {
    image: StaticImageData,
    title: string,
    route: "/courses/frontend-development" | "/courses/content-creation" | "/courses/backend-development"
}

export default CarouselProps;