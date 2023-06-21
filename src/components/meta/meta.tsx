import Head from 'next/head';
import React from 'react';

type Props = {
    title: string,
    keywords: string,
    description: string 
}

const Meta = ({ title, keywords, description }: Props) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
// {background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30' patternTransform='scale(3) rotate(135)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M3.25 10h13.5M10 3.25v13.5' transform='translate(5,0)' stroke-linejoin='round' stroke-linecap='round' stroke-width='1' stroke='hsla(259, 0%, 0%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-90,0)' fill='url(%23a)'/></svg>")}

// Polka
// background-color: #ffffff;
// opacity: 0.1;
// background-image: radial-gradient(#000000 0.75px, #ffffff 0.75px);
// background-size: 15px 15px;
Meta.defaultProps = {
    title: "Empowered Blockchain Firm",
    keywords: "web development, crypto",
    description: "lorem ipsum"
}

export default Meta;