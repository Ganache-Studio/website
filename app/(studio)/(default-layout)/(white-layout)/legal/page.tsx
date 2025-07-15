import type { Metadata } from 'next';

import { CookiesPolicy } from './_components/cookies-policy';
import { PrivacyPolicy } from './_components/privacy-policy';
import { generateMetadata } from '../../../../_data/metadata';
import { pages } from '../../../../_data/pages';

export const metadata: Metadata = generateMetadata(pages.Legal);

export default function LegalPage() {
  return (
    <div className="flex flex-col items-center px-4 pt-4 pb-8">
      <div className="max-w-3xl space-y-10">
        <PrivacyPolicy />
        <div className="h-[0.5px] w-full bg-black" />
        <CookiesPolicy />
      </div>
    </div>
  );
}
