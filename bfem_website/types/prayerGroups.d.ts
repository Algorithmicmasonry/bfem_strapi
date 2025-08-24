
export interface PrayerGroup{
  id:number;
  documentId: string;
  name: string;
  meetingTime: string;
  focusArea: string;
  info: string;
  groupLink?: string;
  createdAt: Date | string;
  updatedAt: Date |string;
  publishedAt: Date | string; 
}