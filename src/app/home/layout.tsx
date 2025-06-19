import { Footer } from "@/components/footer";
import Header from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen overflow-x-hidden overflow-y-scroll bg-black">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
