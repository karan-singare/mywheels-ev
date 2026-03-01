import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="bg-bg text-muted font-manrope min-h-screen antialiased">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
};

export default App;
