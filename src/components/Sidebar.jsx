export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 lg:w-72 flex-shrink-0 p-8 md:p-12 md:sticky md:top-0 md:h-screen md:overflow-y-auto border-r border-gray-100">
      <div className="text-[9px] font-sans uppercase tracking-[0.3em] text-gray-400 mb-12 block md:hidden lg:block">
        / visual creator portfolio
      </div>

      <div className="mb-16">
        <h1 className="text-5xl font-serif text-gray-900 tracking-tight leading-none">
          Daffa
        </h1>
        {/* Teks Script Al Atha */}
        <h1 className="text-6xl font-script text-gray-600 -mt-2 -ml-2">
          Al Atha
        </h1>
        
        <p className="text-[9px] font-sans tracking-[0.2em] uppercase text-gray-400 mt-8">
          Documentary & Visual Arts
        </p>
      </div>
      
      <nav className="flex flex-col gap-4 text-[10px] font-sans tracking-[0.15em] uppercase text-gray-500">
        <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
        <a href="#collections" className="hover:text-gray-900 transition-colors">Collections</a>
        <a href="#about" className="hover:text-gray-900 transition-colors">About Us</a>
        <a href="#exhibitions" className="hover:text-gray-900 transition-colors">Exhibitions</a>
        
        <div className="h-4"></div> 
        
        <a href="#contact" className="hover:text-gray-900 transition-colors">Contacts</a>
        
        <div className="h-6"></div>

        <a href="#booking" className="inline-block text-center bg-[#1A1A1A] text-white py-3 px-6 rounded-none text-[10px] uppercase tracking-widest hover:bg-gray-700 transition-all">
          BOOK A SESSION
        </a>
      </nav>
    </aside>
  );
}