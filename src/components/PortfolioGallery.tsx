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

  return (
    <section className="py-16 bg-background text-foreground p-4">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        <GradientText>Portfólio</GradientText>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {portfolioPhotos.map((photo) => (
          <div
            key={photo.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => openLightbox(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:opacity-80"
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
                <p className="text-sm text-gray-300">{selectedPhoto.equipment}</p>
                <p className="text-sm text-gray-300">{selectedPhoto.settings}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioGallery;