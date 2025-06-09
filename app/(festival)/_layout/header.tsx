import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  const getEdition = () => {
    if (pathname.includes('2023'))
      return (
        <p className="text-[2vw] text-black md:text-[1.6vw] lg:text-[1.2vw]">
          1<sup>ère</sup> édition
        </p>
      );
    if (pathname.includes('2024'))
      return (
        <p className="text-[2vw] text-black md:text-[1.6vw] lg:text-[1.2vw]">
          2<sup>ème</sup> édition
        </p>
      );
    return (
      <p className="text-[2vw] text-black md:text-[1.6vw] lg:text-[1.2vw]">
        3<sup>ème</sup> édition
      </p>
    );
  };

  return (
    <Link className="flex text-black" href="#presentation">
      <h2 className="text-[7vw] leading-none font-medium hover:no-underline md:text-[7.5vw] lg:text-[5.5vw]">
        GANACHE FESTIVAL
      </h2>
      {getEdition()}
    </Link>
  );
};
