import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Helmet from 'react-helmet';
import Logo from '../../images/logos/apple-touch-icon.png';
import Favicon from '../../images/logos/favicon-32x32.png';

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-full text-mainTextColor-light bg-deepPurple text-mainTextColor-dark">
      <Helmet>
        <title>출판사 달무리 (Dalmoori)</title>
        <meta name="description" content={'출판사 달무리입니다.'} />
        <meta name="url" content={'https://dalmoori.github.io'} />
        <meta name="image" content={Logo} />
        <link rel="icon" type="image/png" href={Favicon} sizes="32x32" />
      </Helmet>

      <Header />

      <div className="flex flex-col items-center justify-start flex-1">
        <div className="flex flex-col items-center w-full pt-24 pb-24 mx-auto text-center gap-y-16 px-14 max-w-7xl sm:px-14 md:px-8 lg:px-8">
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
