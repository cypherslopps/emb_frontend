export type FooterLinksProps = {
    title: String,
    route: String
};

export type FooterLinkDataProps = {
    heading: "E.M.B" | "company" | "policy",
    links: Array<FooterLinksProps>
}