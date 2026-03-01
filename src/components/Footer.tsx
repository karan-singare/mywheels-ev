export default function Footer() {
  return (
    <footer className="bg-footerBg text-white">
      <div className="px-6 md:px-[60px] py-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-semibold text-lg">MyWheels EV Pvt Ltd</p>
          <p className="text-white/90 text-sm">
            © {new Date().getFullYear()} MyWheels EV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
