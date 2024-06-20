import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';
import { Providers } from './providers';
import Header from '@/components/Header';
import Template from './template';
import BottomBar from '@/components/BottomBar';

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
          url: "https://i.ibb.co/5k6rdvF/tabicon.png",
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
          url: "https://i.ibb.co/5k6rdvF/tabicon.png",
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
            <body className={`${poppins.className} relative`}>
                <Providers>
                    <Header />
                    <Template>{children}</Template>
                    <BottomBar />
                </Providers>
            </body>
        </html>
    );
}
