import React, { useState } from "react";
import galleryItems from "../data/gallery";
import GalleryModal from "./GalleryModal";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="gallery" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">📸 Gallery</h2>

        {/* Display first 6 images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.slice(0, 6).map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden border border-slate-700 shadow-md hover:scale-105 transition-transform"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover"
              />
              <div className="text-sm px-4 py-2 text-slate-300">{item.alt}</div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg text-sm font-semibold transition"
          >
            View All →
          </button>
        </div>

        {isOpen && (
          <GalleryModal
            images={galleryItems}
            onClose={() => setIsOpen(false)}
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;
