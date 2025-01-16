import type {AppProps} from 'next/app';

import '@/assets/css/main.css';
import {ReactElement,ReactNode} from 'react';
import {NextPage} from 'next';

export type NextPageWithLayout<P = object> = NextPage<P> & {
  authenticationRequired?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({
  Component,
  pageProps: {
    ...pageProps
  },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <>
      <div dir='ltr'>
        <>
          {/* <DefaultSeo /> */}
          {getLayout(<Component {...pageProps} />)}
        </>
      </div>
    </>
  );
}

export default CustomApp;
