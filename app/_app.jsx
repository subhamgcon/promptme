import { Provider } from 'next-auth/client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Redirect to login page when there's no session
  useEffect(() => {
    if (!pageProps.session && !router.pathname.includes('/login')) {
      router.push('/login');
    }
  }, [pageProps.session, router]);

  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;