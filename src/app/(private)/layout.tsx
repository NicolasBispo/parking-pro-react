"use client";
import { ActionBar, Navbar, Sidebar } from "@/components";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {

const { } = useRouter()

  return (
    <main className="w-full h-full min-h-screen flex flex-col bg-light-background-main">
      <div className="w-full h-16">
        <Navbar />
      </div>
      <div className="w-full p-8 flex gap-4">
        <div className="w-1/5 h-fit">
          <Sidebar />
        </div>
        <div className="w-4/5 flex flex-col gap-2">
        <ActionBar>a</ActionBar>
        <div className="w-full bg-light-primary-main rounded-lg h-[600px] overflow-auto">
          {children}
        A</div>
        </div>
        
      </div>
    </main>
  );
}
