// import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/form.css";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Script
        type="text/javascript"
        id="zsiqchat"
        dangerouslySetInnerHTML={{
          __html: `
        var $zoho=$zoho || {};
        $zoho.salesiq = $zoho.salesiq || {widgetcode: "siq69d23de7c07a840e811eb99d28cfba44ec96ea04cb91a8975de94be5e6e502c1", values:{},ready:function(){}};
        var d=document;
        var s=d.createElement("script");
        s.type="text/javascript";
        s.id="zsiqscript";
        s.defer=true;
        s.src="https://salesiq.zohopublic.in/widget";
        var t=d.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(s,t);
      `,
        }}
        strategy="lazyOnload"
      /> */}
      <main className={montserrat.className}>
        <Component {...pageProps} />
        <GoogleTagManager gtmId="GTM-WJVZHTB" />
      </main>
    </>
  );
}

export default MyApp;
