import { StaticImageData } from "next/image";

interface AuthorProps {
    id: number,
    fullname: string,
    email: string,
    role: string | [],
    image?: StaticImageData
};

export default AuthorProps;