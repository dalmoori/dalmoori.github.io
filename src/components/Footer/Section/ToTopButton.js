import React from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const ToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="cursor-pointer">
      <FaArrowAltCircleUp color="black" size={25} onClick={scrollToTop} />
    </div>
  );
};

export default ToTopButton;
