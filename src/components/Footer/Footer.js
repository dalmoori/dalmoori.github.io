import Copyrights from './Copyrights';
import Repository from './Repository';
import ToTopButton from './ToTopButton';

const Footer = () => {
  return (
    <div className="flex w-screen py-10 text-sm border-t border-gray-500 md:text-base">
      <div className="flex flex-col items-center justify-between w-full px-6 py-3 mx-auto md:flex-row max-w-7xl sm:px-6 lg:px-8 gap-y-3 md:gap-y-0">
        <Copyrights />
        <div className="flex items-center gap-x-5">
          <Repository />
          <ToTopButton />
        </div>
      </div>
    </div>
  );
};

export default Footer;
