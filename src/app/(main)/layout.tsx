import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 px-8 py-6 overflow-auto bg-gray-100">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
