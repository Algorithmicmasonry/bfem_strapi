// app/image-gallery/page.tsx
import { fetchStrapiImages } from "@/actions/fetchStrapiGallery";
import ChurchGalleryClient from "@/components/image-gallery-client";
import { Image } from "@/types/gallery"; // Import the Image type

export const dynamic = "force-dynamic";

const ImageGalleryPage = async () => {
  const data = await fetchStrapiImages();
  const galleryData = data.data;

  type GalleryItem = {
    id: string;
    documentId: string;
    title: string;
    category?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image?: {
      id: string;
      documentId: string;
      name: string;
      alternativeText?: string;
      caption?: string;
      width: number;
      height: number;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formats: any; // <- we can improve this too later
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string;
      provider: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      provider_metadata?: any;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    } | null;
  };

  // Transform Strapi data to match the client component's expected format
  const images: Image[] = galleryData.map((item: GalleryItem) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    category: item.category || "Uncategorized",
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    publishedAt: item.publishedAt,
    image: item.image
      ? {
          id: item.image.id,
          documentId: item.image.documentId,
          name: item.image.name,
          alternativeText: item.image.alternativeText || item.title,
          caption: item.image.caption,
          width: item.image.width,
          height: item.image.height,
          formats: item.image.formats,
          hash: item.image.hash,
          ext: item.image.ext,
          mime: item.image.mime,
          size: item.image.size,
          url: item.image.url,
          previewUrl: item.image.previewUrl,
          provider: item.image.provider,
          provider_metadata: item.image.provider_metadata,
          createdAt: item.image.createdAt,
          updatedAt: item.image.updatedAt,
          publishedAt: item.image.publishedAt,
        }
      : null,
  }));

  return (
    <div>
      {galleryData ? (
        <ChurchGalleryClient images={images} />
      ) : (
        <div className="text-center py-12 text-red-600">
          <p className="text-xl font-semibold">Error loading gallery</p>
          <p className="mt-2 text-lg">Please try again later.</p>
        </div>
      )}
    </div>
  );
};

export default ImageGalleryPage;
