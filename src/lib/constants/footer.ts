import { FooterLinkDataProps } from "@/interfaces/footer";

export const footerLinks: Array<FooterLinkDataProps> = [
    {
        heading: "E.M.B",
        links: [
            {
                title: "Create Account",
                route: '/register'
            },
            {
                title: "Log In",
                route: '/login'
            },
            {
                title: "Blog",
                route: '/blog'
            },
            {
                title: "Courses",
                route: '/courses'
            }
        ]
    },
    {
        heading: "company",
        links: [
            {
                title: "About",
                route: '/about'
            },
            {
                title: "Contact",
                route: '/contact'
            },
        ]
    },
    {
        heading: "policy",
        links: [
            {
                title: "Terms of Use",
                route: '/terms-of-use'
            },
            {
                title: "Privacy Policy",
                route: '/privacy-policy'
            },
        ]
    }
];