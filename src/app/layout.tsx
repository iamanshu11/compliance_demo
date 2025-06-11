import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PopupTalkToExpertProvider from "@/context/PopupTalkToExpertContext";
import { generateMetadata } from "./config/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...generateMetadata('home'),
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: ['/favicon.svg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0KP18LPNGM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0KP18LPNGM');
          `}
        </Script>

        {/* Zoho SalesIQ */}
        <Script id="zoho-salesiq" strategy="afterInteractive">
          {`
            window.$zoho = window.$zoho || {};
            $zoho.salesiq = $zoho.salesiq || {
              ready: function() {}
            }
          `}
        </Script>
        <Script
          id="zoho-salesiq-widget"
          src="https://salesiq.zohopublic.in/widget?wc=siqb79ad896bc9c0dd5f9369224612247a72e080f18f37d1c945370e1ef610b1661"
          strategy="afterInteractive"
        />

        {/* PageSense */}
        <Script id="pagesense" strategy="afterInteractive">
          {`
            (function(w, s) {
              var e = document.createElement("script");
              e.type = "text/javascript";
              e.async = true;
              e.src = "https://cdn-in.pagesense.io/js/remitso263/85dc5abec3df4d0ea6f39388df0c4f8f.js";
              var x = document.getElementsByTagName("script")[0];
              x.parentNode.insertBefore(e, x);
            })(window, "script");
          `}
        </Script>

        {/* Factors.ai */}
        <Script id="factors-ai" strategy="afterInteractive">
          {`
            window.faitracker = window.faitracker || function() {
              this.q = [];
              var t = new CustomEvent("FAITRACKER_QUEUED_EVENT");
              return this.init = function(t, e, a) {
                this.TOKEN = t, this.INIT_PARAMS = e, this.INIT_CALLBACK = a, window.dispatchEvent(new CustomEvent("FAITRACKER_INIT_EVENT"))
              }, this.call = function() {
                var e = {
                  k: "",
                  a: []
                };
                if (arguments && arguments.length >= 1) {
                  for (var a = 1; a < arguments.length; a++) e.a.push(arguments[a]);
                  e.k = arguments[0]
                }
                this.q.push(e), window.dispatchEvent(t)
              }, this.message = function() {
                window.addEventListener("message", function(t) {
                  "faitracker" === t.data.origin && this.call("message", t.data.type, t.data.message)
                })
              }, this.message(), this.init("oe3qqkoz3z7z4awvdwpe4l68o0ofb9s2", {
                host: "https://api.factors.ai"
              }), this
            }();
          `}
        </Script>
        <Script
          src="https://app.factors.ai/assets/factors.js"
          strategy="afterInteractive"
        />

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "q8onffkjil");
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <PopupTalkToExpertProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </PopupTalkToExpertProvider>
      </body>
    </html>
  );
}
