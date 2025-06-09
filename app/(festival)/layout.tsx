import { FestivalProvider } from './_context/festival.context';
import { FestivalLayout } from './_layout/festival-layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <FestivalProvider>
      <FestivalLayout>{children}</FestivalLayout>
    </FestivalProvider>
  );
}
