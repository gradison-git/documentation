import React from 'react'
import {DocsThemeConfig, useConfig} from 'nextra-theme-docs'
import {useRouter} from "next/router";
import Image from "next/image";

const config: DocsThemeConfig = {
    darkMode: true,
    logo: <Image src="/favicon.png"  alt="Icon" width={48} height={48}/>,
    chat: {
        link: 'https://gradison.ca/discord',
    },
    // @ts-ignore
    footer: false,
    primaryHue: {dark: 136, light: 136},
    primarySaturation: {dark: 60, light: 60},
    head: () => {
        const {asPath} = useRouter()

        const {frontMatter} = useConfig();
        const url = 'https://gradison.ca/' + asPath as string
        return (
            <>
                <link
                    rel="shortcut icon"
                    href="/favicon.png"

                />
                <meta property="og:url" content={url}/>
                <meta property="og:image" content="/thumbnail.png" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content={frontMatter.description || ""}
                />
                <meta
                    property="keywords"
                    content="Gradison, AI, Artificial Intelligence, GPT, Tech, 2023"
                />
                <meta
                    property="twitter:card"
                    content="summary_large_image"
                />
                <meta
                    property="twitter:url"
                    content={url}
                />
                <meta
                    property="twitter:title"
                    content="Gradison Documentation"
                />
                <meta
                    property="twitter:description"
                    content="Read more about what we have to say here in our documentation!"
                />
                <meta
                    property="twitter:image"
                    content="/thumbnail.png"
                />
            </>
        )
    },
    useNextSeoProps: () => {
        const {asPath} = useRouter()
        const seo = {}

        if (asPath !== '/') seo['titleTemplate'] = '%s | Gradison'
        else seo['titleTemplate'] = 'Gradison Documentation'

        return seo
    }
}

export default config
