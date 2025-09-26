import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/navbars";
import Footers from "@/components/footer";
import Gallerys from "@/components/gallery";

export default function Gallery() {
  return (
    <main className="App">
      <Navbar />
      <Gallerys />
      <Footers />
    </main>
  );
}
