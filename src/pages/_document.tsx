import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en" className="dark selection:text-white selection:bg-red-600">
      <Head>
        <Script src="../../public/richtexteditor/rte.js" />  
        <Script src='../../public/richtexteditor/plugins/all_plugins.js' />
      </Head>
      <body className='bg-white text-gray-900 dark:bg-dark-100 dark:text-dark-text-tint-700 min-h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
