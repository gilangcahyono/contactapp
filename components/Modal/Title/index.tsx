const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h3 className="text-center font-semibold mb-3">{children}</h3>;
};

export default Title;
