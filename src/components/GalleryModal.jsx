import React from "react";

const GalleryModal = ({ images, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col p-8 overflow-y-auto">
      <div className="flex justify-between items-center mb-8 text-white">
        <h2 className="text-2xl font-bold">Gallery</h2>
        <button onClick={onClose} className="text-xl hover:text-red-400">
          ✕
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className="rounded-lg w-full object-cover max-h-96 shadow-lg hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryModal;
