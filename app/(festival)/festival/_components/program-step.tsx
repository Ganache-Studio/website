export const ProgrammeStep = ({
  title,
  films,
}: {
  title: string;
  films: { html: string }[] | undefined;
}) => {
  return (
    <div className="flex flex-col space-y-1 md:space-y-2 lg:space-y-4">
      <p className="text-lg md:text-xl lg:text-2xl">{title}</p>
      <div className="space-y-1">
        {films?.map(({ html }) => {
          return (
            <p
              className="text-xs md:text-sm lg:text-base"
              key={html}
              dangerouslySetInnerHTML={{ __html: html }}
            ></p>
          );
        })}
      </div>
    </div>
  );
};
