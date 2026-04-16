export const Footer = () => {
  return (
    <footer className="w-full py-12 px-8 flex flex-col items-center justify-center text-center relative z-10">
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <a href="#" className="text-white/40 hover:text-white transition-colors text-[11px] uppercase tracking-[1px]">Privacy Policy</a>
        <a href="#" className="text-white/40 hover:text-white transition-colors text-[11px] uppercase tracking-[1px]">Terms of Service</a>
        <a href="#" className="text-white/40 hover:text-white transition-colors text-[11px] uppercase tracking-[1px]">Contact Us</a>
      </div>
      <p className="text-[11px] uppercase tracking-[1px] text-white/30">
        © {new Date().getFullYear()} THE COLLECTIVE
      </p>
    </footer>
  );
};
