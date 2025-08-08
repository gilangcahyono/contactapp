const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="flex items-center justify-between mb-4 pt-4">
      {children}
    </header>
  );
};

const Back = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-center font-semibold text-xl w-full">{children}</h1>
  );
};

const Actions = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

Header.Back = Back;
Header.Title = Title;
Header.Actions = Actions;

export default Header;
