import FooterSectionLayout from '../Layout/FooterSectionLayout';

const Copyrights = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <FooterSectionLayout title="Copyrights">
      <div className="flex flex-col gap-y-1 md:gap-y-0 md:flex-row md:gap-x-1">
        <div className="flex gap-x-1">
          <div>ⓒ {year}.</div>
          <a
            href="https://dalmoori.github.io/"
            className="text-socialKakao hover:text-yellow"
          >
            달무리 (Dalmoori)
          </a>
          <div>Co.</div>
        </div>
        <div>All rights reserved.</div>
      </div>
    </FooterSectionLayout>
  );
};

export default Copyrights;
