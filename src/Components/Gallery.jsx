import { useEffect } from 'react';
import '../css/Gallery.css';

const images = [
  'https://via.placeholder.com/300/FF5733/FFFFFF?text=Image+1',
  'https://via.placeholder.com/300/FF5733/FFFFFF?text=Image+2',
  'https://via.placeholder.com/300/FF5733/FFFFFF?text=Image+3',
  'https://via.placeholder.com/300/FF5733/FFFFFF?text=Image+4',
  'https://via.placeholder.com/300/FF5733/FFFFFF?text=Image+5',
];

const Gallery = () => {
  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        document.querySelector('.GalleryContainer').scrollBy({
          left: 100,
          behavior: 'smooth',
        });
      } else {
        document.querySelector('.GalleryContainer').scrollBy({
          left: -100,
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="GalleryContainer">
      <div className="Gallery">
        {images.map((img, index) => (
          <div className={`gallery-item ${index % 2 === 0 ? 'zigzag-left' : 'zigzag-right'}`} key={index}>
            <img src={img} alt={`Gallery item ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
