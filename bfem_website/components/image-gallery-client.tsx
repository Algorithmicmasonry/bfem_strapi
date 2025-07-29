"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageGalleryProps } from "@/types/gallery";

export default function ChurchGalleryClient({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  // Dynamically generate categories from images
  const categories = [
    "All",
    ...new Set(images.map((img) => img.category).filter(Boolean)),
  ];

  // Filter images based on the selected category
  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex =
        currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = selectedImage
    ? filteredImages.find((img) => img.id === selectedImage)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="relative bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
              Church Gallery
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Capturing moments of faith, fellowship, and celebration in our
              church community
            </p>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="rounded-full px-6 py-2 transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Masonry Gallery */}
        {images.length === 0 && (
          <div className="text-center py-12 text-gray-600">
            <p className="text-xl">No images found in the gallery.</p>
            <p className="mt-2 text-lg">
              Please add some images to your Strapi collection.
            </p>
          </div>
        )}

        {images.length > 0 && (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                  <div className="relative">
                    <Image
                      src={image.image.url || "/placeholder.svg"}
                      alt={image.image.alternativeText || image.title}
                      width={image.image.width || 400}
                      height={
                        image.image.height ||
                        (index % 3 === 0 ? 600 : index % 3 === 1 ? 400 : 500)
                      }
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          "/placeholder.svg?height=600&width=400&text=Image+Error";
                        e.currentTarget.alt = "Image failed to load";
                      }}
                    />
                    <div className="absolute inset-0 group-hover:bg-opacity-30 bg-opacity-0 transition-all duration-300 flex items-center justify-center">
                      <div className="text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          {image.title}
                        </h3>
                        <span className="text-sm bg-primary text-primary-foreground bg-opacity-20 px-3 py-1 rounded-full">
                          {image.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-30 z-50 flex items-center justify-center p-4">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="secondary"
              size="icon"
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-20 bg-white hover:bg-gray-100 text-black rounded-full h-12 w-12 shadow-lg"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="secondary"
              size="icon"
              onClick={() => navigateImage("prev")}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-100 text-black rounded-full h-12 w-12 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="secondary"
              size="icon"
              onClick={() => navigateImage("next")}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-100 text-black rounded-full h-12 w-12 shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Image Container */}
            <div className="relative max-w-5xl max-h-[90vh] mx-auto">
              <Image
                src={selectedImageData.image.url || "/placeholder.svg"}
                alt={selectedImageData.image.alternativeText || selectedImageData.title}
                width={selectedImageData.image.width}
                height={selectedImageData.image.height}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {selectedImageData.title}
                </h3>
                <span className="text-white text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  {selectedImageData.category}
                </span>
              </div>
            </div>

            {/* Click outside to close */}
            <div className="absolute inset-0 -z-10" onClick={closeLightbox} />
          </div>
        </div>
      )}
    </div>
  );
}
