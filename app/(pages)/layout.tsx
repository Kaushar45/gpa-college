const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}

      {/* Page Content */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
