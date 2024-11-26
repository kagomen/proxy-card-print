import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageUploadSection from "@/components/ImageUploadSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <ImageUploadSection />
      <Footer />
    </div>
  );
}
