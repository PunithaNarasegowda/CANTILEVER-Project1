import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Navbar />
      <main className="page-container">{children}</main>
    </div>
  );
};

export default Layout;
