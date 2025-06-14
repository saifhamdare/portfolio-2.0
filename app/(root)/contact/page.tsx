import Socials from '@/components/Socials';
import { LampContainer } from '@/components/UI/Lamp';
import { about } from '@/utils/data';
import { Link } from '@nextui-org/react';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "SH Portfolio",
    openGraph: {
      title: "SH Portfolio",
      url: "https://saifhamdare-portfolio.netlify.app/contact",
      images: [
        {
          url: "https://cdn.freebiesupply.com/logos/large/2x/s-bahn-1-logo-png-transparent.png",
          alt: "portfolio-logo",
        },
      ],
    },
    twitter: {
      title: "SH Portfolio",
      images: [
        {
          url: "https://cdn.freebiesupply.com/logos/large/2x/s-bahn-1-logo-png-transparent.png",
          alt: "portfolio-logo",
        },
      ],
    },
  };

const Page = () => {
    return (
        <>
            <LampContainer>
                <div className='container text-center'>
                    <h2 className='text-sm md:text-lg mb-4'>Contact me at</h2>
                    <Link
                        href={`mailto:${about.details.email}`}
                        className='text-2xl md:text-4xl lg:text-7xl font-semibold text-gray-200 underline lg:mb-6'
                    >
                        {about.details.email}
                    </Link>
                    <Socials emailShow={false} />
                </div>
            </LampContainer>
        </>
    );
};

export default Page;
