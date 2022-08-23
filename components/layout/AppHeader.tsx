import Link from 'next/link';
import  Logo  from '../svgs/Logo';

export function AppHeader() {
  return (
    <header className="app-header h-10 md:h-screen md:w-[100px]">
      <div className="fixed h-10 md:h-screen md:w-[100px] bg-black inset-0 border-b border-gray-1 z-10">
        <div className="w-full h-full px-5 flex items-center justify-between">
          <div className="logo nemo-logo">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
            <span className="sr-only">Naaman Frenkel</span>
          </div>
        </div>
      </div>
    </header>
  );
}
