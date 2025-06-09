'use client';

import Image from 'next/image';

interface PhotoGalleryProps {
  photos: string[];
  columns: 2 | 3 | 4;
}

const cols = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
};

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos,
  columns,
}) => {
  return (
    <div className={`grid gap-1 lg:gap-2 ${cols[columns]}`}>
      {photos.map((photo, index) => (
        <div key={index} className="relative aspect-[6/4] overflow-hidden">
          <Image
            src={photo}
            alt={`Festival photo ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};
