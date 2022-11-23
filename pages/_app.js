import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Script from 'next/script'
config.autoAddCss = false
// 

function MyApp({ Component, pageProps }) {
  return (<>
    <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXNEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    <Script strategy='lazyOnload' id='google-tag'>
      {
        `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', ${process.env.NEXNEXT_PUBLIC_GOOGLE_ANALYTICS});`
      }
    </Script>
    <Component {...pageProps} />
  </>)
}

export default MyApp
