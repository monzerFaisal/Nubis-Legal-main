import { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ImageComponent.css';

const ImageComponent = ({ headings, imageUrl }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  const parallaxRef = useRef(null);
  const stickyContainerRef = useRef(null);

  // Track component visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const currentRef = parallaxRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => currentRef && observer.unobserve(currentRef);
  }, []);

  // Handle scroll effects when visible
  const handleScroll = useCallback(() => {
    if (!isVisible || !parallaxRef.current) return;

    const { top, height } = parallaxRef.current.getBoundingClientRect();
    const scrollRange = height - window.innerHeight;
    const scrollProgress = Math.max(0, -top / scrollRange);

    // Update current section index
    const newIndex = Math.min(
      Math.floor(scrollProgress * headings.length),
      headings.length - 1
    );
    if (newIndex !== currentIndex) setCurrentIndex(newIndex);

    // Update background scale
    setScale(1 + scrollProgress * 0.1);
  }, [isVisible, currentIndex, headings.length]);

  // Attach scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section className="parallax-section" ref={parallaxRef}>
      {isVisible && (
        <nav className="scroll-indicator">
          <ul>
            {headings.map((_, i) => (
              <li key={i}>
                <div
                  className="dot"
                  aria-current={i === currentIndex ? 'step' : undefined}
                />
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="sticky-container" ref={stickyContainerRef}>
        <div 
          className="background-image"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            transform: `scale(${scale})`
          }}
        >
          <div className="overlay" />
        </div>
        
        <div className="content">
          <h2 key={currentIndex} className="heading">
            {headings[currentIndex]}
          </h2>
        </div>
      </div>
    </section>
  );
};

ImageComponent.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default ImageComponent;