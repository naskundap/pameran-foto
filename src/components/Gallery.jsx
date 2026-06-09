import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Kita aktifkan animasinya!
import { photos } from '../data/photos';

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const openLightbox = (index) => setSelectedIdx(index);
  const closeLightbox = () => setSelectedIdx(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="p-8 md:p-12 md:pt-12 w-full max-w-7xl mx-auto">
      
      {/* Header Galeri yang Dinamis */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-200 pb-6 gap-4"
      >
         <h2 className="text-3xl md:text-4xl font-serif italic text-gray-900">Selected Archives</h2>
         <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400">
           Documentary • 2025 - Present
         </span>
      </motion.div>

      {/* TATA LETAK MASONRY: Tidak kaku, tersusun asimetris */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {photos.map((photo, index) => (
          <motion.div 
            key={photo.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }} // Efek muncul bergantian
            className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500"
            onClick={() => openLightbox(index)}
          >
            {/* Foto dengan efek Zoom halus saat dihover */}
            <img 
              src={photo.imageUrl} 
              alt={photo.title} 
              className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Overlay Gelap Elegan yang muncul saat dihover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
               <p className="text-2xl md:text-3xl font-serif italic text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 {photo.title}
               </p>
               <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-gray-300 mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                 {photo.category}
               </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Manual (Tanpa Autoplay) */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex flex-col justify-center items-center select-none"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-8 right-8 text-gray-400 hover:text-gray-900 transition-colors z-50">
              <X size={32} strokeWidth={1.5} />
            </button>

            <button onClick={prevImage} className="absolute left-4 md:left-12 p-4 text-gray-400 hover:text-gray-900 transition-colors z-50">
              <ChevronLeft size={40} strokeWidth={1} />
            </button>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh] p-4 flex flex-col items-center relative" 
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={photos[selectedIdx].imageUrl} 
                alt={photos[selectedIdx].title} 
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="mt-8 text-center px-4 max-w-xl">
                <p className="text-4xl font-script text-gray-900">{photos[selectedIdx].title}</p>
                <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-gray-500 mt-3">{photos[selectedIdx].category}</p>
              </div>
            </motion.div>

            <button onClick={nextImage} className="absolute right-4 md:right-12 p-4 text-gray-400 hover:text-gray-900 transition-colors z-50">
              <ChevronRight size={40} strokeWidth={1} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}