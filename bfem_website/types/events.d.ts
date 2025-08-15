 export interface EventImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  formats: any; // Or define a more specific interface for formats
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string; // The URL is directly here
  previewUrl: string | null;
  provider: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Define the main Event interface
 export interface Event {
  id: number;
  documentId: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  recurring: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image?: EventImage; // The image object is directly of type EventImage, and optional
}

export interface EventsPageClientProps {
  data: Event[]; // Expect an array of Event objects
}
