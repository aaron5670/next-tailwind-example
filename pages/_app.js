import PlausibleProvider from 'next-plausible'
import 'tailwindcss/tailwind.css'

function MyApp({Component, pageProps}) {
    return (
        <PlausibleProvider
            domain="next-tailwind.aaron-dev.nl"
            customDomain="analytics.aaron-dev.nl"
            selfHosted={true}
            trackOutboundLinks={true}
        >
            <Component {...pageProps} />
        </PlausibleProvider>
    );
}

export default MyApp
