export interface Convention {
  id: number;
  documentId: string;
  name: string;
  date:  Date |string;
  info: string;
  createdAt: Date | string;
  updatedAt: Date |string;
  activity: Activity[];
}

interface Activity {
id: number;
activityName: string;
}