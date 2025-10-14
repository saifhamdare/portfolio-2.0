import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';
import { Providers } from './providers';
import Header from '@/components/Header';
import Template from './template';
import BottomBar from '@/components/BottomBar';
import Script from 'next/script';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '800'] });

export const metadata: Metadata = {
    title: "Saif Portfolio",
    description:
      "Frontend Developer & Life Enthusiast: I’m the guy who’s been crafting beautiful, responsive websites for over 2 years, working with cool tools like ReactJS, NextJS, Shadcn, Material UI, and Ant Design.",
    openGraph: {
      title: "Saif Portfolio",
      siteName: "Saif Portfolio",
      url: "https://saifhamdare-portfolio.netlify.app",
      type: "website",
      description:
        "Frontend Developer & Life Enthusiast: I’m the guy who’s been crafting beautiful, responsive websites for over 2 years, working with cool tools like ReactJS, NextJS, Shadcn, Material UI, and Ant Design.",
      images: [
        {
          url: "https://cdn.freebiesupply.com/logos/large/2x/s-bahn-1-logo-png-transparent.png",
          alt: "Portfolio logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Saif Portfolio",
      description:
        "Frontend Developer & Life Enthusiast: I’m the guy who’s been crafting beautiful, responsive websites for over 2 years, working with cool tools like ReactJS, NextJS, Shadcn, Material UI, and Ant Design.",
      images: [
        {
          url: "https://cdn.freebiesupply.com/logos/large/2x/s-bahn-1-logo-png-transparent.png",
          alt: "Portfolio logo",
        },
      ],
    },
  };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
   <html lang='en'>

      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': 
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T9H962MC');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body suppressHydrationWarning={true}  className={`${poppins.className} relative`}>
        <Providers>
          <Header />
          <Template>{children}</Template>
          <BottomBar />
        </Providers>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T9H962MC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
      </body>
    </html>
    );
}
