import React, { useState } from 'react';
import GradientText from './GradientText';
import { portfolioPhotos, Photo } from '@/data/portfolio';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const PortfolioGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsDialogOpen(true);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    setIsDialogOpen(false);
  };

  // Function to get dynamic span classes for a puzzle-like layout
  const getSpanClasses = (index: number) => {
    let classes = "col-span-1"; // Default to 1 column on all screens

    // Apply different row spans for a varied height effect
    if (index % 4 === 0) { // Every 4th item is taller
      classes += " row-span-2";
    } else if (index % 7 === 1) { // Every 7th item is also taller
      classes += " row-span-2";
    }

    // Introduce wider spans only on larger screens
    if (index % 9 === 2) { // Every 9th item is wider on medium screens
      classes += " md:col-span-2";
    } else if (index % 13 === 5) { // Another item that's wider on large screens
      classes += " lg:col-span-2";
    }

    // For items that are both tall and wide on larger screens
    if (index % 15 === 8) {
      classes += " md:col-span-2 md:row-span-2";
    }

    return classes;
  };

  return (
    <section className="py-16 bg-background text-foreground p-4">
      <h2 className="text-5xl md:text-5xl font-extrabold text-center mb-12">
        <GradientText>Portfólio</GradientText>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto grid-flow-row-dense">
        {portfolioPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className={cn(
              "relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]",
              "min-h-[200px]", // Minimum height for single-row items
              getSpanClasses(index)
            )}
            onClick={() => openLightbox(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-sm">
                <p className="font-semibold">{photo.location}</p>
                <p className="text-xs text-gray-300">{photo.equipment}</p>
                <p className="text-xs text-gray-300">{photo.settings}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-full h-full flex items-center justify-center p-0 border-none bg-transparent">
          {selectedPhoto && (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-w-[90vw] max-h-[90vh] object-contain"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-3 rounded-md max-w-xs">
                <p className="font-semibold text-lg">{selectedPhoto.location}</p>
                <p className="text-base text-gray-300">{selectedPhoto.equipment}</p>
                <p className="text-base text-gray-300">{selectedPhoto.settings}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioGallery;