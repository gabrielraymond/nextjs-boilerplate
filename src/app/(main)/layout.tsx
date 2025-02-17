import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        {/* {children} */}
      </div>
    </div>
  );
};

export default Layout;
