// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Meta Pixel Code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '426060596922756');
              fbq('track', 'PageView');
              `,
            }}
          />
          {/* End Meta Pixel Code */}
          <link
            rel="icon"
            href="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/favicon.webp"
          />
          <meta name="theme-color" content="#4f419a" />
          <meta
            name="google-site-verification"
            content="ApFxypvGKhEs1yw6DqReZK5Sxm0WnYZFoaeciGRaWRU"
          />
          <meta name="robots" content="NOODP,NOYDIR" />
          <meta name="HandheldFriendly" content="true" />
          <meta name="distribution" content="global" />
          <meta
            name="copyright"
            content="Skillslash - Project Based Experiential Learning Platform."
          />
          <meta name="language" content="English" />
          <meta name="rating" content="general" />
          <meta name="revisit-after" content="Daily" />
          <meta name="author" content="skillslash" />
          <meta name="googlebot" content="index,follow" />
          <meta name="bingbot" content="index,follow" />
          <meta name="expires" content="never" />
          <meta name="coverage" content="Worldwide" />
          <meta name="robots" content="ALL" />
        </Head>
        <body>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=426060596922756&ev=PageView&noscript=1"
              alt="facebook pixel"
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
