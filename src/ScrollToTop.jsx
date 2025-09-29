
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function ScrollToTop({ threshold = 300 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || window.pageYOffset;
      setVisible(y > threshold);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // check initial scroll
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (!visible) return null;

  return (
    <button
      aria-label="Scroll to top"
      className="scrollTop"
      onClick={handleClick}
      data-testid="scroll-top-button"
    >
      ↑ Top
    </button>
  );
}

ScrollToTop.propTypes = {
  threshold: PropTypes.number,
};
