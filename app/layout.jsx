"use client";

import '@styles/globals.css';
import Nav from '@components/Nav';
import { SessionProvider } from 'next-auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Provider } from 'next-auth/client';



const metadata = {
    title: 'PromptMe',
    description: 'PromptMe is a simple, open-source, and privacy-focused prompt generator.',
}



const RootLayout = ({ children, pageProps }) => {
    useEffect(() => {
        if (!pageProps.session && !router.pathname.includes('/login')) {
          router.push('/login');
        }
      }, [pageProps.session, router]);
const router = useRouter();

  return (
    
    <html lang="en">
        <body>
            
            <div className="main">
                <div className="gradient"/>
            </div>
            <main>
                <SessionProvider session={pageProps.session}>
                <Nav />
                {children}
                </SessionProvider>
            </main>
           
        </body>
    </html>
  )
}

export default RootLayout