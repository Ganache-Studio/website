// Validated

import Image from 'next/image';

const GanacheLogo = ({
  isWhite,
  className,
}: {
  isWhite: boolean;
  className?: string;
}) => {
  return (
    <Image
      src={
        isWhite
          ? '/images/ganache_logo_white.png'
          : '/images/ganache_logo_black.png'
      }
      width={0}
      height={0}
      alt="Ganache Logo"
      className={className}
      priority
    />
  );
};

export default GanacheLogo;
