export const Section = ({ children, id }: { children: React.ReactNode; id: string }) => {
  return (
    <section id={id} className="scroll-m-16 space-y-8 md:scroll-m-20 lg:scroll-m-[7vw] lg:space-y-16">
      {children}
    </section>
  );
};
