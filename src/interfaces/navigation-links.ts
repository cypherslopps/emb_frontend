import { IconType } from 'react-icons/lib';

type SubLinks = {
    Icon?: IconType,
    name: string,
    route: string,
    slug: string
}

interface NavigationLinksProps {
    name: String,
    route: String,
    subLinks?: Array<SubLinks>
}

export default NavigationLinksProps;