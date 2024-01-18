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
      <Script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=26328f0b-05d1-4cd3-a18c-bd2fdd408471"
        strategy="afterInteractive"
      />
      <main className={montserrat.className}>
        <Component {...pageProps} />
        <GoogleTagManager gtmId="GTM-WJVZHTB" />
      </main>
    </>
  );
}

export default MyApp;
