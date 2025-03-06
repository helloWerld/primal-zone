import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SignUpModal from "@/components/ui/Modals/SignUpModal";

export const metadata = {
  title: "Primal Zone",
  description: "Holistic Hormal & Men's Health Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black min-h-screen w-full relative">
        <Navbar />
        {children}
        <Footer />
        <SignUpModal />
      </body>
    </html>
  );
}
