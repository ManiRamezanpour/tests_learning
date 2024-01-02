const Header = (title: string): JSX.Element => {
  return (
    <header
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "5rem",
      }}
    >
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
