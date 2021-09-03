import PlausibleProvider from 'next-plausible'
import 'tailwindcss/tailwind.css'
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return (
        <PlausibleProvider
            domain="next-tailwind.aaron-dev.nl"
            customDomain="https://analytics.aaron-dev.nl"
            selfHosted={true}
            trackOutboundLinks={true}
        >
            <Head>
                <script async defer data-domain="next-tailwind.aaron-dev.nl" src="http://analytics.aaron-dev.nl/js/plausible.js"/>
                <script defer data-domain="next-tailwind.aaron-dev.nl" src="/js/script.js"/>
            </Head>
            <Component {...pageProps} />
        </PlausibleProvider>
    );
}

export default MyApp
