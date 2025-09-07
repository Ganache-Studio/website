import Link from 'next/link';

export const Header = ({ editionNumber }: { editionNumber: number }) => {
  return (
    <Link className="flex text-black" href="#presentation">
      <h2 className="text-[7vw] leading-none font-medium hover:no-underline md:text-[7.5vw] lg:text-[5.5vw]">
        GANACHE FESTIVAL
      </h2>
      <p className="text-[2vw] text-black md:text-[1.6vw] lg:text-[1.2vw]">
        {editionNumber}
        <sup>{editionNumber === 1 ? 'ère' : 'ème'}</sup> édition
      </p>
    </Link>
  );
};
