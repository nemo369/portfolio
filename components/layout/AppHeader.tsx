import Link from 'next/link';
import Hamburger from '../svgs/Hamburger';
import Logo from '../svgs/Logo';

export function AppHeader() {
  return (
    <header className="app-header h-10 md:h-screen md:w-[100px]">
      <div className="fixed h-10 md:h-screen md:w-[100px] bg-black inset-0 border-b border-gray-1 z-10 md:py-10">
        <div className="w-full h-full px-5 flex md:flex-col items-center justify-between">


          <Link href="/" >
            <a className="logo nemo-logo block">
              <Logo />
            </a>
          </Link>
          <span className="sr-only">Naaman Frenkel</span>


          <button type='button' className='Hamburger bg-transparent border-0 text-white shadow-none h-16 w-16 p-0 grid place-content-center' >
            <Hamburger />
            <span className="sr-only">Open menu</span>
          </button>

          <div className='text-white text-center'>
            Naaman Frenkel
          </div>
        </div>
      </div>

    </header>
  );
}
