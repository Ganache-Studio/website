'use client';

import { useState, useEffect } from 'react';

import { Film, FilmCard } from './film-card';
import { FilmModal } from './film-modal';

const defaultColor = '#ffffff';
const modalColor = '#201c1c';

const cols = {
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
};

export const FilmGallery = ({
  films,
  columns,
}: {
  films: Film[];
  columns: 3 | 4;
}) => {
  const [selectedFilmIndex, setSelectedFilmIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        isModalOpen ? modalColor : defaultColor,
      );
    }
  }, [isModalOpen]);

  const handleFilmClick = (index: number) => {
    setSelectedFilmIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    setSelectedFilmIndex((selectedFilmIndex + 1) % films.length);
  };

  const handlePrevious = () => {
    setSelectedFilmIndex(
      selectedFilmIndex === 0 ? films.length - 1 : selectedFilmIndex - 1,
    );
  };

  return (
    <>
      <div className={`grid grid-cols-2 ${cols[columns]} gap-1 lg:gap-2`}>
        {films.map((film, index) => (
          <div key={index} className="relative aspect-[6/4] overflow-hidden">
            <FilmCard film={film} onFilmClick={() => handleFilmClick(index)} />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <FilmModal
          film={films[selectedFilmIndex]}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </>
  );
};
