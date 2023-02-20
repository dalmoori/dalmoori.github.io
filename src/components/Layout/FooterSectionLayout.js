const FooterSectionLayout = ({ title, children }) => {
  return (
    <div className="flex gap-x-3">
      <h1 className="font-bold">{title}</h1>
      <div className="text-gray-500">{children}</div>
    </div>
  );
};

export default FooterSectionLayout;
