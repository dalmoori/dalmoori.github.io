const DetailSectionLayout = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center w-full pt-10 text-sm border-t border-opacity-50 border-blockBgColor-dark md:border-0 md:pt-5 md:items-start gap-y-3">
      <h3 className="text-lg font-bold">{title}</h3>
      {children}
    </div>
  );
};

export default DetailSectionLayout;
