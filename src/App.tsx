import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="bg-bg text-textMain font-poppins min-h-screen antialiased">
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
