import { Cpu, Bell, UserCircle } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-16 bg-white border-b z-50 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 p-1 rounded-md">
          <Cpu className="text-white" size={20} />
        </div>
        <span className="text-lg font-bold tracking-tight">HireLogic</span>
      </div>
      <div className="flex items-center gap-4 text-slate-500">
        <Bell size={20} className="hover:text-blue-600 cursor-pointer" />
        <div className="h-8 w-8 bg-slate-200 rounded-full flex items-center justify-center">
          <UserCircle size={24} />
        </div>
      </div>
    </nav>
  );
};
