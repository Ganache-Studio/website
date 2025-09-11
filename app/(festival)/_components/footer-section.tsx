import GanacheLogo from '@/components/ganache-logo';

export const FooterSection = ({ year }: { year: string }) => {
  return (
    <footer className="relative flex h-dvh flex-col items-center justify-end text-sm">
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <GanacheLogo isWhite={false} className="h-32 w-auto object-contain md:h-48 lg:h-64" />
      </a>
      <p className="mb-4">&copy; Ganache Festival {year}</p>
    </footer>
  );
};
