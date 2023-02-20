import React from 'react';
import FooterSectionLayout from '../Layout/FooterSectionLayout';

const Repository = () => {
  return (
    <FooterSectionLayout title="Repository">
      <a
        href="https://github.com/orgs/dalmoori/repositories"
        className="text-white md:text-socialKakao md:hover:text-yellow "
        target={'_blank'}
        rel="noreferrer"
      >
        소스 코드 자료실
      </a>
    </FooterSectionLayout>
  );
};

export default Repository;
