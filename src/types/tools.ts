import type { LucideIcon } from 'lucide-react';

export type ToolId =
  | 'scan'
  | 'image-to-pdf'
  | 'pdf-to-images'
  | 'merge-pdf'
  | 'split-pdf'
  | 'compress-pdf';

export type ToolDefinition = {
  id: ToolId;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProcessTask = {
  id: string;
  toolId: ToolId;
  status: 'queued' | 'processing' | 'done' | 'failed';
  progress: number;
  message?: string;
};
