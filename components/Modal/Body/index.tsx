const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <p>
      {/* {Are you sure you want to delete this contact? This action cannot be
      undone.} */}
      {children}
    </p>
  );
};

export default Body;
