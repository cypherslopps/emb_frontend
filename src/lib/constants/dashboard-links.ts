import { IoBookOutline, IoFolderOutline, IoHomeOutline, IoLinkOutline, IoLockClosedOutline, IoPeopleOutline, IoTabletLandscapeOutline } from "react-icons/io5";
import DashboardLinksProps from "@/interfaces/dashboard-links";

export const adminDashboardLinks: Array<DashboardLinksProps> = [
    {
        name: "dashboard",
        Icon: IoHomeOutline,
        route: "/dashboard"
    },
    {
        name: "posts",
        Icon: IoTabletLandscapeOutline,
        route: "/dashboard/posts",
    },
    {
        name: "courses",
        Icon: IoBookOutline,
        route: "/dashboard/courses"
    },
    {
        name: "users",
        Icon: IoPeopleOutline,
        route: "/dashboard/users" 
    }
];

export const settings: Array<DashboardLinksProps> = [
    {
        name: "roles",
        Icon: IoFolderOutline,
        route: "/dashboard/roles"
    },
    {
        name: "permissions",
        Icon: IoLockClosedOutline,
        route: "/dashboard/permissions"
    },
    {
        name: "job roles",
        Icon: IoLinkOutline,
        route: "/dashboard/job-roles"
    }
]