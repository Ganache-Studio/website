import { CookiesPolicy } from './_components/cookies-policy';
import { PrivacyPolicy } from './_components/privacy-policy';

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
