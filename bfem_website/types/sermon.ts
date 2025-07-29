// types/sermon.ts

// The structure for a media file (like coverImage, audioFile, documentFile)
// When populated, Strapi returns the full file object directly if not nested under 'attributes'.
export interface StrapiFile {
  id: number;
  documentId: string; // Add if your Strapi is using this custom field
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: any | null; // Can be more specific
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string; // This is the relative URL from Strapi
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// The structure of a single sermon item received directly from the API when flat
export interface SermonData { // Renamed from SermonDataItem to SermonData as it's the direct data item
  id: number;
  documentId: string; // Add if your Strapi uses this custom field
  title: string;
  Speaker: string; // <-- IMPORTANT: Use 'Speaker' with a capital 'S'
  date: string;
  scripture: string;
  description: string;
  duration: string;
  videoId: string | null;
  series: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  coverImage: StrapiFile | null; // Direct object, not { data: StrapiFile }
  audioFile: StrapiFile | null;   // Direct object, not { data: StrapiFile }
  documentFile: StrapiFile | null; // Direct object, not { data: StrapiFile }
}

// The full response structure from Strapi API
export interface StrapiSermonsResponse {
  data: SermonData[]; // 'data' is an array of SermonData objects directly
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}