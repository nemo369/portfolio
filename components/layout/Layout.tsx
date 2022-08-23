import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { AppHeader } from './AppHeader';

const Layout = function ({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();
  const withOutHeader = ['/404'];
  return (
    <section className="min-h-screen flex md:flex-row flex-col">
      {withOutHeader.includes(pathname) ? null : <AppHeader />}
      <main className="app-main min-h-[calc(100vh-64px)]">{children}</main>
    </section>
  );
};

export default Layout;
