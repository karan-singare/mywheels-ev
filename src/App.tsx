import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="bg-bg text-textMain font-poppins min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
