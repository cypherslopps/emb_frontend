import { IconType } from "react-icons/lib";

type SubLinks = {
    name: string,
    SubIcon: IconType,
    route: string,
}

type DashboardLinksProps = {
    name: string,
    Icon: IconType,
    route: string,
    subLinks?: SubLinks[]
};


export default DashboardLinksProps;