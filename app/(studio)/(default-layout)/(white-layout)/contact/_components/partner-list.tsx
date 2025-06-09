import Image from 'next/image';
import Link from 'next/link';

import { contactPartners } from '../../../../../_data/(studio)/contact-partners';

const PartnerList = () => {
  return (
    <>
      {contactPartners.map((partner, index) => (
        <Link
          key={index}
          href={partner.link}
          className="relative h-full w-full"
        >
          <Image
            src={partner.src}
            alt={partner.alt}
            fill={true}
            className="object-contain p-1 transition-all duration-300 ease-in-out hover:p-0"
          />
        </Link>
      ))}
    </>
  );
};

export default PartnerList;
