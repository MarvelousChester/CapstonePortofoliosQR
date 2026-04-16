import { Search } from 'lucide-react';

export const Header = () => {
  return (
    <header className="w-full z-50 pt-10 pb-6 px-6 lg:px-10 relative">
      <nav className="flex items-center justify-between w-full max-w-screen-2xl mx-auto">
        <div className="w-6" /> {/* Spacer to keep title centered */}
        <h1 className="text-xl lg:text-2xl font-bold tracking-[2px] uppercase bg-gradient-to-r from-white to-[#AAA] bg-clip-text text-transparent">
          AUGI Team
        </h1>
        <Search className="text-white/60 hover:text-white transition-colors cursor-pointer" size={24} />
      </nav>
    </header>
  );
};
