'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';

type ClickableModalImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

export const ClickableModalImage = ({ src, alt = '', className = '' }: ClickableModalImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        className={`${className} cursor-pointer`}
        width={0}
        height={0}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:opacity-80 focus:outline-none"
            onClick={e => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <FiX className="size-8" />
          </button>
          <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            className="max-h-[90vh] w-full bg-black object-contain px-2"
          />
        </div>
      )}
    </>
  );
};
