import FooterSectionLayout from '../../Layout/FooterSectionLayout';

const Copyrights = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <FooterSectionLayout title="Copyrights">
      <div>
        ⓒ {year}.{' '}
        <a
          href="https://dalmoori.github.io/"
          className="text-linkBlue hover:text-deepBlue"
        >
          달무리 (Dalmoori)
        </a>{' '}
        Co. All rights reserved.
      </div>
    </FooterSectionLayout>
  );
};

export default Copyrights;
