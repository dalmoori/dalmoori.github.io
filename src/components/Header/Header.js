import Logo from '../../images/logos/android-chrome-192x192.png';

const Header = () => {
  return (
    <header className="flex w-screen py-10 bg-opacity-50 bg-blockBgColor-dark">
      <div className="flex items-center justify-center w-full px-6 mx-auto gap-x-5 max-w-7xl sm:px-6 lg:px-8">
        <img
          src={Logo}
          alt="Logo"
          className="rounded-full w-[50px] hidden md:block"
        />
        <h1 className="text-xl font-bold md:text-4xl">
          <a href="/">출판사 달무리 (Dalmoori)</a>
        </h1>
      </div>
    </header>
  );
};

export default Header;
